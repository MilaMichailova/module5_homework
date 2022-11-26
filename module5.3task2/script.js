let x;

x = 1;

let xCurrentType = typeof x;

if (xCurrentType === "number") {
  console.log(`${x} — число`);
} else if (xCurrentType === "string") {
  console.log(`${x} — строка`);
} else if (xCurrentType === "boolean") {
  console.log(`${x} — логический тип`);
} else {
  console.log("Тип x не определён");
}
