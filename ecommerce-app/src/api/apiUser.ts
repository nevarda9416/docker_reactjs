import axios from "../helpers/axios";
const fetchAllUsers = (page: number) => {
    return axios.get(`/users?page=${page}`);
};
const createNewUser = (name: string, job: string) => {
    return axios.post(`/users`, {name, job});
};
const updateUser = (name: string, job: string, id: number) => {
    return axios.put(`users/${id}`, {name, job, id});
};
const deleteUser = (id: string) => {
    return axios.delete(`/users/${id}`, {id});
};
const loginAPI = (email: string, password: string) => {
    return axios.post(`/login`, {email, password});
};
export {fetchAllUsers, createNewUser, updateUser, deleteUser, loginAPI};