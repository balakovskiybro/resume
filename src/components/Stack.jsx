import html from "/html.png"
import react from "/react.png"
import scss from "/scss.png"
import js from "/js.png"
import bem from "/bem.png"
import git from "/git.png"

export default function Stack() {
    return (
        <section className="stack">
            <h1 className="stack__title">Мой стек технологий</h1>
            <div className="stack__items">
                <div className="stack__item">
                    <div className="stack__img">
                        <img src={react} alt="" />
                    </div>
                    <div className="stack__name">react</div>
                </div>
                <div className="stack__item">
                    <div className="stack__img">
                        <img src={js} alt="" />
                    </div>
                    <div className="stack__name">JavaScript</div>
                </div>
                <div className="stack__item">
                    <div className="stack__img">
                        <img src={bem} alt="" />
                    </div>
                    <div className="stack__name">BEM</div>
                </div>
                <div className="stack__item">
                    <div className="stack__img">
                        <img src={git} alt="" />
                    </div>
                    <div className="stack__name">git</div>
                </div>
                <div className="stack__item">
                    <div className="stack__img">
                        <img src={html} alt="" />
                    </div>
                    <div className="stack__name">html5</div>
                </div>
                <div className="stack__item">
                    <div className="stack__img">
                        <img src={scss} alt="" />
                    </div>
                    <div className="stack__name">scss</div>
                </div>
            </div>
        </section>
    )
}