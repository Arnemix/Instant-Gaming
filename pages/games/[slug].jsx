import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Note : régler le problème de CSS dans la navbar quand elle est appelée dans ce composant

function GameDetails() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([]);
    const [game, setGame] = useState({});
    const router = useRouter();

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
                <div className="game-details-title"></div>
            </div>
        </>
    );
}

export default GameDetails;
