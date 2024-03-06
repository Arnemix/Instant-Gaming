"use client";

import Link from "next/link";

const Custom404 = () => {
    return (
        <div style={styles.notFound}>
            <div className="not-found-image">
                <img src="https://media.tenor.com/8ND8TbjZqh0AAAAi/error.gif" alt="" />
            </div>
            <div style={styles.notFoundText} className="not-found-text">
                <h1>Erreur 404 - Vous avez trouvé la fin du monde virtuel !</h1>
                <Link href={"/home"}>
                    <button style={styles.button} className="button">
                        Bouton de secours
                    </button>
                </Link>
            </div>
        </div>
    );
};

const styles = {
    notFound: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
    },
    notFoundText: {
        gap: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        padding: "10px 20px",
        fontSize: "20px",
    },
};

export default Custom404;
