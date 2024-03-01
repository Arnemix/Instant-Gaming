import React, { useState } from "react";
import "./style.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Carousel = ({ games }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === games.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setSlide(slide === 0 ? games.length - 1 : slide - 1);
    };
    return (
        <div className="carousel-container">
            <BsArrowLeftCircle onClick={prevSlide} className="arrow arrow-left" />
            {games.map((game, index) => (
                <div key={index} className={slide === index ? "carousel-item" : "carousel-item hidden"}>
                    <div className="carousel-image">
                        <img src={game.thumbnail} alt={game.name} />
                    </div>
                    <div className="carousel-text">
                        <div className="text-title">
                            <h1>{game.title}</h1>
                        </div>
                        <div className="text-content">
                            <p>
                                <span>Date de sortie</span> : {game.release_date}
                            </p>
                            <p>
                                <span>Genre</span> : {game.genre}
                            </p>
                            <p>
                                <span>Editeur</span> : {game.publisher}
                            </p>
                            <button onClick={() => window.open(game.game_url, "_blank")}>Page du jeu</button>
                        </div>
                    </div>
                </div>
            ))}
            <BsArrowRightCircle onDoubleClick={null} onClick={nextSlide} className="arrow arrow-right" />
        </div>
    );
};

export default Carousel;
