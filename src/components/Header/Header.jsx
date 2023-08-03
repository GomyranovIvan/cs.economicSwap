import logo from "../../images/logo.svg"
import titleLogo from "../../images/CS.ECONOMICSWAP-logo.svg"
import lang from "../../images/lang.svg"
export default function Header() {
    return (
        <header className="header">
            <img 
            className="header__logo"
            src={logo}
            alt="Лого" />
            <img
            className="header__title-logo"
            src={titleLogo}
            alt="Название-лого" />
            <ul className="header__button-container">
                <li className="header__button-trade">
                    Обмен
                </li>
                <li className="header__button-stockpaper">
                    Биржа бумаг
                </li>
                <li className="header__button-about">
                    О нас
                </li>
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