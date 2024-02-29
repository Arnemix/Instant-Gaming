import Link from "next/link";
import "./style.scss";

const GameCard = ({ game }) => {
    
    return (
        <div className="game-card">
            <Link className="game-card-content" href={`/games/${game.id}`}>
                <div className="game-image">
                    <img src={game.thumbnail} alt={game.title} />
                </div>
                <div className="game-content">
                    <div className="content-description">
                        <h1>{game.title}</h1>
                    </div>
                    <div className="content-options">
                        <h3>
                            {Math.floor(Math.random() * 100)} {game.price}€
                        </h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GameCard;
