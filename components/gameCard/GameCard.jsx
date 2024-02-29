import React from "react";
import { BsCart } from "react-icons/bs";

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div className="game-image">
                <img src={game.image} alt={game.name} />
            </div>
            <div className="game-content">
                <div className="content-description">
                    <h1>{game.name}</h1>
                    <p>{game.description}</p>
                </div>
                <div className="content-options">
                    <h3>Prix : {game.price}€</h3>
                </div>
                <button>
                    <BsCart />
                </button>
            </div>
        </div>
    );
};

export default GameCard;
