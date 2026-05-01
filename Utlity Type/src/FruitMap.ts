interface FruitMap {
  apple: "Red";
  banana: "yellow";
  orange: "orange";
}

type Transforn<T> = {
  [K in keyof T]: `${K & string}:${T[K] & string}`;
}[keyof T];
type TransformFruits = Transforn<FruitMap>;

//  "orange:orange" | "apple:Red" | "banana:yellow"
