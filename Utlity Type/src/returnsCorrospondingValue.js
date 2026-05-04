function getValue(obj, key) {
  return obj[key];
}

const user = { name: "John", age: 30 };
console.log(getValue(user, "name")); // Expected: "John"
console.log(getValue(user, "age")); // Expected: 30
