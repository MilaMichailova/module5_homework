let numbers = [0, 1, 2, 3, 4, 5, 6, 7, NaN, null];

let evenNumber = 0;
let oddNumber = 0;

numbers.forEach((num) => {
  let numCurrentType = typeof num;

  if (numCurrentType === "number") {
    if (Number.isNaN(num)) {
      //console.log("it is Nan");
    } else if (num === 0) {
      // console.log("it is 0");
    } else if (num % 2) {
      // console.log("odd");
      oddNumber++;
    } else {
      //  console.log("even");
      evenNumber++;
    }
  } else {
    // console.log("it is not a number");
  }
});

console.log(evenNumber);
console.log(oddNumber);
