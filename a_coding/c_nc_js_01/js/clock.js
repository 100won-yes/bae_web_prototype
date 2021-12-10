const clock = document.querySelector("h2#clock");

/* 내가 만든 0추가하는 코드
function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const secondDate = `${date.getSeconds()}`;
  
  if(secondDate.length < 2) {
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`;
  } else {
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}
*/

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock();
// setInterval 셋팅이 1000이기에 1초 뒤부터 실행이됨. 바로실행을 원하기에 getClock(); 추가
setInterval(getClock, 1000);



