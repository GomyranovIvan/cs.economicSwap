import React from "react";
export default function InputsPrice({ active }) {
    return (
        <>
        { active && (<div className="functional-panel__container-input">
            <input className="functional-panel__input-price-start" placeholder="$ 0,00"></input>
            <div className="functional-panel__dash"></div>
            <input className="functional-panel__input-price-end" placeholder="$ 0,00"></input>
        </div>
        )}
        </>
    )
}