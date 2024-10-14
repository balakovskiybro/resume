// Навигация по документу
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.drop__btn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function customScrollFunction(id, top) {
  document.getElementById(id).addEventListener('click', () => {
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth"
    })
  })
}

customScrollFunction('japan', 850)
customScrollFunction('china', 1950)
customScrollFunction('korea', 1950)
customScrollFunction('info', 2350)
customScrollFunction('score', 2950)
customScrollFunction('contacts', 3650)



// Валидная форма
const form = document.getElementById('form');
const input = form.querySelector('.form__input');
const check = form.querySelector('.form__check')

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const inputValue = input.value;
  const checkValue = 'checkbox' ? check.checked : check.value

  // Проверяем, что поля заполнены
  if (!inputValue || !checkValue) {
    alert('Пожалуйста, заполните все поля');
    return;
  } else {
    alert('Ваша заявка отправлена!')
  }
});


// Свайпер
var swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 3,
  grid: {
      rows: 2,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});


