import { login } from "@/redux/userAccount";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navbar/NavBar";
import "./style.scss";

function ConnectionForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [output, setOutput] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();
    const userAccount = useSelector((state) => state.userAccount);

    const checkConnection = () => {
        if (props.connectionType === "login") {
            if (username && password) {
                if (!userAccount.name) {
                    toast.error("Aucun compte n'est enregistré, veuillez vous inscrire");
                    return;
                }
                if (username === userAccount.name && password === userAccount.password) {
                    toast.success("Connexion Réussie, redirection en cours ...");
                    setTimeout(() => {
                        // router.push("/");
                    }, 1000);
                } else {
                    toast.error("Nom d'utilisateur ou mot de passe incorrect !");
                }
            } else {
                toast.error(`Veuillez remplir le champ : ${username ? "Mot de passe" : "Nom d'utilisateur"}`);
            }
        } else {
            if (username && password && email) {
                dispatch(
                    login({
                        name: username,
                        email: email,
                        password: password,
                        isAdmin: false,
                    })
                );
                toast.success("Inscription Réussie, redirection en cours ...");

                setTimeout(() => {
                    router.push("/login");
                }, 1000);
            } else {
                toast.error("Veuillez remplir tous les champs");
            }
        }
    };

    return (
        <>
            
            <Toaster position="bottom-left" />
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
                        <button onClick={checkConnection} className="button">
                            {props.connectionType === "register" ? "S'inscrire" : "Se connecter"}
                        </button>
                        {props.connectionType === "login" ? <Link href={"/register"}>Senregistrer</Link> : <Link href={"/login"}>Se connecter</Link>}

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
