import Button from "./Button/Button";

export default function Header() {
  function customScrollFunction(top) {
    document.addEventListener("click", () => {
      window.scrollTo({
        top,
        left: 0,
        behavior: "smooth",
      });
    });
  }
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">OB</div>
        <div className="header__right">
          <nav className="header__menu">
            <ul className="header__list">
              <li>
                <button id="info" onClick={() => customScrollFunction(200)} className="header__link">
                  О себе
                </button>
              </li>
              <li>
                <button id="stack" onClick={() => customScrollFunction(1000)} className="header__link">
                  Стек
                </button>
              </li>
              <li>
                <button id="works" onClick={() => customScrollFunction(2000)} className="header__link">
                  Проекты
                </button>
              </li>
              <li>
                <button id="contacts" onClick={() => customScrollFunction(3400)} className="header__link">
                  Контакты
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}