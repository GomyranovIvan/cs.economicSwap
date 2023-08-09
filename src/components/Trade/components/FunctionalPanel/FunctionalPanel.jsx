import ButtonsBlockTrade from "./components/ButtonsBlockTrade/ButtonsBlockTrade";
import ButtonsFilterExterior from "./components/ButtonsFilterExterior/ButtonsFilterExterior";
import ButtonsFilterType from "./components/ButtonsFilterType/ButtonsFilterType";
import InputsPrice from "./components/InputsPrice/InputsPrice";
import { useState } from "react";

export default function FunctionalPanel() {
    const [inputsPriceActive, setInputsPriceActive] = useState(true)
    const [buttonsBlockTradeActive, setButtonsBlockTradeActive] = useState(true)
    const [buttonsFilterExteriorActive, setButtonsFilterExteriorActive] = useState(true)
    const [buttonsFilterTypeActive, setButtonsFilterTypeActive] = useState(true)
    return (
        <section className="functional-panel">
            <button className="functional-panel__submit-trade">
                <p className="functional-panel__submit-trade-caption">ОБМЕН</p>
            </button>
            <div className="functional-panel__collapse-header" onClick={() => setInputsPriceActive(!inputsPriceActive)}>
                <p className="functional-panel__lettering-collapse">Цена</p>
                <button className="button__collapse"></button>
            </div>
            <InputsPrice active={inputsPriceActive} />
            <div className="functional-panel__collapse-header" onClick={() => setButtonsBlockTradeActive(!buttonsBlockTradeActive)}>
                <p className="functional-panel__lettering-collapse">Блокировка обмена</p>
                <button className="button__collapse"></button>
            </div>
            <ButtonsBlockTrade active={buttonsBlockTradeActive}/>
            <div className="functional-panel__collapse-header" onClick={() => setButtonsFilterExteriorActive(!buttonsFilterExteriorActive)}>
                <p className="functional-panel__lettering-collapse">Качество</p>
                <button className="button__collapse"></button>
            </div>
            <ButtonsFilterExterior active={buttonsFilterExteriorActive}/>
            <div className="functional-panel__collapse-header" onClick={() => setButtonsFilterTypeActive(!buttonsFilterTypeActive)}>
                <p className="functional-panel__lettering-collapse">Тип</p>
                <button className="button__collapse"></button>
            </div>
            <ButtonsFilterType active={buttonsFilterTypeActive}/>
        </section>
    )
}