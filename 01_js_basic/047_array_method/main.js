const arry = [10, 20, 30, 40];
const newarry = [];

for (let i = 0; i < arry.length; i++) {
    const val = arry[i] * 2;
    if(val > 50) {
        newarry.push(arry[i] * 2);
    }
}   

console.log(newarry);

/*
const newArry2 = arry.map(val =>  val * 2);
const newArry3 = newArry2.filter(val => val > 50);
console.log(newArry3);
*/
const newArry2 = arry.map(val =>  val * 2).filter(val => val > 50);
console.log(newArry2);

