import { createSlice } from "@reduxjs/toolkit";

const userAccount = createSlice({
    name: "userAccount",
    initialState: [
        {
            name: "Guest",
            email: "",
            password: "",
            isAdmin: false,
        },
    ],
    reducers: {
        login: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export default userAccount.reducer;
export const { login } = userAccount.actions;
