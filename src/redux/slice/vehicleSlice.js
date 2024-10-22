import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   data:[],
};

export const vehicleSlice = createSlice({
    name: "vehicle",
    initialState,
    reducers: {
        setVehicle: (state, action) => {
            console.log(action.payload,`from redux`)
            state.data = action.payload; 
        },

        
    },
});

export const { setVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
