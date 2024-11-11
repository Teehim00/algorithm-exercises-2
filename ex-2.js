function countPositivesSumNegatives(input) {
  //Start coding here
  if (!input || input.length === 0) {
    return [];
  }
  let numPositives = 0;
  let numNegatives = 0;
  for (let num of input) {
    if (num > 0) {
      numPositives++;
    } else if (num < 0) {
      numNegatives += num;
    }
  }
  return [numPositives, numNegatives];
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
