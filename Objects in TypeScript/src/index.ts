const chai = {
  name: "masala chai",
  price: 20,
  isHot: true,
};

/*
const chai: {
    name: string;
    price: number;
    isHot: boolean;
}   //avov object infer as this 

*/

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

console.log(tea);

//or

/**
 * A tea object shape used for typed object examples.
 */
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

/**
 * A ginger chai example typed as Tea.
 */
const adrakChai: Tea = {
  name: "Ginger Tea",
  price: 50,
  ingredients: ["Ginger", "Tea Leaves", "Suger", "Milk"],
};

console.log(adrakChai);

//type chenge

/**
 * Type for a cup with size.
 */
type cup = { size: string };
let smallCup: cup = {
  size: "200ml",
};

let bigCup = {
  size: "500ml",
  material: "steel",
};

smallCup = bigCup; //it satisfied cause it satisfied the bair minimum condition which is size and also can add more properties

console.log(smallCup);

//other example

/**
 * Type for brew time.
 */
type Brew = {
  brewTime: number;
};
const coffie = {
  brewTime: 10,
  beans: "Arabica",
};

const chaiBrew: Brew = coffie;

console.log(chaiBrew); // here is also not any comptactibality issue

/**
 * Type for a user with username and password.
 */
type User = {
  userName: string;
  password: string;
};

const u1: User = {
  userName: "mantu088",
  password: "mkm",
}; //if we not provide password then it not satisfied with its base properties condition  and give error

console.log(u1);

//sepration

/**
 * Type for order items.
 */
type Items = {
  name: string;
  quantity: number;
};

/**
 * Type for address information.
 */
type Address = {
  street: string;
  pin: number;
};

/**
 * Type for a complete order.
 */
type Order = {
  id: number;
  item: Items[];
  adress: Address;
};

//partail data

//at any point we want data type that these value we want but not all values partial values

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

/**
 * Logs partial chai updates using the Partial utility type.
 *
 * @param {Partial<Chai>} updates - Partial chai properties.
 */
const updatedChai = (updates: Partial<Chai>) => {
  console.log("Updated Chai", updates);
};

updatedChai({ name: "Ginger Tea" });
updatedChai({ isHot: true });
updatedChai({}); //it is valid and it create issue somtimes that`s why we avoid to use it

//required

type chaiOrder = {
  name?: string;
  quantity?: number;
};

/**
 * Logs a fully required chai order using the Required utility type.
 *
 * @param {Required<chaiOrder>} order - The final order details.
 */
const placeOrder = (order: Required<chaiOrder>) => {
  console.log("Order", order);
};

placeOrder({
  name: "adrak Chai",
  quantity: 3,
}); //here both arguments are required even if we assign with optional cause here we use required that mins all properties we will be assign here tht it not give error

// pick to pick specfic types
/**
 * Picked type with only name and price from Chai.
 */
type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lamon Tea",
  price: 40,
}; //here we only pick the name and price from the chai type not pisk isHot

console.log(chaiInfo);

//omit :- when we hide sime properties type then we use omit

/**
 * Chai type with a secret ingredient.
 */
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngeredients: string;
};

/**
 * Public chai type omitting the secret ingredient.
 */
type publicChai = Omit<ChaiNew, "secretIngeredients">;
const publicChaiInfo: publicChai = {
  name: "Lamon Tea",
  price: 40,
  isHot: true,
}; //here we only pick the name and price from the chai type not pisk isHot

console.log(publicChaiInfo);
