function add(num1: number, num2: number) : number {
  return num1 + num2;
}

add(1, 2);

function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

let car: string = "aws";
car = "mzz";

let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3, 4];

let week1: string[] = ["a", "b", "c"];

let b: [string, number] = ["B", 1];
b[0] = b[0].toLowerCase();
console.log(b);

function showError(): never {
  throw new Error();
}

enum Os {
  Window = 3,
  IOS,
  Android,
}

let myOs: Os;
myOs = Os.Android;

// // // // // // // // //

type Score = "A" | "B" | "C";
interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score;
}

let user: User = {
  name: "jisu",
  age: 20,
  birthYear: 1997,
  1: "A",
  2: "B",
  3: "C",
};

user.age = 10;
user.gender = "man";
console.log(user.name);
console.log(user.age);
console.log(user[3]);

interface Add2 {
  (num1: number, num2: number): number;
}

const add2: Add2 = function (num1: number, num2: number) {
  // console.log(num1+num2);
  return num1 + num2;
};

add2(1, 2);

interface IsAdult {
  (age: number): boolean;
}

const isAdultimpl: IsAdult = function (age) {
  return age > 20 ? true : false;
};

console.log(isAdultimpl(21));
console.log(isAdultimpl(12));

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car{
    wheels= 4;
    color;
    constructor(c:string){
        this.color  = c;
    }
    
    start() {
        console.log("car is started!!");
    }
}

const d  = new Bmw('red');
console.log(d);
d.start();