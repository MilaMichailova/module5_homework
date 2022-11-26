let pets = ["cat", "dog", "horse", "mouse"];

console.log(pets.length);

let allPets = pets.map((pet) => {
  console.log(pet);

  return pet;
});

console.log(allPets);
