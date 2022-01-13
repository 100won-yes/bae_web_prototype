// header_nav.js

// * header navigation menu와 login 버튼 클릭시 이벤트 발생

{
const elHeadArea = document.querySelector(".head_area");
const elMenuBtn = elHeadArea.querySelector(".menu_btn");

const elNavSlider = document.querySelector("nav");
const elCloseBtn = elNavSlider.querySelector(".close_btn");
const elNavLoginBtn = elNavSlider.querySelector(".sliderArea_login");
const elNavJoinBtn = elNavSlider.querySelector(".sliderArea_join");
const elLoginBtn = document.querySelector(".login_btn");
const elLoginBox = document.querySelector(".loginBox");
const elLoginBG = document.querySelector(".loginBox_bg");

// console.log(elLoginBox.currentTarget);

// let menuHeight = elNavSlider.clientHeight;
let menuHeight = getComputedStyle(elNavSlider).height;
let heightParseInt = parseInt(menuHeight);

let slideHeight;
let PERMISSION = true;

// ==============================================================

function fnSlideUp(height) {
  let navDisplay = getComputedStyle(elNavSlider).display === "block";
  if(PERMISSION && navDisplay) {
    PERMISSION = false;
    let SET_HEIGHT = height;
    slideHeight = setInterval(function() {
      SET_HEIGHT -= 1;
      if(SET_HEIGHT >= 0) {
        elNavSlider.style.height = `${SET_HEIGHT}px`;
      } else {
        clearInterval(slideHeight);
        elNavSlider.style = null;
        elNavSlider.style.display = "none";
        PERMISSION = true;
      }
    }, 1);
  }
};

function fnSlideDown(height) {
  const originH = height;
  let SET_HEIGHT = 0;
  let navDisplay = getComputedStyle(elNavSlider).display === "none";
  if(PERMISSION && navDisplay) {
    PERMISSION = false;
    elNavSlider.style.display = 'block';
    elNavSlider.style.height = SET_HEIGHT;

    slideHeight = setInterval(function() {
      if(SET_HEIGHT < originH) {
        SET_HEIGHT += 1;
        elNavSlider.style.height = `${SET_HEIGHT}px`;
      } else {
        PERMISSION = true;
        clearInterval(slideHeight);
        }
    }, 1);
  };
};

function menuBtnClick(event) {
  event.preventDefault();
  // fnSlideDown(heightParseInt);
  elNavSlider.classList.remove("none");
};

function menuCloseBtnClick(event) {
  event.preventDefault();
  // fnSlideUp(heightParseInt);
  elNavSlider.classList.add("none");
};

function loginBtnClick(event) {
  event.preventDefault();
  elLoginBox.classList.remove("none");
};

function loginBoxClose(event) {
  event.preventDefault();
  event.target === elLoginBG ? elLoginBox.classList.add('none') : false
};

function joinBtnClick(event) {
  event.preventDefault();
  window.alert('접근할 수 없습니다.');
}

elMenuBtn.addEventListener("click", menuBtnClick);
elCloseBtn.addEventListener("click", menuCloseBtnClick);

elLoginBtn.addEventListener("click", loginBtnClick);
elLoginBG.addEventListener('click', loginBoxClose);

elNavLoginBtn.addEventListener('click', loginBtnClick);
elNavJoinBtn.addEventListener('click', joinBtnClick);

};

// ===============================================================================
