class Wife {
  static ageWife: number = 20;
  constructor(public namee: string, public age: number) {}
  //two variables
  showAgeWife() {
    return `${this.namee}${Wife.ageWife}`;
  }
}

class Mommy extends Wife {
  static namee: string = "Irina";
  constructor(age: number) {
    super(Mommy.namee, age);
  }
}
const wife = new Wife("Alena", 31);
const myMom = new Mommy(31);
console.log(myMom);

//нельзя создать потомка только наследника, абстрактный метод обязательно должен быть в наследниках
abstract class Users {
  abstract getPass(): string;
}
//type нельзя наследовать, interface должен быть объектом
