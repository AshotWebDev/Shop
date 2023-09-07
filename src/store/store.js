import { configureStore } from "@reduxjs/toolkit";
import { newProductApi, newProductReducer } from "./slices/newProductAPI/newProductAPI";

const store = configureStore({
    reducer: {
        newProduct: newProductReducer,
    },
    middleware: (getDefaultMiddlware)=>[
        ...getDefaultMiddlware(),
        newProductApi.middleware
    ]
})


export default store