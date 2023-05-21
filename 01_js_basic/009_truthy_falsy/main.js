const a = 0;
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = -1;

console.log(Boolean(falsy));
console.log(Boolean(truthy));
//論理積(&&)は左辺がfalseなら左辺の値を返す
const resultA = "" && "foo";
const resultB = 2 && 0;
const resultC = "foo" && 4;
//falseなので、左辺の値が返る　falseではなかったら右辺の値が返る
console.log(resultA);
console.log(resultB);
console.log(resultC);
//理論和(||)は左辺がtrueなら左辺の値を返す
const resultD = "" || "foo";
const resultE = 2 || 0;
const resultF = "foo" || 4;

//trueなので、左辺の値が返る　trueではなかったら右辺の値が返る
console.log(resultD);
console.log(resultE);
console.log(resultF);

