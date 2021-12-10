const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);
// appendChild는 body의 내부의 가장 뒤에 지정한 값을 추가한다는 의미
// prependChild는 body의 내부의 가장 앞에 지정한 값을 추가한다는 의미

