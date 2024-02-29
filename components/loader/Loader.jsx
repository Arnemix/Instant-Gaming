import React from "react";
import { GiRetroController } from "react-icons/gi";
import "./style.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="loader-icon-container">
                    {/* Ajoutez la classe loader-icon pour cibler l'icône */}
                    <GiRetroController className="loader-icon" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
