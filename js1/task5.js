const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const getArray = []
  const nameArr = Object.entries(arr);
  console.log(nameArr);
  // const priceArr = [];
  // const quantityArr = []
  for (let key of arr) {
    console.log(key[prop]);
    if (key[prop]) {
      getArray.push(key[prop]);
    }
  }

  // for (let key of arr) {
  //   // console.log(key);
  //   if (key.name) {
  //     nameArr.push(key.name);
  //   } else if (key.price) {
  //     priceArr.push(key.price);
  //   } else if (key.quantity) {
  //     quantityArr.push(key.quantity);
  //   } else {
  //     return "not";
  //   }
  // }
  // console.log( priceArr);
  // return getArray;
  // return getArray;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
