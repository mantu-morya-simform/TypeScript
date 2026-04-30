/**
 * Class decorator
 */
function LogClass(target: Function) {
  console.log(target);
  console.log(target.name);
}

/**
 * Property decorator
 */
function LogProperty(target: any, key: string) {
  console.log("Property:", key);
}

@LogClass
class User {
  @LogProperty
  name: string;

  @LogProperty
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user = new User("Mantu Morya", "mantu@gmail.com");
