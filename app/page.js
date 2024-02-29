"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/navbar/NavBar";
import GameCard from "@/components/gameCard/GameCard";
import Link from "next/link";

export default function Home() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([1, 2, 3, 4, 5, 5]);

    if (error) return <h1>Une erreur est survenue : {error}</h1>;

    return (
        <div className="root">
            <NavBar />
            <section className="section-tendances">
                <h1>Tendances</h1>
                <div className="games-container">
                    {games.map((game, index) => {
                        return <GameCard key={index} game={game} />;
                    })}
                </div>
            </section>
            <section className="section-panel">
                <div className="trust-pilot">
                    <Link href="https://fr.trustpilot.com/review/instant-gaming.com?utm_medium=trustbox&utm_source=Mini">T</Link>
                </div>
            </section>
        </div>
    );
}
