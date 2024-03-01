import NavBar from "@/components/navbar/NavBar";
import React from "react";
import "@/app/globals.css";

function CartPage(props) {
    return (
        <>
            <NavBar />
            <div className="page-container">
                <h1 className="page-title">Mon panier</h1>
            </div>
        </>
    );
}

export default CartPage;
