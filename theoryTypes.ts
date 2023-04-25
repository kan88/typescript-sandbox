const greetUser = (): void => {
  alert("Hello");
};

const list: number[] = [1, 2, 3];

//generic type
const listSecond: Array<number> = [2, 2, 3];

//tupple first variable
let tupple: [string, number];
tupple = ["hello", 2];

//tupple second variable
let tuppleSecond: [string, number] = ["hello", 2];

//any
const anyTupple: [any, any] = ["any", 3];
const anyArray: any[] = [];
const anyGeneric: Array<any> = [true];

//enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

Direction.Up; //0
Direction.Down; //1

enum IndexedDirection {
  Up = 2,
  Down = 4,
  Left,
}

IndexedDirection.Left; //5
console.log(IndexedDirection[2]); // 'Up'

//never only when Error or function is never stop infinite

const error = (msg: string): never => {
  throw new Error(msg);
};

const infiniteLoop = (): never => {
  while (true) {}
};

//type object

const create = (o: object | null): void => {};

// create("string"); //error
create({}); //done
create(null);

//type
type Name = string;
const word: Name = "hello";

//enum or type object, will be ever compile
enum Links {
  vk = "vk.com",
  youtube = "youtube.com",
}

//if before enum declare const, object will not be compile without call this enum
// const enum Links {
//   vk = "vk.com",
//   youtube = "youtube.com",
// }

Links.vk; // 'vk.com'
type LinksObject = {
  vk: string;
  youtube: string;
};
const objectLink: LinksObject = {
  vk: "vk.com",
  youtube: "youtube.com",
};

const arrLinksEnum = [Links.vk];
const arrLinks = [objectLink.vk];
