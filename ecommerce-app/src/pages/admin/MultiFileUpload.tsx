import React, {useState} from 'react';

function MultiFileUpload() {
    // State to hold an array of file inputs
    const [inputs, setInputs] = useState([{id: Date.now(), file: null}]);
    // Handle file change for a specific input
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const newFile = event.target.files[0];
        // File validation: only allow images
        if (newFile && !newFile.type.startsWith('image/')) {
            alert('Please upload an image file!');
            return;
        }
        setInputs(inputs.map(input => input.id === id ? {...input, file: newFile} : input));
    };
    // Add a new file input
    const addFileInput = () => {
        setInputs([...inputs, {id: Date.now(), file: null}]);
    };
    // Remove a specific file input
    const removeFileInput = (id: { id: number; file: null; }) => {
        setInputs(inputs.filter(input => input.id !== id));
    };
    // Handle file upload (dummy function for this example)
    const handleUpload = () => {
        const formData = new FormData();
        inputs.forEach(input => {
            if (input.file) {
                formData.append('files[]', input.file);
            }
        });
        // Example upload to server
        fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log('Upload success', data))
            .then((error) => console.log('Upload failed', error));
    };
    return (
        <div>
            <h2>Multi-File upload with add more inputs</h2>
            {inputs.map((input) => (
                <div key={input.id}>
                    <input type="file" className="mb-3" onChange={(e) => handleFileChange(e, input.id)}/>
                    <button type="button" onClick={() => removeFileInput(input.id)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" className="btn btn-outline-primary mr-3 mb-3" onClick={addFileInput}>
                Add More Files
            </button>
            <button type="button" className="btn btn-outline-primary mb-3" onClick={handleUpload} disabled={inputs.every(input => !input.file)}>
                Upload Files
            </button>
        </div>
    );
}

export default MultiFileUpload;