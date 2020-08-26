// const findBestEmployee = function (employees) {
//   const iteration = Object.keys(employees);
// let bestName = iteration[0];
// let bestValue = employees[bestName];

//   for (let currentName of iteration) {
//     if (bestValue < employees[currentName]) {
//       bestValue = employees[currentName];
//       bestName = currentName;
//     }
//   }
//   return `${bestName}: ${bestValue}`;
// };

const findBestEmployee = function (employees) {
  const best = Object.keys(employees);
  let bestName = best[0];
  let bestValue = employees[bestName];
  // console.log(bestValue);

  for (let key of best) {
    if (employees[key] > bestValue) {
      bestName = key;
      bestValue = employees[key];
    }
  }
  return bestName;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// const findBestEmployee = function (employees) {
//   const iteration = Object.entries(employees);

//   let name;
//   let num = 0;
//   for (const entry of iteration) {
//     const key = entry[0];
//     const value = entry[1];
//     if (value > num) {
//       num = value;
//       name = key;
//     }
//   }
//   debugger;
//   return `${name} : ${num}`;
// };

// const findBestEmployee = function (employees) {
//   const iteration = Object.keys(employees);
//   let bestName = iteration[0];

//   let bestValue = employees[bestName];

//   for (let currentName of iteration) {
//     if (bestValue < employees[currentName]) {
//       bestValue = employees[currentName];
//       bestName = currentName;
//     }
//   }
//   return `${bestName}: ${bestValue}`;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
