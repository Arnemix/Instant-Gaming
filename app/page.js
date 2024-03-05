/* eslint-disable react/no-unescaped-entities */
"use client";
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
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
    const [lowestPrice, setLowestPrice] = useState([]);
    const [showMoreLowestPrice, setShowMoreLowestPrice] = useState(false);

    useEffect(() => {
        fetch("/api/games")
            .then((res) => res.json())
            .then((data) => {
                setGames(data);
                setTrendsGames(data.slice(0, 6));
                setLoveGames(data.slice(6, 12));
                setLowestPrice(data.filter((game) => game.price <= 10).slice(0, 6));
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
            <section className="section-lowest-price">
                <h1 className="section-title">💶 Jouer à moins de 10€ ? C'est possible !</h1>
                <div className="games-container show-more">
                    {lowestPrice.map((game, index) => {
                        return <GameCard key={index} game={game} showDate={true} />;
                    })}
                </div>
                <div className="show-more-button">
                    {showMoreLowestPrice ? (
                        <button
                            className="button"
                            onClick={() => {
                                setShowMoreLowestPrice(false);
                                setLowestPrice(games.filter((game) => game.price <= 10).splice(0, 6));
                            }}
                        >
                            Voir moins
                        </button>
                    ) : (
                        <button
                            className="button"
                            onClick={() => {
                                setShowMoreLowestPrice(true);
                                setLowestPrice(games.filter((game) => game.price <= 10));
                            }}
                        >
                            Voir plus
                        </button>
                    )}
                </div>
            </section>
            <Footer>
                
            </Footer>
        </div>
    );
}
