import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slice/userslice";
import {vehicleSlice} from "./slice/vehicleSlice";

const persistConfig = { key: "user", storage, version: 1 };
const UserpersistedReducer = persistReducer(persistConfig, userSlice.reducer);

const persistConfigVehicle = { key: "vehicle", storage, version: 1 };
const VehiclepersistedReducer = persistReducer(persistConfigVehicle, vehicleSlice.reducer);

const rootReducer = combineReducers({
    user: UserpersistedReducer,
    vehicle: VehiclepersistedReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
