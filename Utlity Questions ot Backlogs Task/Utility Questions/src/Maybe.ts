type Maybe<T> = T | null | undefined;

//create Maybe generic type that recieves any(not typescript any, here any means any kind of type) type, and it returns actual type with null and undefined

type StringCanBe = Maybe<string>; // string | null |undefined
type NumberCanBe = Maybe<number>; //number | null | undefined
type NumberArrayCanBe = Maybe<number[]>; //number[] | null | undefined
type User = {
  id: number;
  name: string;
};
type UserCanBe = Maybe<User>; // User | null | undefined
