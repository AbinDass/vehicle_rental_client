import { axiosAuth } from "../axiosInstance";

export const signUp = async (userData) => {
    const signupResponse = await axiosAuth.post(`/register`, userData)
    return signupResponse;
}