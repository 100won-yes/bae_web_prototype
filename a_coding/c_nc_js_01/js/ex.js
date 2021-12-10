// function의 기본 틀 1

// function nameOF(argument) {

// }

// function의 기본 틀 2

// const nameOF = function(argument) {

// }

// 익명 함수

// function(argument) {

// }

arrow function으로 변경

const names = ["A", "B", "C"];

const smile = names.map(function(item) {
  return item + "😀";
});

// map은 각각의 item에 함수를 호출하는 역할

console.log(smile); // (3) ['A😀', 'B😀', 'C😀']

기존 값을 arrow function으로 변경 시

const smile = names.map(item => {
  return item + "😀";
});
// 기존 함수와 비교해보면 function이 화살표 모양으로 바뀌고 위치가 이동된 것이 보인다.

console.log(smile); // (3) ['A😀', 'B😀', 'C😀']