import basket from "../../../../images/TradeBasket.svg"
export default function PlaceToGet() {
    return(
        <section className="place-get">
            <div className="place-get__header">
                <div className="place-get__sum-container">
                <img
                src={basket}
                className="place-get__basket"
                alt="Корзина"
                />
                <p className="place-get__sum">0,00 $</p>
                </div>
                <h3 className="place-get__title">ВЫ ПОЛУЧИТЕ</h3>
                <button className="place-get__button-window-item">
                </button>
            </div>
            <div className="place-get__main">
                <p className="place-get__text-placeholder">Добавьте предметы, которые хотите обменять</p>
            </div>
        </section>
    )
}