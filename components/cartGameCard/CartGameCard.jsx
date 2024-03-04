import { removeFromCard } from "@/redux/userCart";
import React from "react";
import { useDispatch } from "react-redux";

function CartGameCard({ game }) {
    const dispatch = useDispatch();
    return (
        <div className="cart-game-card">
            <div className="cart-card-title-image">
                <img src={game.thumbnail} alt={game.title} />
            </div>
            <div className="cart-card-content">
                <div className="cart-card-info">
                    <h1>{game.title}</h1>
                    <h3>{game.price}€</h3>
                    <p>Quantité : {game.quantity}</p>
                </div>
                <div className="cart-card-button">
                    <button className="button cart-item-button" onClick={() => dispatch(removeFromCard(game))}>
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartGameCard;
