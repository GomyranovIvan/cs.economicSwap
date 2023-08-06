export default function FunctionalPanel() {
    return (
        <section className="functional-panel">
            <button className="functional-panel__submit-trade">
                <p className="functional-panel__submit-trade-caption">ОБМЕН</p>
            </button>
            <div className="functional-panel__collapse-header">
                <p className="functional-panel__lettering-collapse">Цена</p>
                <button className="button__collapse"></button>
            </div>
            <div className="functional-panel__container-input">
                <input className="functional-panel__input-price-start" placeholder="$ 0,00"></input>
                <div className="functional-panel__dash"></div>
                <input className="functional-panel__input-price-end" placeholder="$ 0,00"></input>
            </div>
            <div className="functional-panel__collapse-header">
                <p className="functional-panel__lettering-collapse">Блокировка обмена</p>
                <button className="button__collapse"></button>
            </div>
            <div className="functional-panel__container-buttuns-block-trade">
                <button className="functional-panel__button-block-trade">&lt; 1</button>
                <button className="functional-panel__button-block-trade">2</button>
                <button className="functional-panel__button-block-trade">3</button>
                <button className="functional-panel__button-block-trade">4</button>
                <button className="functional-panel__button-block-trade">5</button>
                <button className="functional-panel__button-block-trade">6</button>
                <button className="functional-panel__button-block-trade">7</button>
            </div>
            <div className="functional-panel__collapse-header">
                <p className="functional-panel__lettering-collapse">Качество</p>
                <button className="button__collapse"></button>
            </div>
            <ul className="functional-panel__container-buttons-filter">
                <li className="functional-panel__button-filter">Прямо с завода</li>
                <li className="functional-panel__button-filter">Немного поношенное</li>
                <li className="functional-panel__button-filter">После полевых испытаний</li>
                <li className="functional-panel__button-filter">Поношенное</li>
                <li className="functional-panel__button-filter">Закалённое в боях</li>
            </ul>
            <div className="functional-panel__collapse-header">
                <p className="functional-panel__lettering-collapse">Тип</p>
                <button className="button__collapse"></button>
            </div>
            <ul className="functional-panel__container-buttons-filter">
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
        </section>
    )
}