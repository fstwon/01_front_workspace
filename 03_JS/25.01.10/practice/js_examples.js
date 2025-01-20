// age의 값이 
// 8보다 작은 경우 "어린이"
// 8 ~ 19 = "청소년"
// 20 ~ = "성인" 이라는 값을 콘솔창에 출력

// 실습 예제. 1
// let age = document.getElementById('age').value; // 실제로 데이터는 없음.
let age = 18;

if(age < 8) {
  console.log('어린이');
} else if(age >= 8 && age <= 19) {
  console.log('청소년');
} else {
  console.log('성인');
};

// do ~ while
do {
  console.log(age);
  age++;
} while(age < 20);

let whileAge = 18;
while(whileAge < 20) {
  console.log(whileAge);
  whileAge++;
};