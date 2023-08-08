import React from "react";
export default function ButtonsFilterType({ active }) {
    return (
        <>
            {active && (<ul className="functional-panel__container-buttons-filter">
                <li className="functional-panel__button-filter">Нож</li>
                <li className="functional-panel__button-filter">Перчатки</li>
                <li className="functional-panel__button-filter">Пистолет</li>
                <li className="functional-panel__button-filter">Пистолет-пулемёт</li>
                <li className="functional-panel__button-filter">Штурмовая винтовка</li>
                <li className="functional-panel__button-filter">Снайперская винтовка</li>
                <li className="functional-panel__button-filter">Дробовик</li>
                <li className="functional-panel__button-filter">Пулемёт</li>
                <li className="functional-panel__button-filter">Stat-Track™</li>
            </ul>
            )}
        </>
    )
}