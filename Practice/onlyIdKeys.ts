type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: T[K];
};

type Check = OnlyIdKeys<{ name: string; id: number; userId: number }>;

/*
{
    id: number;
    userId: number;
}

*/
