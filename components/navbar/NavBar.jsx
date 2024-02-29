import React, { useState } from "react";
import "./style.css";
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

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(true);

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
                <Image src={logo} alt="logo" width={200} height={100} />
            </div>
            <div className="navbar-menu">
                {menu.map((item) => (
                    <Link href={item.link} key={item.name}>
                        <h3>
                            {item.icon} {item.name} <FaAngleDown />
                        </h3>
                    </Link>
                ))}
            </div>
            <div className="navbar-options">
                <Link onClick={toggleDarkMode} href={"/"}>
                    {darkMode ? <DarkModeIcon className="navbar-icon" /> : <LightModeIcon className="navbar-icon" />}
                </Link>
                <Link href={"/"}>{}</Link>
                <Link href={"/panier"}>
                    <PiShoppingCartSimpleBold className="navbar-icon" />
                </Link>
                <Link href={"/login"}>
                    <FaRegUser className="navbar-icon" />
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
