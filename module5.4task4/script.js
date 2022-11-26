function getRandomInt(min, max) {
  let maxInt = Math.ceil(max);
  let minInt = Math.floor(min);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

let randomInt = getRandomInt(0, 100);

console.log(randomInt);
