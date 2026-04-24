console.log("String Literals");
type Horizontal = "left" | "right" | "center";
type Vertical = "top" | "bottom";
type AllPos = `${Horizontal} | ${Vertical}`;
// "left|top" | "left|bottom" | "right|top" | "right|bottom"

type Token = `Bearer ${string}`;
const bearerToken1: Token = "Bearer ffewhwheiheri"; //VALID
// const myToken: Token = "something efrwgetry"; // ERROR
const bearerToken2: Token = "Bearer anything"; //VALID

console.log("   ");
