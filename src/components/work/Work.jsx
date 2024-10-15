import work from "/landing1.webp"

export default function Work() {
  return (
    <section>
      <div className="works__item">
        <a href="https://balakovskiybro.github.io/pet-project2/" target="_blank"><img src={work} className="works__img" alt="" /></a>
        <div className="works__body">
          <h5 className="works__subtitle">Цель:</h5>
          <p className="works__text">
            Отработать навыки адаптивной верстки, с применением HTML/CSS для создания интерфейса сайта, а JS для
            запуска видео при помощи клика.
          </p>
        </div>
      </div>
    </section>
  )
}