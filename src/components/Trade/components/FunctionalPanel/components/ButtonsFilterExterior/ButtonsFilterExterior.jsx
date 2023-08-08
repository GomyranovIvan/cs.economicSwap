import React from "react";
export default function ButtonsFilterExterior({ active }) {
    return (
        <>
            {active && (<ul className="functional-panel__container-buttons-filter">
                <li className="functional-panel__button-filter">Прямо с завода</li>
                <li className="functional-panel__button-filter">Немного поношенное</li>
                <li className="functional-panel__button-filter">После полевых испытаний</li>
                <li className="functional-panel__button-filter">Поношенное</li>
                <li className="functional-panel__button-filter">Закалённое в боях</li>
            </ul>)}
        </>
    )
}