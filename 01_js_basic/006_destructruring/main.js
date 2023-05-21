// const [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

// const { x, z, y } = { x: 1, y: 2, z: 3 };
// console.log(x);
// console.log(y);
//分割代入
const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = ([ country, state, city]) => {
    console.log("Array");
    console.log(`country: ${country}`);
    console.log(`state: ${state}`);
    console.log(`city: ${city}`);
};

const fnObj = ({country, state, city}) => {
    console.log(`Object`);
    console.log(`country: ${country}`);
    console.log(`state: ${state}`);
    console.log(`city: ${city}`);
};

fnArr(arr);

