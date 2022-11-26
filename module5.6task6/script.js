function isAllTheSame(pets) {
  let firstitem = pets[0];

  for (let i = 1; i < pets.length; i++) {
    let pet = pets[i];

    if (firstitem !== pet) {
      return false;
    }
  }

  return true;
}

let pets = ["cat", "cat", "cat", "dog"];

console.log("Элементы массива одинаковы?", isAllTheSame(pets));
