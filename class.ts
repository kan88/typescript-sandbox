class User {
  public name: string;
  public static nameWife: string = "Elena";
  public gender: string;
  private age: number;
  protected surname: string;
  readonly city: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  showAge() {
    console.log(this.age);
  }
}

const myUser = new User("Evgeny", 33);
console.log(myUser.gender); //undefined
console.log(myUser.showAge()); //undefined

//Модификаторы доступа

//public по умолчанию
console.log(myUser.name); //'Evgeny'

//private не доступен за пределами класса
// console.log(myUser.age); //undefined

//protected только наследники класса

//readonly только для чтения
// console.log((myUser.city = "Moscow")); //readonly error

//short
class UserShort {
  private ageWife: number = 20;
  constructor(public name: string, public age: number) {}
  //two variables
  setAge(age: number) {
    this.ageWife = age;
  }
  set newAgeWife(age: number) {
    this.ageWife = age;
  }
}
