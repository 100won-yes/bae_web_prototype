// kakaoMap.js


const container = document.querySelector('#map');
const options = { 
  center: new kakao.maps.LatLng(37.55949518477445, 126.92277939796666),
  level: 3
}
const map = new kakao.maps.Map(container, options);
// map.setZoomable(false); // 확대축소 끄
// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({  position: markerPosition  });
// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);