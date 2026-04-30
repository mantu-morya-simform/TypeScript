type GetDataValue<T> = T extends { data: infer U } ? U : never;

type MyHello = GetDataValue<{ data: "hello" }>; // "hello"
type MyNumber = GetDataValue<{ data: 1 }>; // 1
type MyValidType = GetDataValue<{ data: { isValid: boolean } }>; // {isValid:boolean}
