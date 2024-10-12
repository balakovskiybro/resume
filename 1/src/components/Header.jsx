export default function Header() {
    <header class="header">
        <div class="header__container container">
            <a class="logo">Company</a>
            <div class="header__right">
                <button class="header__search" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <circle cx="9.76657" cy="9.76659" r="8.98856" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M16.0183 16.4851L19.5423 20" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <nav class="header__nav nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#" class="nav__link" id="portfolio">Portfolio</a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link" id="team">Team</a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link" id="about">About</a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link" id="blog">Blog</a>
                        </li>
                        <li class="nav__item">
                            <a href="#" id="contacts" class="nav__link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}