import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import "./style.scss";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
    const actualYear = new Date().getFullYear();

    const useFullLinks = [
        {
            id: 1,
            name: "Qui sommes nous ?",
            link: "/",
        },
        {
            id: 2,
            name: "Nous contacter",
            link: "/",
        },
        {
            id: 3,
            name: "FAQ",
            link: "/",
        },
        {
            id: 4,
            name: "Mentions légales",
            link: "/",
        },
        {
            id: 5,
            name: "Travailler avec nous",
            link: "/",
        },
    ];
    const socialLinks = [
        {
            id: 1,
            name: "FaceBook",
            link: "https://www.facebook.com",
            icon: <FaFacebook />,
        },
        {
            id: 2,
            name: "Twitter",
            link: "https://www.twitter.com",
            icon: <FaTwitter />,
        },
        {
            id: 3,
            name: "Instagram",
            link: "https://www.instagram.com",
            icon: <FaInstagram />,
        },
        {
            id: 4,
            name: "Youtube",
            link: "https://www.youtube.com",
            icon: <FaYoutube />,
        },
        {
            id: 5,
            name: "TikTok",
            link: "https://www.tiktok.com",
            icon: <FaTiktok />,
        },
    ];
    return (
        <>
            <Toaster position="bottom-left" />
            <div className="footer-container">
                <div className="footer-social">
                    {socialLinks.map((item) => (
                        <Link href={item.link} key={item.id}>
                            {item.icon} {item.name}
                        </Link>
                    ))}
                </div>
                <div className="footer-separator"></div>
                <div className="footer-usefull-links">
                    {useFullLinks.map((item) => (
                        <Link href={item.link} key={item.id}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* <div className="footer-separator"></div> */}
                {/* <div className="footer-copyrights">
                    <p onClick={() => toast.success("Copyright Drayef Mohamed ©")}>Copyright Drayef Mohamed Amin © {actualYear}</p>
                </div> */}
            </div>
        </>
    );
};

export default Footer;
