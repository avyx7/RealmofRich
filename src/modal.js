import React from "react";

function Modal({ open, children, onClose }) {
    if(!open) return null;

    return (
        <div>
            <div className="modaloverlay"></div>
                <div className="modal">
                    <button onClick={onClose}>Close modal</button>
                    {children}
                </div> 
       </div>
    );
}

export default Modal;