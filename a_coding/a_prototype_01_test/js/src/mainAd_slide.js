// mainAd_slide.js

// =============================================================

{
const elMainAdBox = document.querySelector("#mainAdBox");
const elUlBox = elMainAdBox.querySelector("ul");
const elLiAllBox = elUlBox.querySelectorAll("li");
const elPrevBtn = elMainAdBox.querySelector(".mainAd_prev_button"); 
const elNextBtn = elMainAdBox.querySelector(".mainAd_next_button"); 

let slideWidth = getComputedStyle(elLiAllBox[0]).width;
let slWidthNum = parseInt(slideWidth);
console.log(slWidthNum);

let liAllLen = elLiAllBox.length;
let setIndex = 0;

elUlBox.style.width = `${slWidthNum * liAllLen}px`;

function fnSlideMove(index) {
  elUlBox.style.left = `${-index * slWidthNum}px`;
  setIndex = index; 
}

elPrevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (setIndex !== 0) {
    fnSlideMove(setIndex - 1);
  }
});

elNextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (setIndex !== liAllLen - 1) {
    fnSlideMove(setIndex + 1);
  }
});
}

