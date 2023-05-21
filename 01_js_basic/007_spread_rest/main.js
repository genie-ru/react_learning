const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const result = Math.max(...nums);
console.log(result);

const obj = {
    name: "Tom",
    age: 24,
};

const newObj = { ...obj };
console.log(newObj);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)