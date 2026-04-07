/**
 * Prints a chai order object with inline type annotations.
 *
 * @param {{type: string; suger: number; strong: boolean}} order - The chai order.
 */
function makeChai(order: { type: string; suger: number; strong: boolean }) {
  console.log(order);
}

/**
 * Logs a chai order object with inline type annotations.
 *
 * @param {{type: string; suger: number; strong: boolean}} order - The chai order.
 */
function serveChai(order: { type: string; suger: number; strong: boolean }) {
  console.log(order);
} //here both signature is matched so at that time we create aliyas with type or interface

/**
 * Type alias for a chai order.
 */
type chaiOrder = {
  type: string;
  suger: number;
  strong: boolean;
};

/**
 * Prints a chai order object using a type alias.
 *
 * @param {chaiOrder} order - The chai order.
 */
function makeChai1(order: chaiOrder) {
  console.log(order);
}

/**
 * Logs a chai order object using a type alias.
 *
 * @param {chaiOrder} order - The chai order.
 */
function serveChai1(order: chaiOrder) {
  console.log(order);
} //so here both signature is same thats why i created type aliyas and pass in both function

// we face issue with type
/**
 * Type for tea recipe with water and milk.
 */
type teaRecipe = {
  water: number;
  milk: number;
};

/*
interface teaRecipe {
  water: number;
  milk: number;
}    //converted as interface
*/

/**
 * Class implementing teaRecipe for masala chai.
 */
class masalaChai implements teaRecipe {
  water = 50;
  milk = 50;
} //here it work file but in next example it not work or create issue

/*
// type cupSize = "small" | "large";
// class chai implements cupSize {} // this is not allowed with type so that`s why we are using interface instead of type in the simmiler situation
*/

/**
 * Interface for cup size.
 */
interface cupSize {
  size: "small" | "large";
}

/**
 * Class implementing cupSize for chai serving.
 */
class chai implements cupSize {
  size: "small" | "large" = "large";
  serveChai() {
    console.log(this.size);
  }
} //it is valid in this situation

const giveChai = new chai();
giveChai.serveChai();

//so, when we have work with classes then we prefere that we use interfece with that at that time we avoid type alieas

//type intersection (combine type)

/**
 * Base chai type with tea leaves.
 */
type baseChai = { teaLeaves: number };

/**
 * Extra chai type with masala.
 */
type extraChai = { masala: number };

/**
 * Intersection type combining base and extra chai.
 */
type MasalChai = baseChai & extraChai;
const cup: MasalChai = {
  teaLeaves: 5,
  masala: 10,
};

console.log(cup);

//option value

/**
 * User type with optional bio.
 */
type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "mantu088",
  bio: "i am a software developer",
};

const u2: User = {
  username: "mantu",
}; //here bio is optional if provided then ok otherwise not

console.log(u1, u2);

//readonly Value cannot be chenged after set once

/**
 * Config type with readonly app name.
 */
type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Redbus",
  version: 1,
};

console.log(cfg);

// cfg.appName = "Mantu";    // cant be chenged after assign value once here
