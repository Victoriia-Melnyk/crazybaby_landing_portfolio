'use strict';

const slider = document.getElementById('slider');
const sliderElements = slider.children;
const buttonBack = document.getElementById('back');
const buttonNext = document.getElementById('next');
const currentPage = document.getElementById('current-page');
const link = document.querySelector('#changed-link');

let currentIndex = 0;

function updateHref() {
  const width = window.innerWidth;

  if (width < 768) {
    link.setAttribute('href', '#about-us-mobile');
  } else if (width >= 768) {
    link.setAttribute('href', '#about-us-tablet');
  }
}

function changeSlider() {
  for (let i = 0; i < sliderElements.length; i++) {
    if (currentIndex === i) {
      sliderElements[i].removeAttribute('hidden');
    } else {
      sliderElements[i].setAttribute('hidden', 'true');
    }
  }
  currentPage.textContent = `0${currentIndex + 1}`;

  buttonBack.classList.remove('control--prev-grey', 'control--prev-black');
  buttonNext.classList.remove('control--next-grey', 'control--next-black');

  if (currentIndex === 0) {
    buttonBack.classList.add('control--prev-grey');
    buttonNext.classList.add('control--next-black');
  } else if (currentIndex === 1) {
    buttonBack.classList.add('control--prev-black');
    buttonNext.classList.add('control--next-black');
  } else {
    buttonBack.classList.add('control--prev-black');
    buttonNext.classList.add('control--next-grey');
  }
}

buttonNext.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++;
  }
  changeSlider();
});

buttonBack.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  }
  changeSlider();
});

link.addEventListener('click', updateHref);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('resize', updateHref);

changeSlider();
updateHref();
