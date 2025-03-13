import {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {toast} from "react-toastify";
import {updateUser} from "../../api/apiUser";

const ModalEditUser = (props: { handleEditTable: any; setShowEdit: any; showEdit: any; dataUsers: any; }) => {
    const [job, setJob] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    let {handleEditTable, setShowEdit, showEdit, dataUsers} = props;
    const handleClose = () => setShowEdit(false);
    const handleOnClickEdit = async () => {
        if (!name && !job) {
            toast.error("Invalid name & job!");
            return;
        }
        if (!name) {
            toast.error("Invalid name!");
            return;
        }
        if (!job) {
            toast.error("Invalid job!");
            return;
        }
        let res = await updateUser(name, job);
        if (res && res.updatedAt) {
            // success
            setShowEdit(false);
            setName("");
            setJob("");
            toast.success("Update user successfully");
            handleEditTable({first_name: name, id: dataUsers.id});
        }
    };
    useEffect(() => {
        if (showEdit) {
            setName(dataUsers.first_name);
            setId(dataUsers.id);
        }
    }, [dataUsers]);
    return (
        <>
            <Modal backdrop="static" show={showEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-6 text-uppercase text=primary">
                        Edit user
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control" value={id} hidden/>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">
                            Name
                        </span>
                        <input type="text" className="form-control" value={name} onChange={(event) => {
                            setName(event.target.value);
                        }}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">
                            Job
                        </span>
                        <input type="text" className="form-control" value={job} onChange={(event) => {
                            setJob(event.target.value);
                        }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleOnClickEdit}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalEditUser;