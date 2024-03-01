"use client";
import Carousel from "@/components/carousel/Carousel";
import GameCard from "@/components/gameCard/GameCard";
import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([]);
    const [trendsGames, setTrendsGames] = useState([]);
    const [loveGames, setLoveGames] = useState([]);

    useEffect(() => {
        fetch("/api/games")
            .then((res) => res.json())
            .then((data) => {
                setGames(data);
                setTrendsGames(data.slice(0, 6));
                setLoveGames(data.slice(6, 12));
            })
            .catch((error) => setError(error))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (error) return <h1>Une erreur est survenue : {error}</h1>;
    if (loading) return <Loader />;

    return (
        <div className="root">
            <NavBar />
            <section className="section-tendances">
                <h1 className="section-title">Nos jeux tendances 🔥</h1>
                <div className="games-container">
                    {trendsGames.map((game, index) => {
                        return <GameCard key={index} game={game} />;
                    })}
                </div>
            </section>
            <section className="section-carousel">
                <h1 className="section-title">Les coups de 💘</h1>
                <div className="carousel-container">
                    <Carousel games={loveGames} />
                </div>
            </section>
        </div>
    );
}
