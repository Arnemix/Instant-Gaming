import Link from "next/link";
import "./style.scss";

const GameCard = ({ game, showDate }) => {
    return (
        <div className="game-card">
            <Link className="game-card-content" href={`/games/${game.id}`}>
                <div className="game-image">
                    <img src={game.thumbnail} alt={game.title} />
                </div>
                <div className="game-content">
                    <div className="content-description">
                        <h1>{game.title}</h1>
                        {showDate ? (
                        <div className="content-date">
                            <h3>{game.release_date}</h3>
                        </div>
                    ) : null}
                    </div>
                    <div className="content-options">
                        <h3>{game.price}€</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GameCard;
