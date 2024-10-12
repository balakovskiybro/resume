export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <h1 className="footer__title">Контакты</h1>
                <div className="footer__container">
                    <div className="footer__top">
                        <ul className="footer__list">
                            <li className="footer-item"><a href="https://t.me/olewwwwwka" className="footer-link footer-link-tel"
                                target="_blank" aria-label="Link to Telegram"></a></li>
                            <li className="footer-item"><a href="https://vk.com/olewwka" className="footer-link footer-link-vk" target="_blank"
                                aria-label="Link to Vk"></a></li>
                            <li className="footer-item-gm">
                                <div className="footer-link footer-link-gm" aria-label="Link to Gmail">
                                </div>
                                <span className="footer__text">balakovskiybro@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bottom">
                        Designed & Built by Oleg S. Bizyaev © 2023
                    </div>
                </div>
            </div>
        </footer>
    )
}