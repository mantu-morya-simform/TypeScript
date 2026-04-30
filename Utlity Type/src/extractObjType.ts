//Input
const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [{ name: null, value: undefined }, 2],
  },
} as const;

type ObjType = typeof obj;

type GetType<T> = {
  -readonly [P in keyof T]: T[P];
};

type readableType = GetType<ObjType>;

/*
//Output
{
  "A": "12",
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0.name": null,
  "C.Q.0.value": undefined,
  "C.Q.1": 2
}

*/
