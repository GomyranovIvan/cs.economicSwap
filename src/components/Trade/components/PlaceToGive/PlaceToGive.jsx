import basket from "../../../../images/TradeBasket.svg"
export default function PlaceToGive() {
    return (
        <section className="place-give">
            <div className="place-give__header">
                <button className="place-give__button-window-item">
                </button>
                <h3 className="place-give__title">ВЫ ОТДАДИТЕ</h3>
                <div className="place-give__sum-container">
                <p className="place-give__sum">$ 0,00</p>
                <img
                src={basket}
                className="place-give__basket"
                alt="Корзина"
                />
                </div>
            </div>
            <div className="place-give__main">
                <p className="place-give__text-placeholder">Добавьте предметы, которые хотите обменять</p>
            </div>
        </section>
    )
}