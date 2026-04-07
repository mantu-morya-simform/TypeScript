/**
 * Demonstrates TypeScript type inference and explicit annotations.
 */
// 1.type inference

//  ts infer/detect autometically any variable type each time we not require to define the type of the variable but afterassign one type of variable type we cant chenge it after type infer
/**
 * Inferred as a string by TypeScript.
 */
let name = "Mantu";
// name = 6;       // cant do it it is bad prectice  (let name: string), And This is called type Error

let cal = Math.random() > 0.5 ? 10 : "5"; //it infer that its value can be number or string both (let cal: string | number)

// 2.type Anotation

/**
 * Explicit string annotation for the user name.
 */
let nameOfUser: string = "Mantu Morya";
nameOfUser = "Mantu Kumar Morya";
// nameOfUser = 2;      //   it is not valid cause type error
console.log(nameOfUser);

/**
 * Explicit boolean annotation for the age validity flag.
 */
let validAge: boolean = true;
console.log(validAge);
