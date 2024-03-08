import "@/app/globals.css";
import CartGameCard from "@/components/cartGameCard/CartGameCard";
import NavBar from "@/components/navbar/NavBar";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import "./style.scss";
// Pour le dark mode
// const isDarkMode = true;
// if (isDarkMode) {
//     import("./dark.scss");
// } else {
//     import("./style.scss");
// }
function CartPage(props) {
    const cart = useSelector((state) => state.userCart);

    return (
        <>
            <Toaster position="bottom-left" />

            <div className="page-container">
                <h1 className="page-title">Mon panier</h1>
                <div className="cart-items-container">
                    {cart.length === 0 ? (
                        <h1>Votre panier est vide</h1>
                    ) : (
                        cart.map((item, index) => {
                            return <CartGameCard key={index} game={item} />;
                        })
                    )}
                </div>
                <div className="cart-summary">
                    <h2>Total : {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}€</h2>
                    <h2>TVA : {cart.reduce((acc, item) => acc + item.price * item.quantity * 0.21, 0).toFixed(2)}€</h2>
                    <button
                        onClick={() => {
                            toast.error("Les moyens de paiements ne sont pas encore disponibles");
                        }}
                        className="button cart-item-button"
                    >
                        Procéder au paiement
                    </button>
                </div>
            </div>
        </>
    );
}

export default CartPage;
