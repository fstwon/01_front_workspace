function test() {
  window.alert('test alert')
};

// HTML 문서가 모두 파싱된 후 작업
window.onload = function() {
  let btn2 = document.getElementById('btn2');
  btn2.onclick = function() {
    console.log('btn2 click')
  };
};