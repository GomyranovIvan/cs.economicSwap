import React from "react";
export default function ButtonsBlockTrade({ active }) {
    return (
        <>
        { active && (<div className="functional-panel__container-buttuns-block-trade">
            <button className="functional-panel__button-block-trade">&lt; 1</button>
            <button className="functional-panel__button-block-trade">2</button>
            <button className="functional-panel__button-block-trade">3</button>
            <button className="functional-panel__button-block-trade">4</button>
            <button className="functional-panel__button-block-trade">5</button>
            <button className="functional-panel__button-block-trade">6</button>
            <button className="functional-panel__button-block-trade">7</button>
        </div>)}
        </>
    )
}