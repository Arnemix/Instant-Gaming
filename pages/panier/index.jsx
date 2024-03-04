import NavBar from "@/components/navbar/NavBar";
import React, { useEffect } from "react";
import "@/app/globals.css";
import { useSelector } from "react-redux";
import Loader from "@/components/loader/Loader";
import CartGameCard from "@/components/cartGameCard/CartGameCard";
import "./style.scss";

function CartPage(props) {
    const cart = useSelector((state) => state.userCart);

    useEffect(() => {
        console.log(`Panier : ${JSON.stringify(cart)}`);
    }, [cart]);
    return (
        <>
            <NavBar />
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
            </div>
        </>
    );
}

export default CartPage;
