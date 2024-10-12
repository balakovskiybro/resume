import face from "/Oleg.jpg"

export default function Info() {
  return (
    <section className="info">
      <h1 className="info__title">О себе</h1>
      <div className="info__container">
        <div className="info__img">
          <img src={face} alt="" />
        </div>
        <div className="info__body">
          <p>Меня зовут Олег Бизяев, я работаю программистом более 100 лет, сделал более 500
            проектов, написал этот сайт ногой.</p>
          <p>
            Ну а если серьезно, я студент 4 курса высшего учебного заведения по
            направлению
            программная инженерия. В течение двух лет я оттачивал свои навыки веб-разработчика, изучая, как
            создавать
            веб-приложения с использованием <span className="white__line">HTML</span> / <span
              className="white__line">CSS</span> /
            <span className="white__line">JavaScript</span> / <span
              className="white__line">React</span>.
          </p>
        </div>
      </div>
    </section>
  )
}