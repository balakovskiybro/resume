import project from "/landing2.webp"

export default function Project() {
  return (
    <div className="works__item">
      <a href="https://balakovskiybro.github.io/pet-project1/" target="_blank"><img src={project} className="works__img" alt="" /></a>
      <div className="works__body">
        <h5 className="works__subtitle">Цель:</h5>
        <p className="works__text">
          Отработать навыки адаптивной верстки, с применением HTML/CSS для создания интерфейса сайта.
        </p>
      </div>
    </div>
  )
}