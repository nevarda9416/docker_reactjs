Ahh got it — so you want:

The child component (Dropzone) to fetch pre-signed URLs and prepare files

The parent component to submit the form and trigger the actual upload to S3

That’s a slight twist compared to the usual pattern. Here's how we can do it 👇

✅ What We're Building

Component	Responsibility
DropzoneChild	Select files + fetch pre-signed S3 upload details
ParentForm	Trigger file uploads to S3 on form submit
🔹 1. Child Component: DropzoneChild.jsx
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const DropzoneChild = ({ onPreparedFiles }) => {
  const [preparedFiles, setPreparedFiles] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const filesWithPresignedData = await Promise.all(
      acceptedFiles.map(async (file) => {
        const { data } = await axios.post('/api/presigned-url', {
          filename: file.name,
          filetype: file.type,
        });

        return {
          file,
          presignedUrl: data.url,
          presignedFields: data.fields,
        };
      })
    );

    setPreparedFiles(filesWithPresignedData);
    onPreparedFiles(filesWithPresignedData); // Send prepared upload data to parent
  }, [onPreparedFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #aaa', padding: '20px', cursor: 'pointer' }}>
      <input {...getInputProps()} />
      <p>Drag & drop or click to select files</p>
      {preparedFiles.length > 0 && (
        <ul>
          {preparedFiles.map(({ file }, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropzoneChild;
🔹 2. Parent Component: ParentForm.jsx
import React, { useState } from 'react';
import DropzoneChild from './DropzoneChild';
import axios from 'axios';

const ParentForm = () => {
  const [preparedFiles, setPreparedFiles] = useState([]);

  const handlePreparedFiles = (files) => {
    setPreparedFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uploads = preparedFiles.map(async ({ file, presignedUrl, presignedFields }) => {
        const formData = new FormData();
        Object.entries(presignedFields).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append('file', file);

        await axios.post(presignedUrl, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        return presignedFields.key;
      });

      const uploadedKeys = await Promise.all(uploads);
      console.log('Files uploaded to S3:', uploadedKeys);
      alert('Upload complete!');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Files to S3</h2>
      <DropzoneChild onPreparedFiles={handlePreparedFiles} />
      <button type="submit" disabled={!preparedFiles.length}>
        Submit & Upload
      </button>
    </form>
  );
};

export default ParentForm;
🔹 Backend Endpoint (Node.js/Express + AWS SDK)
app.post('/api/presigned-url', (req, res) => {
  const { filename, filetype } = req.body;
  const s3 = new AWS.S3();

  const key = `uploads/${Date.now()}-${filename}`;
  const params = {
    Bucket: 'your-bucket-name',
    Fields: {
      key,
      'Content-Type': filetype,
    },
    Conditions: [
      ['starts-with', '$key', 'uploads/'],
      ['content-length-range', 0, 10485760],
    ],
    Expires: 60,
  };

  s3.createPresignedPost(params, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
});
🚀 Summary
The child component fetches the pre-signed URLs right when files are selected.

The parent only uploads when the user hits Submit.