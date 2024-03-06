import React, { useState } from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/instant-gaming-logo.svg";
import { FaAngleDown } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { FaWandMagic as DarkModeIcon } from "react-icons/fa6";
import { FaWandMagicSparkles as LightModeIcon } from "react-icons/fa6";
import { useSelector } from "react-redux";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const userAccount = useSelector((state) => state.userAccount);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const menu = [
        { name: "pc", link: "/pc", icon: <RiComputerLine /> },
        { name: "ps4", link: "/ps4", icon: <FaPlaystation /> },
        { name: "xbox", link: "/xbox", icon: <FaXbox /> },
        { name: "switch", link: "/switch", icon: <BsNintendoSwitch /> },
    ];
    return (
        <div className="navbar">
            <div className="navbar-icon">
                <Link href={"/home"}>
                    <Image src={logo} alt="logo" width={200} height={100} />
                </Link>
            </div>
            <div className="navbar-menu">
                {menu.map((item) => (
                    <Link href={item.link} key={item.name}>
                        <h2 style={{ display: "flex", alignItems: "center", gap: "5px", marginLeft: "10px" }}>
                            {item.icon} {item.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className="navbar-options">
                <Link onClick={toggleDarkMode} href={"/home"}>
                    {darkMode ? <DarkModeIcon className="navbar-icon" /> : <LightModeIcon className="navbar-icon" />}
                </Link>
                <Link href={"/home"}>{}</Link>
                <Link href={"/panier"}>
                    <PiShoppingCartSimpleBold className="navbar-icon" />
                </Link>
                {userAccount.name ? (
                    <p>Bonjour {userAccount.name} !</p>
                ) : (
                    <Link href={"/login"}>
                        <FaRegUser className="navbar-icon" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
