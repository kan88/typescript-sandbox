//type with | объединение
const createPass = (name: string, age: number | string): void => {
  `${name}}${age}`;
};

createPass("EV", 3);
createPass("EV", "22");

//optional argument

const createPassword = (name: string, age?: number): string => {
  return `${name}}${age}`;
};

createPassword("Kan");

//REST operator

const createSkills = (name: string, ...skills: string[]): string => {
  return `My ${name} and my skills ${skills.join()}`;
};

createSkills("Evgeny", "ES", "React");

//function

let myFunction: (arg: string) => void;

const anotherFunction = (name: string): void => {
  alert(name);
};

myFunction = anotherFunction;
