import { basicOprArgs, ItemStorage, SomeItem } from "./types.js";

export function sum({ firstArguments, secondArguments }: basicOprArgs) {
  return firstArguments + secondArguments;
}

export function doSomthing(name: string, weight: number): ItemStorage {
  let itemArr: SomeItem[] = [{ weight }];
  const data = {
    name,
    items: itemArr,
  };

  return data;
}
