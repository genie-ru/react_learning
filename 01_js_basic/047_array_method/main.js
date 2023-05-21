const arry = [10, 20, 30, 40];
const newarry = [];

for (let i = 0; i < arry.length; i++) {
    newarry.push(arry[i] * 2);
}   

console.log(newarry);

const newarry2 = arry.map(val => val * 2);
console.log(newarry2);