import project from "/landing2.png"

export default function Project() {
  return (
    <div className="works__item">
      <a href="resume/2/index.html" target="_blank"><img src={project} className="works__img" alt="" /></a>
      <div className="works__body">
        <h5 className="works__subtitle">Цель:</h5>
        <p className="works__text">
          Отработать навыки адаптивной верстки, с применением HTML/CSS для создания интерфейса сайта.
        </p>
      </div>
    </div>
  )
}