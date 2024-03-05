import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import "./style.scss";
import { useDispatch } from "react-redux";
import { login } from "@/redux/userAccount";

function ConnectionForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [output, setOutput] = useState("");
    const dispatch = useDispatch();

    const checkConnection = () => {
        if (props.connectionType === "login") {
            if (username && password) {
                setOutput("Connexion Réussie");
                dispatch(login( {
                    name: username,
                    email: email,
                    password: password,
                    isAdmin: false,
                }))
            } else {
                setOutput(`Veuillez remplir le champ : ${username ? "Mot de passe" : "Nom d'utilisateur"}`);
            }
        } else {
            setOutput("Inscription");
        }
    };

    return (
        <>
            <NavBar />
            <div className="page-login">
                <div className="login-container">
                    <div className="login-form">
                        <h1>{props.connectionType === "register" ? "Inscription" : "Connexion"}</h1>
                        <label htmlFor="username">Nom d&apos;utilisateur</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" />
                        {props.connectionType === "register" && (
                            <>
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
                            </>
                        )}
                        <label htmlFor="password">Mot de passe</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
                        {props.connectionType === "login" ? (
                            <>
                                <label htmlFor="remember-me">Se souvenir de moi</label>
                                <input type="checkbox" name="remember-me" id="remember-me" />
                            </>
                        ) : (
                            <></>
                        )}
                        <button 
                            onClick={checkConnection} className="button">
                            {props.connectionType === "register" ? "S'inscrire" : "Se connecter"}
                        </button>

                        <div className="output">
                            <h3>{output}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConnectionForm;
