import { axiosUser } from "../axiosInstance";

export const allVehicles = async () => {
    const allVehiclesResponse = await axiosUser.get(`/allvehicles`)
    return allVehiclesResponse;
}