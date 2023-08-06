export default function FunctionalPanel() {
    return (
        <section className="functional-panel">
            <button className="functional-panel__submit-trade">
                <p className="functional-panel__submit-trade-caption">ОБМЕН</p>
            </button>
            <div className="functional-panel__collapse-header-price">
                <p className="functional-panel__display-price">Цена</p>
                <button className="button__collapse"></button>
            </div>
            <div className="functional-panel__container-input">
                <input className="functional-panel__input-price-start" placeholder="$ 0,00"></input>
                <div className="functional-panel__dash"></div>
                <input className="functional-panel__input-price-end" placeholder="$ 0,00"></input>
            </div>
        </section>
    )
}