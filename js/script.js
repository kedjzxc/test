const openPopup = document.querySelector('.header__btn');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup__inner');
const closePoup = document.querySelector('.popup__close');
const formInput = document.querySelector('.form__input');
const maskOptions = {
  mask: '+ {7} (000) 000-00-00',
};
const checkbox = document.querySelector('.form__checkbox');
const formBtn = document.querySelector('.popup__btn');
const headerMap = document.querySelector('.header__map');
const mapPopup = document.querySelector('.map__popup')
const mapPopupImg = document.querySelector('.popup__map-hover')
const mapPopupClose = document.querySelector('.map__popup-close')
const burgerBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.nav__menu')

burgerBtn.addEventListener('click', (e) => {
  menu.classList.toggle('active')
})

headerMap.addEventListener('click', (e) => {
    mapPopup.classList.add('active')
    document.body.style.overflow = 'hidden'
})

mapPopupClose.addEventListener('click', () => {
    mapPopup.classList.remove('active')
    document.body.style.overflow = ''
    document.body.style.overflowY = 'scroll'
})

IMask(formInput, maskOptions);
openPopup.addEventListener('click', () => {
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closePoup.addEventListener('click', (e) => {
  popup.classList.remove('active');
  document.body.style.overflow = ''
  document.body.style.overflowY = 'scroll';
});

if ((checkbox.checked = false)) {
  formBtn.disabled = true;
}

if (popup.classList.contains('active')) {
  console.log(123);
}

formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (checkbox.checked) {
    popupBody.innerHTML = '';
    popupBody.style = `padding: 2.604vw; font-size: 1.563vw`;
    popupBody.innerHTML = `Ваша заявка принята`;
  }
});


