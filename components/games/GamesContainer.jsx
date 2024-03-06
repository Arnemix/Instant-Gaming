import React, { useState, useEffect } from "react";
import GameCard from "../gameCard/GameCard";
import Loader from "../loader/Loader";
import NavBar from "../navbar/NavBar";
import "@/app/globals.css";
import "./style.scss";

const GamesContainer = (props) => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [originalGames, setOriginalGames] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");
    const [publisherName, setPublisherName] = useState("");

    const handleSearch = (terms) => {
        setSearchTerms(terms);

        if (!terms && !publisherName) {
            setGames(originalGames);
        } else {
            sort("title");
        }
    };

    const sort = (sortType) => {
        let sortedGames = [...originalGames];

        // Filtrer les jeux selon les termes de recherche
        if (searchTerms) {
            sortedGames = sortedGames.filter((game) => game.title.toLowerCase().includes(searchTerms.toLowerCase()));
        }

        // Filtrer les jeux par éditeur si un éditeur est sélectionné
        if (publisherName) {
            sortedGames = sortedGames.filter((game) => game.publisher === publisherName);
        }

        // Trier les jeux selon le critère sélectionné
        if (sortType === "date") {
            sortedGames.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        } else if (sortType === "title") {
            sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortType === "publisher") {
            sortedGames = sortedGames.filter((game) => game.publisher);
            sortedGames.sort((a, b) => a.publisher.localeCompare(b.publisher));
        }

        setGames(sortedGames);
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
                                setPublisherName(e.target.value);
                                sort("publisher");
                            }}
                            name="publisher"
                            id=""
                        >
                            {games.map((game) => {
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
                        {searchTerms ? <p style={{ color: "white" }}>Jeux trouvés : {games.length}</p> : null}
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
