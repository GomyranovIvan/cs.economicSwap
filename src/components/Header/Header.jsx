import logo from "../../images/logo.svg"
import headerTitleLogo from "../../images/CS.ECONOMICSWAP-logo.svg"
import lang from "../../images/lang.svg"
import { NavLink } from "react-router-dom"
export default function Header() {
    return (
        <header className="header">
            <img 
            className="header__logo"
            src={logo}
            alt="Лого" />
            <NavLink to="/">
            <img
            className="header__title-logo"
            src={headerTitleLogo}
            alt="Название-лого" 
            />
            </NavLink>
            <ul className="header__button-container">
                <NavLink to="/trade" className="header__button-trade">
                    Обмен
                </NavLink>
                <NavLink to="/stockpaper" className="header__button-stockpaper">
                    Биржа бумаг
                </NavLink>
            </ul>
            <div className="header__lang-container">
                <p className="header__lang-title">RU</p>
                <img 
                className="header__lang-img"
                src={lang}
                alt="Флаг языка" />
                <button
                className="header__lang-button" />
            </div>
            <div className="header__steam-login-container">
            <button
            className="header__steam-login"/>
            </div>
        </header>
    )
}