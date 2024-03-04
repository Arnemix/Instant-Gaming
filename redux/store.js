import { configureStore } from "@reduxjs/toolkit";
import userCart from "./userCart";

const store = configureStore({
    reducer: {
        userCart: userCart,
    },
});

export default store;
