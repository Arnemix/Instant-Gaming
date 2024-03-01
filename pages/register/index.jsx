import ConnectionForm from "@/components/connection/ConnectionForm";
import React from "react";
import "@/app/globals.css";

function index() {
    return (
        <>
            <ConnectionForm connectionType="register" />
        </>
    );
}

export default index;
