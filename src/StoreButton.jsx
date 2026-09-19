import React, { useState } from "react";

export function StoreButton({ label, info, onClick, disabled }) {
    const [showInfo, setShowInfo] = useState(false);
    
    return (
    <div className="store-button-container">
        <div className="buttons">
            <button className="buy" onClick={onClick} disabled={disabled} title={info}>
                {label}
            </button> 
            <button className="info" onClick={() => setShowInfo(!showInfo)} title={"Show info"}>
                ?
            </button>
        </div>
        {showInfo && (
            <div className="info-content">
                {info}
            </div>
        )}
    </div>
  );
}
