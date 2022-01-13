// header_navBar_btn.js

// * 1. 네비 바 버튼 클릭
// * 2. 그에 맞는 항목 dl class on 추가

const elNavBar = document.querySelector('.navigation_bar');
const elNavBarBtn = elNavBar.querySelectorAll('button');

const elBarContent = document.querySelector('.content_area');
const elBarConDl = document.querySelectorAll('dl');

const elNavBox = document.querySelector('.category_box');
// const elNavCaDd = elNavSlider.querySelectorAll('dd');
console.log(elNavBox);
// const ffff = [...elBarConDl];


// console.log(ffff);
// console.log(ffff.length);


function btnClick(e) {
  e.preventDefault();
  // * 누른 버튼과 같은 배열의 dl에 .on 추가
  elBarConDl[0].classList.add('on');
  // * .on 추가한 dl 빼고 나머지 배열들 전부 none
  elBarConDl[1].classList.remove('on');
  elBarConDl[2].classList.remove('on');
  elBarConDl[3].classList.remove('on');
  elBarConDl[4].classList.remove('on');
  elBarConDl[5].classList.remove('on');
  elBarConDl[6].classList.remove('on');
}

function btnClick1(e) {
  e.preventDefault();
  elBarConDl[1].classList.add('on');

  elBarConDl[0].classList.remove('on');
  elBarConDl[2].classList.remove('on');
  elBarConDl[3].classList.remove('on');
  elBarConDl[4].classList.remove('on');
  elBarConDl[5].classList.remove('on');
  elBarConDl[6].classList.remove('on');
}

function btnClick2(e) {
  e.preventDefault();
  elBarConDl[2].classList.add('on');

  elBarConDl[0].classList.remove('on');
  elBarConDl[1].classList.remove('on');
  elBarConDl[3].classList.remove('on');
  elBarConDl[4].classList.remove('on');
  elBarConDl[5].classList.remove('on');
  elBarConDl[6].classList.remove('on');
}

function btnClick3(e) {
  e.preventDefault();
  elBarConDl[3].classList.add('on');

  elBarConDl[0].classList.remove('on');
  elBarConDl[1].classList.remove('on');
  elBarConDl[2].classList.remove('on');
  elBarConDl[4].classList.remove('on');
  elBarConDl[5].classList.remove('on');
  elBarConDl[6].classList.remove('on');
}

function btnClick4(e) {
  e.preventDefault();
  elBarConDl[4].classList.add('on');

  elBarConDl[0].classList.remove('on');
  elBarConDl[1].classList.remove('on');
  elBarConDl[2].classList.remove('on');
  elBarConDl[3].classList.remove('on');
  elBarConDl[5].classList.remove('on');
  elBarConDl[6].classList.remove('on');
}

function btnClick5(e) {
  e.preventDefault();
  elBarConDl[5].classList.add('on');

  elBarConDl[0].classList.remove('on');
  elBarConDl[1].classList.remove('on');
  elBarConDl[2].classList.remove('on');
  elBarConDl[3].classList.remove('on');
  elBarConDl[4].classList.remove('on');
  elBarConDl[6].classList.remove('on');
}

function btnClick6(e) {
  e.preventDefault();
  elBarConDl[6].classList.add('on');

  elBarConDl[0].classList.remove('on');
  elBarConDl[1].classList.remove('on');
  elBarConDl[2].classList.remove('on');
  elBarConDl[3].classList.remove('on');
  elBarConDl[4].classList.remove('on');
  elBarConDl[5].classList.remove('on');
}

elBarConDl[0].classList.add('on');

elNavBarBtn[0].addEventListener('click', btnClick);
elNavBarBtn[1].addEventListener('click', btnClick1);
elNavBarBtn[2].addEventListener('click', btnClick2);
elNavBarBtn[3].addEventListener('click', btnClick3);
elNavBarBtn[4].addEventListener('click', btnClick4);
elNavBarBtn[5].addEventListener('click', btnClick5);
elNavBarBtn[6].addEventListener('click', btnClick6);

// const array = ['a', 'b', 'c', 'd', 'e'];

// console.log(array);


// function boom(index) {
//   const arrayResult = ffff.splice(index,1);
//   console.log(arrayResult); //index 넣은 함수 실행

//   const dddd = ffff.forEach((e) => {ffff.indexOf(e);});
//   console.log(typeof ffff[2]);
//   console.log(ffff.indexOf("dl.juiceAndAde_product.none"));
// };

// boom(2);


// for(let i = 0; i < ffff.length; i++) {
//   ffff.splice(i,1);
// }
// console.log(ffff);