/**
 * List of available chai flavours.
 */
const chaiFlavour: string[] = ["Masala", "Adrak"];

/**
 * Priced list of chai options.
 */
const chaiPrise: number[] = [40, 50];

/**
 * Rating values for chai items.
 */
const rating: Array<number> = [4.5, 5.0];

/**
 * Chai item type with name and price.
 */
type Chai = {
  name: string;
  price: number;
};

/**
 * Menu array storing chai items.
 */
let menu: Chai[];

menu = [
  { name: "Masala", price: 40 },
  { name: "Adrak", price: 50 },
  { name: "Elichi", price: 30 },
];

console.log(menu);

/**
 * Read-only list of cities served by the chai menu.
 */
const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("hydarabad")    // not work cause the value of cities only be readable

/**
 * Two-dimensional numeric array example.
 */
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

/**
 * Tuple containing a name and an age.
 */
let nameTuple: [string, number];

nameTuple = ["Mantu Morya", 21];
// nameTuple = [21, "Mantu Morya"];    //its not correct/allows

/**
 * Optional tuple for user information.
 */
let userInfo: [string, number, boolean?];
userInfo = ["Mantu", 21];
userInfo = ["Mantu", 21, true];

/**
 * Read-only tuple representing a geographic location.
 */
const location: readonly [number, number] = [12.4, 14.9];
console.log(location);

/**
 * Named tuple with explicit element labels.
 */
let nameData: [name: string, age: number] = ["mantu", 21];
console.log(nameData);

/**
 * Demonstrates tuple behavior when modified with array methods.
 */
let myName: [string, number] = ["mantu", 31];
myName.push("abc");
console.log(myName);

/**
 * Cup size enum for restricted options.
 */
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE; //autoSuggest

/**
 * Status enum with incremental numeric values.
 */
enum Status {
  PANDING = 100,
  SERVED, //101
  CANCELLED, //102    autometically assign
}

/**
 * Enum representing supported chai types.
 */
enum chaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

/**
 * Logs the type of chai being made.
 *
 * @param {chaiType} type - The chai type to make.
 */
function makeChai(type: chaiType) {
  console.log(`Making: ${type} Chai`);
}

makeChai(chaiType.GINGER);
// makeChai("elichi");   //it is wrong

/**
 * Random enum that mixes numeric and string values.
 */
enum RandomEnum {
  ID = 1,
  Name = "chai",
}

/**
 * Const enum with fixed compile-time values.
 */
const enum RandomEnum1 {
  ID = 1,
  Name = "chai",
} //also we can assign like this to not make chenges in future

const id = RandomEnum1.ID;
console.log(id);
