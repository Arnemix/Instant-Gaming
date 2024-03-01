import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaExternalLinkAlt, FaPlaystation, FaXbox } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import "@/app/globals.css";
import "./style.scss";
import Link from "next/link";

// Note : régler le problème de CSS dans la navbar quand elle est appelée dans ce composant

function GameDetails() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([]);
    const [game, setGame] = useState({});
    const router = useRouter();

    const getPlateforme = (game) => {
        if (game.platform === "PC (Windows)") {
            return <FaComputer style={{ scale: "1.3" }} />;
        } else if (game.platform === "PS4") {
            return <FaPlaystation />;
        } else if (game.platform === "Xbox") {
            return <FaXbox />;
        } else {
            return <BsNintendoSwitch />;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/games");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setGames(data);
                if (router.query.slug) {
                    const selectedGame = data.find((game) => game.id == router.query.slug);
                    if (selectedGame) {
                        setGame(selectedGame);
                    } else {
                        throw new Error("Jeu non trouvé");
                    }
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router.query.slug]);

    if (loading) return <Loader />;
    if (error) return <h1>Une erreur est survenue : {error}</h1>;

    return (
        <>
            <NavBar />
            <div className="game-details-container">
                <div className="game-details-image">
                    <img src={game.thumbnail} alt={game.title} />
                </div>
                <div className="game-details">
                    <div className="game-title">
                        <h1>{game.title}</h1>
                    </div>
                    <div className="game-infos">
                        <h3>{game.short_description}</h3>
                        <p>
                            <span>Date de sortie</span> : {game.release_date}
                        </p>
                        <p>
                            <span>Genre</span> : {game.genre}
                        </p>
                        <p>
                            <span>Editeur</span> : {game.publisher}
                        </p>
                        <p className="game-infos-platform">
                            <span>Plateforme</span> : {getPlateforme(game)}
                        </p>
                        <p>
                            <span>Site officiel</span> :{" "}
                            <a href={game.game_url}>
                                <FaExternalLinkAlt style={{ color: "rgb(254, 64, 32)" }} />
                            </a>
                        </p>
                    </div>
                    <div className="game-options">
                        <button className="button">Ajouter au panier {Math.floor(Math.random() * (100 - 50 + 1)) + 50}€</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameDetails;
