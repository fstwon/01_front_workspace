const dog = {
  name: '뽀삐',
  breed: '푸들',
  age: 5
};

const food = {
  menu: '돈까스',
  price: 7000
};
 
function Food(name, price) {
  this.name = name;
  this.price = price;
  this.foodInfo = function() {
    console.log(`Food name is ${this.name}`);
    console.log(`Food price is ${this.price}`);
    return {
      name: this.name,
      price: this.price
    }
  }
  // constructor(name, price) {
  // };

  function foodInfo() {
    console.log(`Food name is ${this.name}`);
    console.log(`Food price is ${this.price}`);
  };
}

class FoodClass {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  };

  get foodInfo() {
    console.log(`Food name is ${this.name}`);
    console.log(`Food price is ${this.price}`);
  };
}

const doncatsu = new Food('돈가스', 7000);
const classDon = new FoodClass('동', 8000);

console.log(doncatsu.foodInfo());
classDon.foodInfo

const product = {
  name: '망고',
  price: 10000,
  madeIn: '필리핀산',
  size: {
    width: 10, 
    height: 15
  },
  'product number': 100,
  getProductInfo: function() {
    console.log({
      name: this.name,
      price: this.price,
      madeIn: this.madeIn,
      size: this.size,
      'product number': this['product number']
    });
  }
}

product.getProductInfo();