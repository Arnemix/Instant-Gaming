/* eslint-disable react/no-unescaped-entities */
"use client";
import Loader from "@/components/loader/Loader";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Importez useRouter à partir de next/navigation

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/home");
        }, 500)
    }, [router]);

    return (
        <div className="root" style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }
        }>
            <h1>Redirection en cours ...</h1>
            <Loader />
        </div>
    );
}
