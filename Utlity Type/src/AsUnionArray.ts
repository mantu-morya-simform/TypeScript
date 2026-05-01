type Union<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

interface Values {
  email: string;
  age: number;
  isEmployee: boolean;
}
type AsUnion = Union<Values>; //  object first=>then union
// ["email",string] | ["age",number] | ["isEmployee",boolean]
