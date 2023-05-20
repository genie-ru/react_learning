function fn(number) {
  return number * 2;
}

// Arrow function
const fnArrow = (number) => {
  return number * 2;
}

// Arrow function with one parameter

const fnArrowOneParam = number => {
  return number * 2;
}
// =>の後には{}を入力すると,重複するためもし{}を入力したい場合は()で囲む必要がある。
// 下の文ではresultにnumber*2を代入している。とうオブジェクトになる。
const fnArrowOneParam1 = (number) => ({ result: number * 2 })
console.log(fnArrowOneParam1(2));

//But if you have only one line of code in the function body, you can omit the curly braces and the return statement  
const fnArrowOneParamOneLine = number => number * 2;

console.log(fn(2));


