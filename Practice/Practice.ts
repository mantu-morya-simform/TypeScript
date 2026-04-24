type MyRequired<T, U extends keyof T> = {
  [K in U]: T[K];
};

type Users = { id: number; email: string };

// Extract only email type without using base type directly.
type myEmailType = MyRequired<Users, "email">;
