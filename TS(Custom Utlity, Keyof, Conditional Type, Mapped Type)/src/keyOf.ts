console.log(
  "keyof------------------------------------------------------------",
);
console.log("   ");

interface User {
  name: string;
  email: string;
  number: number;
}

const user: User = {
  name: "Mantu Morya",
  email: "mantu@gmail.com",
  number: 9649486218,
};

// type key ="name" | "email" | "number"
function getValues(obj: User, key: keyof User) {
  console.log(obj[key]);
}

getValues(user, "name");
getValues(user, "email");
getValues(user, "number");
// getValues(user, "id");

console.log("   ");
