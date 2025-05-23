import axios from 'axios';
const instance = axios.create({
    baseURL: "https://reqres.in/api"
});
// Add a reponse interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that line within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data ? response.data : {statusCode: response.status};
    },
    function (error) {
        let res = {};
        if (error.response) {
            res.data = error.response.data;
            res.status = error.response.status;
            res.headers = error.response.headers;
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser
            // and an instance of http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        return res;
    }
);
export default instance;