class FullDetail {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const fullDetail = new FullDetail("Mantu Morya", 21);
// fullDetail.name = "Mantu Morya";     //cant resolve issue initilly cause it want constructor to initilize values for its best prectices

console.log(fullDetail);

//specfier

//public and private
class Chai {
  public flavour: string = "Masala";
  private secrateIngredients: string = "Cardamom";
  reveal() {
    return this.secrateIngredients; //its ok acess within class only
  }
}

const masalaChai = new Chai();
console.log(masalaChai.reveal());

//protected
class Shop {
  protected shopName: string = "Chai Bar";
}
class Branch extends Shop {
  getName() {
    return this.shopName; //how we can acess protected
  }
}

//we can also define private specfier using # keyword useing

class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const wallet = new Wallet();
console.log(wallet.getBalance());

//readonly Value

class ReadOnly {
  readonly name: string = "Mantu Kumar Morya";
}

let readOnly = new ReadOnly();
// readOnly.name = "Mantu"; //here it give problem cause cant redefine the value of readonly
console.log(readOnly.name);

// getters and setters

class ModernName {
  private _title = "mr.";
  private _name = "Mantu Morya";
  get fullName(): string {
    return this._title + " " + this._name;
  }
  set fullName(data: { title: string; name: string }) {
    this._title = data.title;
    this._name = data.name;
  }
  static age: number = 21;
}

let name1 = new ModernName();
console.log(name1.fullName);
name1.fullName = { title: "Dr.", name: "Satyam Kumar" };
console.log(name1.fullName);
console.log(ModernName.age); //static specfier is directly acess to the classes

//abstract

abstract class drink {
  abstract softDrink(): void;
}

class Party extends drink {
  softDrink(): void {
    console.log("Drinking Coco-Cola");
  }
}

const OfficePrity = new Party();
OfficePrity.softDrink();
