import "@/app/globals.css";
import { useEffect, useState } from "react";
import GameCard from "../gameCard/GameCard";
import Loader from "../loader/Loader";
import "./style.scss";

const GamesContainer = (props) => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [originalGames, setOriginalGames] = useState([]);
    const [publisherGames, setPublisherGames] = useState([]);

    const sort = (sortType, publisherName) => {
        let sortedGames = [...games];

        if (sortType === "date") {
            sortedGames.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        } else if (sortType === "title") {
            sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (sortType === "publisher") {
            if (publisherName === "Tous") {
                setGames(originalGames);
                return;
            }
            sortedGames = sortedGames.filter((game) => game.publisher === publisherName);
            setPublisherGames(sortedGames);
        }
        setGames(sortedGames);
    };

    const handleSearch = (terms) => {
        if (!terms) {
            if (publisherGames.length > 0) {
                setGames(publisherGames);
                return;
            }
            setGames(originalGames);
            return;
        }
        setGames(games.filter((game) => game.title.toLowerCase().includes(terms.toLowerCase())));
    };

    useEffect(() => {
        fetch("/api/games")
            .then((res) => res.json())
            .then((data) => {
                data = data.filter((game) => game.platform === props.platform);
                setGames(data);
                setOriginalGames(data);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;
    if (originalGames.length === 0)
        return (
            <>
                <div style={{ margin: "50px 0 50px 0", display: "flex", flexDirection: "column", alignItems: "center" }} className="page-container">
                    <h1>Aucun jeu {props.platform}, nous en ajouterons bientôt</h1>
                    <Loader />
                </div>
            </>
        );

    return (
        <>
            <div style={{ margin: "50px 0 50px 0", display: "flex", flexDirection: "column", alignItems: "center" }} className="games-first-container">
                <h1>
                    Découvrez nos {originalGames.length} jeux {props.platform}
                </h1>
                <div className="games-options">
                    <div className="games-sort">
                        <p>Trier par</p>
                        <select onChange={(e) => sort(e.target.value)}>
                            <option value="none">Défaut</option>
                            <option value="date">Date de sortie</option>
                            <option value="title">Titre</option>
                        </select>
                        <select
                            onChange={(e) => {
                                sort("publisher", e.target.value);
                            }}
                            name="publisher"
                            id=""
                        >
                            <option value="Tous">Tous</option>
                            {originalGames.map((game) => {
                                return (
                                    <option key={game.id} value={game.publisher}>
                                        {game.publisher}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="games-search">
                        <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Rechercher..." />
                        {games.length === 0 ? <p style={{ color: "white" }}>Jeux trouvés : {games.length}</p> : null}
                    </div>
                </div>
                <div className="games-container">
                    {games.map((game) => {
                        return <GameCard showDate={true} key={game.id} game={game} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default GamesContainer;
