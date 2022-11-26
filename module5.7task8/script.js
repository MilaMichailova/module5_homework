let userInfo = new Map([
  ["name", "Mila"],
  ["sex", "woman"],
  ["city", "Smolensk"],
]);

for (let key of userInfo.keys()) {
  console.log(`ключ - ${key}, значение - ${userInfo.get(key)}`);
}
