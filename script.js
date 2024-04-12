// script.js

// 구글 맵 초기화 함수
function initMap() {
  // 주소를 좌표로 변환할 주소
  var address = "823-24 Yeoksam-dong, Gangnam-gu, Seoul, South Korea";

  // 주소를 좌표로 변환
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address }, function(results, status) {
    if (status === 'OK') {
      var mapOptions = {
        center: results[0].geometry.location,
        zoom: 16
      };
      // 지도를 해당 주소의 좌표로 초기화
      var map = new google.maps.Map(document.getElementById('map1'), mapOptions);
      // 해당 위치에 마커 추가
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: '일식 맛집'
      });
    } else {
      alert('823-24 Yeoksam-dong, Gangnam-gu, Seoul, South Korea');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const memoTextarea = document.getElementById('memo'); // 메모 입력란
  const saveButton = document.getElementById('saveButton'); // 보내기 버튼
  const savedMemos = document.getElementById('savedMemos'); // 기록된 메모들을 표시할 영역



  // script.js
  document.addEventListener('DOMContentLoaded', function() {
    const memoTextarea = document.getElementById('memo'); // 메모 입력란
    const saveButton = document.getElementById('saveButton'); // 보내기 버튼
    const savedMemos = document.getElementById('savedMemos'); // 기록된 메모들을 표시할 영역

    // 보내기 버튼 클릭 이벤트 처리
    saveButton.addEventListener('click', function() {
      // "꽝"이라는 텍스트를 크게 표시하는 요소 생성 및 추가
      const failText = document.createElement('h2');
      failText.textContent = '꽝';
      savedMemos.innerHTML = ''; // 이전에 표시된 내용 지우기
      savedMemos.appendChild(failText);
    });
  });
