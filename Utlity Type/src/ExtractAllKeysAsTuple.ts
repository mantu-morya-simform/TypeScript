type FindType<T> = (keyof T)[];

const user = { name: "John", age: 30 }; // Expected Result:["name", "age"]// When you get the result, try to check it's type, it shouldn't be the type of `string[]`. Instead it should be ("name" | "age")[].
type UserType = FindType<typeof user>;
