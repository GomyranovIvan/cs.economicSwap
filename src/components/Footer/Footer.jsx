import footerTitleLogo from "../../images/CS.ESWAP-logoFooter.svg"
import vk from "../../images/contactsVK.svg"
import whatsapp from "../../images/contactsWHATSAPP.svg"
import telegram from "../../images/contactsTELEGRAM.svg"
import youtube from "../../images/contactsYOUTUBE.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__mainpart">
                <img
                    src={footerTitleLogo}
                    className="footer__title-logo"
                    alt="Лого-название" />
                <ul className="footer__button-container">
                    <li className="footer__button-trade">
                        Обмен
                    </li>
                    <li className="footer__button-info">
                        Информация
                    </li>
                    <li className="footer__button-moreover">
                        Дополнительно
                    </li>
                </ul>
                <ul className="contacts">
                    <li><img
                        className="contacts__vk"
                        alt="ВК"
                        src={vk} /></li>
                    <li><img
                        className="contacts__whatsapp"
                        alt="Ватсапп"
                        src={whatsapp} /></li>
                    <li><img
                        className="contacts__telegram"
                        alt="Телеграм"
                        src={telegram} /></li>
                    <li><img
                        className="contacts__youtube"
                        alt="Ютуб"
                        src={youtube} /></li>
                </ul>
            </div>
            <p className="footer__copyright">Copyright © 2023.<span className="footer__copyright-logo">CS.<span className="footer__copyright-logo-economic">ECONOMIC</span>SWAP</span>. Все права защищены.</p>
        </footer>
    )
}