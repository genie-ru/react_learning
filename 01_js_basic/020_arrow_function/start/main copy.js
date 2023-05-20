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

//But if you have only one line of code in the function body, you can omit the curly braces and the return statement  
const fnArrowOneParamOneLine = number => number * 2;

console.log(fn(2));


