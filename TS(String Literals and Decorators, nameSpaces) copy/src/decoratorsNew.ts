/**
 * Decorators
 *
 * Definition:
 * A decorator is a function that runs on a class or its members to add or modify behavior.
 * (property, method, parameter) to modify or observe their behavior.
 *
 * Where used:
 * - Class
 * - Method
 * - Property
 * - Parameter
 *
 * Key points:
 * - Applied using @decoratorName
 * - Runs at design time (when class is defined, not when instance is created)
 * - Receives metadata like target, key, descriptor
 * - Common in frameworks (Angular, NestJS)
 *
 * TypeScript v5+:
 * - Updated to align with ECMAScript decorators proposal
 * - Behavior and signatures are slightly different from legacy decorators
 */

/**
 * Class decorator
 * @param target - Constructor of the class
 */
function LogClass(target: any) {
  console.log(target);
  console.log(target.name); // print the class name
}

/**
 * Property decorator
 * @param target - Prototype of the class
 * @param key - Name of the property
 */
function LogProperty(target: any, key: string) {
  console.log("Property:", key);
}

@LogClass
class User {
  /**
   * User name
   */
  @LogProperty
  name: string;

  /**
   * User email
   */
  @LogProperty
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

/**
 * Example usage
 */
const user = new User("Mantu Morya", "mantu@gmail.com");
