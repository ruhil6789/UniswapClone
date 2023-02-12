import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import addressSlice from "./address/addressSlice";
import swapSlice from "./swap/swapSlice";

const reducers = combineReducers({
    swapSlice: swapSlice,
    addressSlice: addressSlice
});
const persistConfig = {
    ket: 'root',
    
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducers: persistReducer,
    devTools: process.env.Node_ENV != "production",
    middleware: { thunk },
})
export default store