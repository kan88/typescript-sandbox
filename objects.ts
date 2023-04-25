let user: any = {
  name: "Evgeny",
  age: 30,
};

let TypeUser: { name: string; age: number } = {
  name: "User",
  age: 40,
};
//error
// TypeUser.surname = "sss";

type MyTypeObject = {
  name: string;
  surname: string;
  getpass?: () => string;
  getArrayPass?: () => string;
};

const typeObject: MyTypeObject = {
  name: "Evgeny",
  surname: "Kan",
};

const typeSecondObject: MyTypeObject = {
  name: "Evgeny",
  surname: "Kan",
  getpass() {
    return "sd";
  },
  getArrayPass: () => {
    return "sss";
  },
};
