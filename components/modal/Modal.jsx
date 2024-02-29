import React, { useState } from "react";

function Modal({ title }) {
    const [modalVisibility, setModalVisibility] = useState(false);

    const closeModal = () => {
        setModalVisibility(false);
    };

    return (
        <div
            style={{
                visibility: modalVisibility,
            }}
            className="modal-container"
        >
            <div className="modal-window">
                <div className="modal-title">
                    <h1>{title}</h1>
                </div>
                <div className="modal-content">{/* Mettre le contenu de la modal */}</div>
            </div>
        </div>
    );
}

export default Modal;
