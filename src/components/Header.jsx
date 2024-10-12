export default function Header() {

  // function customScrollFunction(id, top) {
  //   document.getElementById(id).addEventListener("click", () => {
  //     window.scrollTo({
  //       top,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   });
  // }

  // customScrollFunction("info", 200);
  // customScrollFunction("stack", 800);
  // customScrollFunction("works", 1800);
  // customScrollFunction("contacts", 3400);
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">OB</div>
        <div className="header__right">
          <nav className="header__menu">
            <ul className="header__list">
              <li>
                <button id="info" className="header__link">
                  О себе
                </button>
              </li>
              <li>
                <button id="stack" className="header__link">
                  Стек
                </button>
              </li>
              <li>
                <button id="works" className="header__link">
                  Проекты
                </button>
              </li>
              <li>
                <button id="contacts" className="header__link">
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