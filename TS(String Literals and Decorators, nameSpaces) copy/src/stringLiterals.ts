console.log(
  "String Literals types----------------------------------------------------",
);
console.log("   ");

/**
 * String Literal Types:
 * Allow only specific fixed string values.
 *
 * Usage:
 * Restrict values and prevent invalid strings.
 *
 * Example:
 * type Direction = "left" | "right";
 */

/** Horizontal alignment options */
type Horizontal = "left" | "right" | "center";

/** Vertical alignment options */
type Vertical = "top" | "bottom";

/**
 * Combines horizontal and vertical positions using template literal types
 * Example: "left | top"
 */
type AllPos = `${Horizontal} | ${Vertical}`;

/**
 * Token must start with "Bearer "
 * Example: "Bearer abc123"
 */
type Token = `Bearer ${string}`;

const bearerToken1: Token = "Bearer ffewhwheiheri"; // VALID
// const myToken: Token = "something efrwgetry"; // ERROR
const bearerToken2: Token = "Bearer anything"; // VALID

/** Supported HTTP methods */
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

/** API resource names */
type ResourceName = "users" | "posts" | "comments";

/**
 * API endpoint pattern
 * Example: "GET/api/users"
 */
type ApiEndPoint = `${HTTPMethod}/api/${ResourceName}`;

/** Email-related locale keys */
type EmailLocaleIDs = "welcome_email" | "email_heading";

/** Footer-related locale keys */
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

/**
 * Combines all locale IDs with "_id" suffix
 * Example: "welcome_email_id"
 */
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

console.log("");
