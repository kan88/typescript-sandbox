var greetUser = function () {
    alert("Hello");
};
var list = [1, 2, 3];
//generic type
var listSecond = [2, 2, 3];
//tupple first variable
var tupple;
tupple = ["hello", 2];
//tupple second variable
var tuppleSecond = ["hello", 2];
//any
var anyTupple = ["any", 3];
var anyArray = [];
var anyGeneric = [true];
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
Direction.Up; //0
Direction.Down; //1
var IndexedDirection;
(function (IndexedDirection) {
    IndexedDirection[IndexedDirection["Up"] = 2] = "Up";
    IndexedDirection[IndexedDirection["Down"] = 4] = "Down";
    IndexedDirection[IndexedDirection["Left"] = 5] = "Left";
})(IndexedDirection || (IndexedDirection = {}));
IndexedDirection.Left; //5
console.log(IndexedDirection[2]); // 'Up'
//never only when Error or function is never stop infinite
var error = function (msg) {
    throw new Error(msg);
};
var infiniteLoop = function () {
    while (true) { }
};
//type object
var create = function (o) { };
// create("string"); //error
create({}); //done
create(null);
var word = "hello";
//enum or type object, will be ever compile
var Links;
(function (Links) {
    Links["vk"] = "vk.com";
    Links["youtube"] = "youtube.com";
})(Links || (Links = {}));
//if before enum declare const, object will not be compile without call this enum
// const enum Links {
//   vk = "vk.com",
//   youtube = "youtube.com",
// }
Links.vk; // 'vk.com'
var objectLink = {
    vk: "vk.com",
    youtube: "youtube.com",
};
var arrLinksEnum = [Links.vk];
var arrLinks = [objectLink.vk];
