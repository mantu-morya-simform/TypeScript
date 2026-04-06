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

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Ginger Tea",
  price: 50,
  ingredients: ["Ginger", "Tea Leaves", "Suger", "Milk"],
};

console.log(adrakChai);

//type chenge

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

type Brew = {
  brewTime: number;
};
const coffie = {
  brewTime: 10,
  beans: "Arabica",
};

const chaiBrew: Brew = coffie;

console.log(chaiBrew); // here is also not any comptactibality issue

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

type Items = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

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

const placeOrder = (order: Required<chaiOrder>) => {
  console.log("Order", order);
};

placeOrder({
  name: "adrak Chai",
  quantity: 3,
}); //here both arguments are required even if we assign with optional cause here we use required that mins all properties we will be assign here tht it not give error

// pick to pick specfic types
type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lamon Tea",
  price: 40,
}; //here we only pick the name and price from the chai type not pisk isHot

console.log(chaiInfo);

//omit :- when we hide sime properties type then we use omit

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngeredients: string;
};

type publicChai = Omit<ChaiNew, "secretIngeredients">;
const publicChaiInfo: publicChai = {
  name: "Lamon Tea",
  price: 40,
  isHot: true,
}; //here we only pick the name and price from the chai type not pisk isHot

console.log(publicChaiInfo);
