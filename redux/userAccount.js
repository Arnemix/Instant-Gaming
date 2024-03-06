import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const userAccount = createSlice({
    name: "userAccount",
    initialState: [],
    reducers: {
        login: (state, action) => {
            state = action.payload;
            toast.success(`Bienvenue ${action.payload.name}, votre mot de passe est ${action.payload.password}`, {
                duration: 3000,
                icon: "👏",
            });

            return state;
        },
    },
});

export default userAccount.reducer;
export const { login } = userAccount.actions;
