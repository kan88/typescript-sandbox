//type with | объединение
var createPass = function (name, age) {
    "".concat(name, "}").concat(age);
};
createPass("EV", 3);
createPass("EV", "22");
//optional argument
var createPassword = function (name, age) {
    return "".concat(name, "}").concat(age);
};
createPassword("Kan");
//REST operator
var createSkills = function (name) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return "My ".concat(name, " and my skills ").concat(skills.join());
};
createSkills("Evgeny", "ES", "React");
//function
var myFunction;
var anotherFunction = function (name) {
    alert(name);
};
myFunction = anotherFunction;
