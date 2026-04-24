console.log(
  "Key type of FakeData...............................--------------------------------",
);

const fakeData = {
  String: "Default string",
  Numbers: {
    Int: 1,
    Float: 3.14,
  },
  Boolean: true,
  Id: "id",
} as const;

type StringType = (typeof fakeData)["String"]; //it should be same type as one from fakeData's String key
type Int = (typeof fakeData)["Numbers"]["Int"]; //it should be same type as one from fakeData's Numbers.Int key
type Float = (typeof fakeData)["Numbers"]["Float"]; //it should be same type as one from fakeData's Numbers.Float key
type BooleanType = (typeof fakeData)["Boolean"]; //it should be same type as one from fakeData's Boolean key
type Id = (typeof fakeData)["Id"]; //it should be same type as one from fakeData's Id key

//not allow only assign "Default string"
// let name: StringType = "Mantu";
let name: StringType = "Default string";

console.log(name);
