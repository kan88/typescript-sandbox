var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wife = /** @class */ (function () {
    function Wife(namee, age) {
        this.namee = namee;
        this.age = age;
    }
    //two variables
    Wife.prototype.showAgeWife = function () {
        return "".concat(this.namee).concat(Wife.ageWife);
    };
    Wife.ageWife = 20;
    return Wife;
}());
var Mommy = /** @class */ (function (_super) {
    __extends(Mommy, _super);
    function Mommy(age) {
        return _super.call(this, Mommy.namee, age) || this;
    }
    Mommy.namee = "Irina";
    return Mommy;
}(Wife));
var wife = new Wife("Alena", 31);
var myMom = new Mommy(31);
console.log(myMom);
//нельзя создать потомка только наследника, абстрактный метод обязательно должен быть в наследниках
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
