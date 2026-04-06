const getChai = (kind: string | number) => {
  if (typeof kind === "string") {
    return `Making ${kind} Tea`;
  }
  return `Make ${kind} Cup of Tea`;
};

const serveChai = (msg?: string) => {
  if (msg) {
    return `Serving ${msg}`;
  }

  return `Serving Default Masala Chai`; //here we cant use ${msg} cause if msg available then it not come to that point it return in previus block
};

const orderChai = (size: "small" | "medium" | "large" | number) => {
  if (size == "small") {
    return `Make a Cutting Chai`;
  }

  if (size === "medium" || size === "large") {
    return `Make Extra Chai`;
  }

  return `Make ${size} Cup of Tea`;
};

//check Instence of

class KuladChai {
  serve() {
    return `Serving Kulad Chai`;
  }
}

class Cutting {
  serve() {
    return `Serving Kulad Chai`;
  }
}

const serve = (chai: KuladChai | Cutting) => {
  if (chai instanceof KuladChai) {
    return chai.serve();
  }
  return "No Chai Now";
};
console.log(serve(new Cutting())); // it not run cause we only want order chai for KuladChai not Cutting in condition
console.log(serve(new KuladChai()));

//type Keyword to create own type

type ChaiOrder = {
  type: string;
  suger: number;
};

const chaiType: ChaiOrder = {
  type: "Cutting",
  suger: 4,
};

const isChaiAvailable = (chaiType: ChaiOrder): boolean => {
  if (
    typeof chaiType === "object" &&
    chaiType !== null &&
    chaiType.suger &&
    chaiType.type
  ) {
    return true;
  }

  return false;
};

const isChaiOrder = (chaiType: ChaiOrder): ChaiOrder | string => {
  if (isChaiAvailable(chaiType)) {
    return {
      type: chaiType.type,
      suger: chaiType.suger,
    };
  }

  return `Chai is Not Orderd`;
};

console.log(isChaiOrder(chaiType));

//create diff types for chai

type MasalaChai = {
  type: "masala";
  aroma: string;
  suger: number;
  spiceLevel: number;
};
type GingerChai = {
  type: "ginger";
  aroma: string;
  suger: number;
  amoumt: number;
};
type ElichiChai = {
  type: "elichi";
  aroma: string;
  suger: number;
  fregrence: number;
};

type chai = MasalaChai | GingerChai | ElichiChai;

const makeChai = (order: chai) => {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;

    case "ginger":
      return `Ginger Chai`;

    case "elichi":
      return `Elichi Chai`;
  }
};

let makeChaiType: chai = {
  type: "masala",
  aroma: "high",
  suger: 4,
  spiceLevel: 8,
};

console.log(makeChai(makeChaiType));

// if any properties exist then i go forword

const brew = (order: MasalaChai | GingerChai) => {
  if ("spiceLevel" in order) {
    // do anything
  }
};

//unknown datatype

const isStringArray = (arr: unknown): arr is String[] => {
  return Array.isArray(arr) && arr.every((ele) => typeof ele === "string");
};

console.log(isStringArray(["1", "2", "3"]));

//forcefull Type Assercion

let response: any = "42";
let numericLength: number = (response as string).length;
console.log("length :", numericLength);

// stored book in localstorage and check after extract

type Book = {
  name: string;
};
let bookString = '{"name":"who moved my cheas"}';
let bookObject = JSON.parse(bookString) as Book; //without this . not work
console.log(bookObject.name);

//extrect html element
// const inputElement = document.getElementById("myId") as HTMLInputElement;       its work into the browser

//unknown and any-------------------------------------------

let value: any;

value = "Mantu";
value = false;
value = 4.5;

// console.log(value.toUpperCase());     //  here it not throw error at compile time but when we run our code then it give error
//thats why we avoid any cause it create issue at runtime

let num: unknown;

num = 4;
num = false;
num = 4.5;
// console.log(num.toUpperCase()); //so it give error at compile time

if (typeof num === "string") {
  console.log(num.toUpperCase());
}

//error heandling in ts

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error:", error);
}

//in this situation
const data: unknown = "chai aor code ";
const strData: string = data as string;
// never datatype

type Role = "admin" | "user";
const redirectBasedOnRole = (role: Role): void => {
  if (role === "admin") {
    console.log("Redirectiong to Admin Dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirectiong to User Dashboard");
    return;
  }

  role; //this is never type cause it never hit
};

// never return Type

function neverReturn(): never {
  while (true) {
    console.log("i am Always run");
  }
}
