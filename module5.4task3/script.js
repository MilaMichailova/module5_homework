function reversString(str) {
  let splitStr = str.split("");
  let reversArray = splitStr.reverse();
  let joinArray = reversArray.join("");

  return joinArray;
}

console.log(reversString("Hello!"));
