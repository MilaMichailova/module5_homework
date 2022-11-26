let result = prompt("введите число");

if (result !== null) {
  let number = +result;

  console.log(result);
  console.log(typeof number);
  console.log(number);

  if (Number.isNaN(number)) {
    alert(`Упс, кажется, вы ошиблись`);
  } else if (number % 2) {
    alert(`число ${number} нечетное`);
  } else {
    alert(`число ${number} четное`);
  }
}
