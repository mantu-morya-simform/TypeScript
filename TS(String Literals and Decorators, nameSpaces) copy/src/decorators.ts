/**
 * Property decorator that logs the property name at class definition time.
 * @param target - Class prototype
 * @param key - Property name
 */
function LogProperty(target: any, key: string): void {
  console.log("Property:", key);
}

class User {
  /** User name */
  @LogProperty
  name: string = "Mantu";
  @LogProperty
  email: string = "mantu@gmail.com";
}
