import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const userCart = createSlice({
    name: "userCart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const game = state.find((item) => item.id === action.payload.id);
            if (game) {
                game.quantity++;
                toast.success(`${action.payload.title} a été ajouté à votre panier (Doublons : ${game.quantity})`, {
                    duration: 3000,
                    icon: "👌",
                });
                return;
            }
            const itemToAdd = { ...action.payload, quantity: 1 };
            state.push(itemToAdd);
            toast.success(`${action.payload.title} a été ajouté à votre panier`, {
                duration: 3000,
                icon: "👌",
            });
        },
        removeFromCard: (state, action) => {
            const game = state.find((item) => item.id === action.payload.id);
            if (game) {
                if (game.quantity > 1) {
                    game.quantity--;
                    toast.success(`${action.payload.title} a été retiré de votre panier (Doublons : ${game.quantity})`, {
                        duration: 3000,
                        icon: "🗑️",
                    });
                } else {
                    const index = state.indexOf(game);
                    state.splice(index, 1);
                    toast.success(`${action.payload.title} a été retiré de votre panier`, {
                        duration: 3000,
                        icon: "🗑️",
                    });
                }
            } else {
                toast.error(`${action.payload.title} n'a pas été dans votre panier`, {
                    duration: 3000,
                    icon: "❌",
                });
            }
        },
    },
});

export const { addToCart, removeFromCard } = userCart.actions;
export default userCart.reducer;
