import {useState, useEffect, SetStateAction} from "react";
import {fetchAllUsers} from "../../api/apiUser";
import Paginate from "../../helpers/paginate.tsx";
import AddNewUser from "../../components/modal/AddNewUser";
import _ from "lodash";
import ImportCSV from "../../components/csv/Import.tsx";
import ExportCSV from "../../components/csv/Export.tsx";
import ModalEditUser from "../../components/modal/EditUser.tsx";
import ModalDeleteUser from "../../components/modal/DeleteUser.tsx";
import SearchByEmail from "../../components/SearchByEmail.tsx";
import {Table} from "react-bootstrap";

const UserList = () => {
    useEffect(() => {
        // call api
        getAllUsers(1);
    }, []);
    const [listUsers, setListUser] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [dataUsers, setDataUser] = useState({});
    const [sortBy, setSortBy] = useState("asc");
    const [sortField, setSortField] = useState("id");
    const getAllUsers = async (page: number) => {
        let res = await fetchAllUsers(page);
        if (res && res.data) {
            setListUser(res.data);
            setTotalUsers(res.total);
            setTotalPages(res.total_pages);
        } else {
            setListUser([]);
        }
    };
    const handleUpdateTable = (user: any) => {
        // @ts-ignore
        setListUser([user, ...listUsers]);
    };
    const handleEditTable = (user: { id: any; }) => {
        let index = listUsers.findIndex((item) => item.id === user.id);
        let listUsersCopy = _.cloneDeep(listUsers);
        listUsersCopy[index].first_name = user.first_name;
        setListUser(listUsersCopy);
    };
    const handleEditUser = (user: SetStateAction<{}>) => {
        setShowEdit(true);
        setDataUser(user);
    };
    const handleDeleteUser = (user: SetStateAction<{}>) => {
        setShowDelete(true);
        setDataUser(user);
    };
    const handleDeleteFromModal = (user: { first_name: any; }) => {
        let listUsersCopy = _.cloneDeep(listUsers);
        listUsersCopy = listUsersCopy.filter((item: { id: any; }) => item.id !== user.id);
        setListUser(listUsersCopy);
    };
    const handleSort = (sortBy: SetStateAction<string>, sortField: SetStateAction<string>) => {
        setSortBy(sortBy);
        setSortField(sortField);
        let listUsersCopy = _.cloneDeep(listUsers);
        listUsersCopy = _.orderBy(listUsersCopy, [sortField], [sortBy]);
        setListUser(listUsersCopy);
    };
    return (
        <div>
            <div className="mt-5 pt-3 title">Manage users</div>
            <div className="d-flex gap-3">
                <AddNewUser handleUpdateTable={handleUpdateTable}/>
                <ImportCSV setListUser={setListUser}/>
                <ExportCSV listUsers={listUsers}/>
            </div>
            <ModalEditUser
                setShowEdit={setShowEdit}
                showEdit={showEdit}
                dataUsers={dataUsers}
                handleEditTable={handleEditTable}
            />
            <ModalDeleteUser
                setShowDelete={setShowDelete}
                showDelete={showDelete}
                dataUsers={dataUsers}
                handleDeleteFromModal={handleDeleteFromModal}
            />
            <SearchByEmail
                getAllUsers={getAllUsers}
                listUsers={listUsers}
                setListUser={setListUser}
            />
            <div className="table-container">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th className="d-flex flex-row justify-content-center align-items-center gap-2">
                                ID
                                <span className="d-flex flex-row gap-1">
                                    <i onClick={() => handleSort("asc", "id")} className="fa-solid fa-arrow-up-long text-primary cursor-pointer"></i>
                                    <i onAbort={() => handleSort("desc", "id")} className="fa-solid fa-arrow-down-long text-info cursor-pointer"></i>
                                </span>
                            </th>
                            <th>
                                <span className="d-flex flex-row justify-content-center align-items-center gap-2">
                                    First Name
                                    <span className="d-flex flex-row gap-1">
                                        <i onClick={() => handleSort("asc", "first_name")}
                                           className="fa-solid fa-arrow-up-long text-primary cursor-pointer"></i>
                                        <i onAbort={() => handleSort("desc", "first_name")}
                                           className="fa-solid fa-arrow-down-long text-info cursor-pointer"></i>
                                    </span>
                                </span>
                            </th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr key={`user-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td className="d-flex justify-content-evenly gap-3">
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => handleEditUser(item)}
                                            >
                                                <i className="fa-solid fa-user-pen text-white"></i>
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteUser(item)}
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="paginate">
                <Paginate totalPages={totalPages} getAllUsers={getAllUsers}/>
            </div>
        </div>
    );
};
export default UserList;