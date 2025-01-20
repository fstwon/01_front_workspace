function greet(name) {
  return `안녕하세요, ${name}님!`;
}

console.log(greet("버너스리"));
console.log("출력 결과: 안녕하세요, 버너스리님!")
// 출력 결과: 안녕하세요, 버너스리님!

const person = {
  firstName: "홍",
  lastName: "길동",
  getFullName: function() {
    return `출력: ${this.firstName} ${this.lastName}`
      // 여기에 코드를 작성하세요.
  }
};

console.log(person.getFullName()); // 출력: "홍 길동"   


const cart = [
  { name: "우유", price: 4700, quantity: 2 },
  { name: "양파", price: 1000, quantity: 3 },
  { name: "두부", price: 2500, quantity: 2 }
];

function getTotalPrice(shopList) {
  // 여기에 코드를 작성하세요.
  let totalPrice = 0;
  for(let i = 0; i < shopList.length; i++) {
    const price = shopList[i].price * shopList[i].quantity;
    totalPrice += price;
  }
  return totalPrice;
}

console.log(getTotalPrice(cart)); // 출력: 17400

function Calculator() {
  // 여기에 코드를 작성하세요.
  this.value = 0;
  this.add = function(number) {
    this.value += number;
    return this.value;
  }
  this.subtract = function(number) {
    this.value -= number;
    return this.value
  }
  this.reset = function() {
    this.value = 0;
    return this.value;
  }
  this.getValue = function() {
    return this.value;
  }
}

const calc = new Calculator();

calc.add(10); // value에 number를 더함
console.log(calc.getValue()); // 출력: 10

calc.subtract(4); // value에서 number를 뺌
console.log(calc.getValue()); // 출력: 6

calc.reset(); // value를 0으로 초기화
console.log(calc.getValue()); // 출력: 0