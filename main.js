//   const { name, price, quantity } = products;
//   console.log(name, price, quantity);

// Task 1
const user = {
  name: 'Artem',
  age: 14,
  hobby: 'Js',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// Task 2
const countProps = function (obj) {
  const keys = Object.keys(obj);

  return keys.length;
};

console.log(countProps({ name: 'Ajax', age: 4 }));

console.log(countProps({ gmail: 'temka@gmail.com', previuw: true, score: 700 }));

// Task 3
const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let maxResult = employees[keys[0]];
  let bestEmployee = keys[0];

  for (let key of keys) {
    if (employees[key] > maxResult) {
      maxResult = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    artem: 29,
    kiril: 35,
    elena: 1,
    egorka: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    alex: 17,
    anya: 4,
  }),
);

console.log(
  findBestEmployee({
    egor: 147,
    alina: 21,
    raya: 19,
    dasha: 38,
}),
);

// Task 4
const countTotalSalary = function (employees) {
  const values = Object.values(employees);

  console.log(values);

  let totalSalary = 0;

  for (let value of values) {
    totalSalary += value;
  }

  return totalSalary;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    ajax: 80,
  }),
);

console.log(
  countTotalSalary({
    plane: 200,
    navigator: 50,
    ball: 150,
  }),
);

// Task 5
const products = [
  { name: "Літак", price: 1300, quantity: 3 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Андройд", price: 400, quantity: 7 },
  { name: "Дрон", price: 1200, quantity: 2 }
];

const getAllPropValues = function (arr, prop) {
  const items = [];

  for (let product of arr) {
    if (product[prop] === undefined) {
      break;
    }

    items.push(product[prop]);
  }

  return items;
};

console.log(getAllPropValues(products, 'name'));

console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'price'));

// Task 6
const productsa = [
  { name: "Літак", price: 1300, quantity: 3 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Андройд", price: 400, quantity: 7 },
  { name: "Дрон", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice = 0;

  for (let product of allProducts) {
    if (productName === product.name) {
      totalPrice = product.price * product.quantity;
    }
  }

  return totalPrice;
};

console.log(calculateTotalPrice(productsa, 'Сканер'));

console.log(calculateTotalPrice(productsa, 'Літак'));