import { axiosAuth } from "../axiosInstance";

export const logIn = async (userData) => {
    const loginResponse = await axiosAuth.post(`/login`, userData)
    return loginResponse;
}