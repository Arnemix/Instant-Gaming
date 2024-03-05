import { configureStore } from "@reduxjs/toolkit";
import userCart from "./userCart";
import userAccount from "./userAccount";

const store = configureStore({
    reducer: {
        userCart: userCart,
        userAccount: userAccount,
    },
});

export default store;
