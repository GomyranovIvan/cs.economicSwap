import PlaceToGive from "./components/PlaceToGive/PlaceToGive"
import PlaceToGet from "./components/PlaceToGet/PlaceToGet"
import FunctionalPanel from "./components/FunctionalPanel/FunctionalPanel"
import basket from "../../images/TradeBasket.svg"
import refresh from "../../images/TradeRefresh.svg"
import { useState } from "react"
import UserInventory from "./components/UserInventory/UserInventory"
import ServerInventory from "./components/ServerInventory/ServerInventory"

export default function Trade() {

    const [placeToGiveActive, setPlaceToGiveActive] = useState(false)
    const [placeToGetActive, setPlaceToGetActive] = useState(false)

    return (
        <div className="trade">
            <section className="trade-user">
                <div className="place-give">
                    <div className="place-give__header" onClick={() => setPlaceToGiveActive(!placeToGiveActive)}>
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
                    <PlaceToGive active={placeToGiveActive} />
                </div>
                <div className="user-inventory">
                    <div className="user-inventory__header">
                        <img
                            src={refresh}
                            className="user-inventory__refresh"
                            alt="обновление"
                        />
                        <input className="user-inventory__search" placeholder="Поиск..." />
                    </div>
                    <UserInventory />
                </div>
            </section>
            <FunctionalPanel />
            <section className="trade-server">
                <div className="place-get">
                    <div className="place-get__header" onClick={() => setPlaceToGetActive(!placeToGetActive)}>
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
                    <PlaceToGet active={placeToGetActive} />
                </div>
                <div className="server-inventory">
                    <div className="server-inventory__header">
                        <input className="server-inventory__search" placeholder="Поиск..." />
                        <img
                            src={refresh}
                            className="server-inventory__refresh"
                            alt="обновление"
                        />
                    </div>
                    <ServerInventory />
                </div>
            </section>
        </div>
    )
}