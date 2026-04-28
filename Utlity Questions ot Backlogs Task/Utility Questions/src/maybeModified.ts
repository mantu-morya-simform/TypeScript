// create maybe type that receives any type(not typescript any, here any means any kind of type) except null and undefined

type Maybe<type> = type extends null | undefined
  ? Error
  : type | null | undefined;

type StringCanBe = Maybe<string>; // string | null |undefined
type ZeroCanbe = Maybe<0>; // 0 | null |undefined
type EmptyStringCanbe = Maybe<"">; // "" | null |undefined
type NullCanbe = Maybe<null>; // TS error
type UndefinedCanbe = Maybe<undefined>; // TS error
