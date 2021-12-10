const API_KEY = "b9b19486e4e23009d04deac130ab103d";


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`;
      }
    );
  // fetch는 개발자모드 네트워크 상에서 지정된 값(url)을 실행해준다.
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// user의 위치정보를 검색하고 확인하는 함수
// getCurrentPosition(a,b) -> a 함수가 실행이 안되면 b함수를 실행한다. 