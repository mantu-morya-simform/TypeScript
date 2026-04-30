type GetSurname<T extends string> =
  T extends `${infer FirstName} ${infer SurName}` ? SurName : never;

type Names = ["virat kohli", "rohit sharma", "shreyas iyer"];

type IsKohli = GetSurname<Names[0]>; //"kohli"
type IsSharma = GetSurname<Names[1]>; // "sharma"
type IsIyer = GetSurname<Names[2]>; // "iyer"
