'use strict';

const sliderInner = document.querySelector('.slider__inner');
const buttonPrev = document.getElementById('next');
const buttonNext = document.getElementById('prev');
const images = document.querySelectorAll('.slider__img');
const imagesContainer = document.querySelector('.slider__container');

setSize(currentWidth());

function currentWidth() {
  return document.body.clientWidth;
}

document.body.onresize = function () {
  let newWidth = document.body.clientWidth;
  let st = 0;
  setSize(newWidth, st);
};


function setSize(w, s) {
  s = 0;
  for (let i = 0; i < images.length; i++) {
    images[i].style.cssText = `width: ${w / 1.4}px; height: ${w * 0.4}px;`;
  }
  imagesContainer.style.cssText = `width: ${w / 1.4}px; height: ${w * 0.4}px;`;
  let step = s;
  const imgWidth = 100;
  const maxWidth = 400;


  buttonNext.onclick = nextClick;

  function nextClick() {

    step = step === -(maxWidth - imgWidth) ? step = 0 : step = step - imgWidth;
    sliderInner.style.cssText = `left:${step}%`;
  }


  buttonPrev.onclick = function () {

    step = step === 0 ? step = -(maxWidth - imgWidth) : step = step + imgWidth;
    sliderInner.style.cssText = `left:${step}%`;

  };
  imagesContainer.onmousemove = nextClick;
}
