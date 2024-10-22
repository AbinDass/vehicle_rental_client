import Axios from "axios";

const axiosUser = Axios.create({
    baseURL: "http://localhost:3001/",
});

const axiosAdmin = Axios.create({
    baseURL: "http://localhost:3001/admin",
});

const axiosAuth = Axios.create({
    baseURL: "http://localhost:3001/auth",
});

export { axiosAdmin, axiosUser,axiosAuth };
