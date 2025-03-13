import {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {toast} from "react-toastify";
import {deleteUser} from "../../api/apiUser";

const ModalDeleteUser = (props: { handleDeleteFromModal: any; setShowDelete: any; showDelete: any; dataUsers: any; }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    let {handleDeleteFromModal, setShowDelete, showDelete, dataUsers} = props;
    const handleClose = () => setShowDelete(false);
    const handleOnClickDelete = async () => {
        let res = await deleteUser(id);
        if (res && res.statusCode === 204) {
            // success
            setShowDelete(false);
            toast.success("Delete user successfully");
            handleDeleteFromModal(dataUsers);
        } else {
            toast.error("Delete user error");
        }
    };
    useEffect(() => {
        if (showDelete) {
            setName(dataUsers.first_name);
            setId(dataUsers.id);
        }
    }, [dataUsers]);
    return (
        <>
            <Modal show={showDelete} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title className="fs-6 text-uppercase text=primary">
                        Delete user
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control" value={id} hidden/>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">
                            Do you want to delete {name}'s user
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleOnClickDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalDeleteUser;
