// ----------- 요소 선택 ------------------------------
// id 속성: color-box
const colorBoxEl = document.getElementById('color-box');
// id 속성: color-input
const colorInputEl = document.getElementById('color-input');
// id 속성: message
const messageEl = document.getElementById('message');

let applyButton = document.getElementById("apply-button");   // id 속성: apply-button

// 버튼 클릭 이벤트 핸들러
applyButton.onclick = function () {
    // 선택된 색상 값 조회(가져오기)
    const selectedColor = colorInputEl.value;
    // #color-box 요소의 스타일 중 배경색 변경
    colorBoxEl.style.backgroundColor = selectedColor;
    // #message 요소에 변경된 배경색 정보로 출력
    messageEl.style.color = selectedColor;
    messageEl.innerHTML = `현재 배경색은 ${selectedColor} 입니다`;
};
