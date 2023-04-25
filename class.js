var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.showAge = function () {
        console.log(this.age);
    };
    User.nameWife = "Elena";
    return User;
}());
var myUser = new User("Evgeny", 33);
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
var UserShort = /** @class */ (function () {
    function UserShort(name, age) {
        this.name = name;
        this.age = age;
        this.ageWife = 20;
    }
    //two variables
    UserShort.prototype.setAge = function (age) {
        this.ageWife = age;
    };
    Object.defineProperty(UserShort.prototype, "newAgeWife", {
        set: function (age) {
            this.ageWife = age;
        },
        enumerable: false,
        configurable: true
    });
    return UserShort;
}());
