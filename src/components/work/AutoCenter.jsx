import autocenter from '/AutoCenter.png'

export default function AutoCenter() {
    return (
      <div className="works__item">
        <a href="resume/AutoCenter/index.html" target="_blank"><img src={autocenter} className="works__img" alt="" /></a>
        <div className="works__body">
          <h5 className="works__subtitle">Цель:</h5>
          <p className="works__text">
          Cделать навигацию по сайту, валидную форму, слайдер с использованием библиотеки "Swiper.js"
          </p>
        </div>
      </div>
    )
  }