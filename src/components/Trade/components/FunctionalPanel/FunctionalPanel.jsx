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
                <button className="functional-panel__button-block-trade">&lt;1</button>
                <button className="functional-panel__button-block-trade">2</button>
                <button className="functional-panel__button-block-trade">3</button>
                <button className="functional-panel__button-block-trade">4</button>
                <button className="functional-panel__button-block-trade">5</button>
                <button className="functional-panel__button-block-trade">6</button>
                <button className="functional-panel__button-block-trade">7</button>
            </div>
        </section>
    )
}