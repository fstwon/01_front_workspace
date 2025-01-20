let arr = ["KH정보교육원", "A강의장", "24/12/31", "개강"];

let str = arr.join(" "); // 또는  arr.toString();
          
// 위의 배열을 하나의 문자열로 변환

console.log(str); // 출력 예) "KH정보교육원 A강의장 24/12/31 개강"

/*
  반복문 참고
  
  for(초기식; 조건식; 증감식) {
    // 반복 수행할 코드
  }
  
  ex) 5회 반복
  for (let i=0; i<5; i++) {}
  */


/* 배열의 평균 계산 */
function calcAverage(numbers) {
    // 이곳에 코드를 작성하세요
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      result += num;
    }
    return result/numbers.length;
}

console.log(calcAverage([10, 20, 30, 40])); // 결과: 25
console.log(calcAverage([5, 15, 25, 35, 45])); // 결과: 25

// -------------------------


// Q. 다음 중 반환값이 숫자타입인 함수는 무엇인가?
// A. func2, func4;
// ----------------------------------
function func1() {
	let a = 10;
	let b = 20;
	
	console.log(a+b);
}

function func2() {
	let a = 10;
	let b = 20;
	
	return a + b;
}

function func3() {
	let a = 10;
	let b = "20";
	return a + b;
}

function func4() {
	return Math.random();
}
// ----------------------------------

// Q. 다음 코드 실행 시 예상 결과대로 나오지 않았다. 잘못된 부분을 수정해보자.
// A.
// ----------------------------------
function sum(a, b) {
	return a + b;
}

console.log(sum(1, 2));     // 결과: 3
console.log(sum(10, 30));   // 결과: 40
// ----------------------------------