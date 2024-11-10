"use strict";
// import * as _ from "lodash"
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b;
console.log("Hello World");
let num1 = document.getElementById("numberone");
let num2 = document.getElementById("numbertwo");
let btn = document.getElementById("btn");
let addition = (num1, num2) => {
    return num1 + num2;
};
btn.addEventListener("click", () => {
    console.log(addition(Number(num1.value), Number(num2.value)));
});
//Numbers,Strings,Booleans in TS
const doAddition = (num1, num2, phrase, condition) => {
    let res = num1 + num2;
    if (condition) {
        console.log(phrase + res);
    }
    else {
        console.log(phrase + 0);
    }
};
doAddition(2, 3, "the results is: ", false);
doAddition(2, 3, "the results is: ", true);
//Type Assignment Explicit
let num;
num = 2;
// num='2' will give an error
console.log(num);
let success;
success = true;
console.log(success);
//objects in TS
let personone = {
    name: "Keshav",
    age: 20,
};
let persontwo = {
    name: "Keshava",
    age: 20,
    techstack: ["js", "cpp", "ts", "nodejs"],
    place: {
        city: "banglore",
    },
};
console.log(personone.name);
console.log(persontwo.age);
//Array in TS(specific datatype)
let numbers = [];
numbers.push(1);
numbers.push(3);
console.log(numbers, numbers.length, numbers.includes(2));
// numbers.push('4') will give an error
//Tuples in JS
let new_result;
new_result = ["Keshav", 20];
console.log(new_result);
let [names, age] = new_result;
console.log(names, age);
let new_arrs = ["Keshav", "Poojary"];
console.log(new_arrs);
//enums in TS
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
const printResult = (num) => {
    if (num == 0 || num == 6) {
        console.log("Its a Weekend");
    }
};
num = Day.Saturday;
printResult(num);
//any && union type && type aliasing
let an_array = [];
an_array.push(1);
an_array.push("2");
console.log(an_array);
let doAdd = (num1, num2) => {
    console.log(typeof num1, typeof num2);
};
doAdd(2, 3);
doAdd("4", "5");
let person;
person = {
    name: "Keshav",
    age: 20,
};
console.log(person.name, person.age);
//returns
function doOp(num1, num2) {
    //returning number
    return num1 + num2;
}
console.log(doOp(1, 2));
function dontOp(num1, num2) {
    console.log(num1, num2);
}
dontOp(2, 3);
//function types && its specific signature
let doNothing;
doNothing = () => {
    console.log("Hello World!");
};
doNothing();
let doSomething;
doSomething = (num) => {
    return Math.pow(num, 2);
};
console.log(doSomething(2));
//classes
class Student {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    speak() {
        console.log(`My Name is ${this.name} && my age is ${this.age}`);
    }
}
let studentone = new Student('Keshav', 20);
console.log(studentone.speak());
//public,private,readonly
class Animal {
    constructor(n, a, ar) {
        this.name = n;
        this.age = a;
        this.area = ar;
    }
    getAge() {
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}
let dog = new Animal('bruno', 20, 'indiranagara');
console.log(dog.getAge());
//console.log(dog.age) get a error
//shorthand Initilization
class FunDiscovery {
    constructor(n, a) {
        this.n = n;
        this.a = a;
        this.n = n;
        this.a = a;
    }
    speak() {
        console.log(this.n, this.a);
    }
}
let new_fun = new FunDiscovery('keshav', 10);
console.log(new_fun.speak());
//Inheritance
class Electronic {
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }
    speak() {
        console.log(`The name is ${this.name} && price is ${this.price}`);
    }
}
class Laptop extends Electronic {
    constructor(n, p, osmodel) {
        super(n, p);
        this.osmodel = osmodel;
        super.speak();
        console.log(`The os Model is ${osmodel}`);
    }
}
let macbook = new Laptop('macbook_pro', 40000000, 'Mac');
//protected in TS
class Head {
    constructor(n) {
        this.num = n;
    }
    printNum() {
        console.log(this.num);
    }
}
class Tail extends Head {
    printnuMBER() {
        console.log(this.num);
    }
}
let number_one = new Head(3);
console.log(number_one.printNum());
let new_obj = new Tail(4);
new_obj.printNum();
let user_one;
user_one = {
    name: "Keshav",
    age: 20,
    hand: true,
    leg: true,
    speak() {
        console.log(`'Iam ${this.name} and iam ${this.age} years old`);
    },
    getAge() {
        return this.age;
    },
    getName() {
        return this.name;
    },
};
console.log('Hi my name is ', user_one.getName());
class intern {
    constructor(n) {
        this.name = n;
    }
    greet() {
        console.log(`My Name is ${this.name}`);
    }
}
let intern_one;
intern_one = new intern('Keshav');
console.log(intern_one.greet());
let kesh;
kesh = {
    name: "Keshav",
    greet() {
        console.log(this.name);
    }
};
kesh.greet();
let nump = '2';
console.log(nump);
let player_one;
player_one = {
    name: "Virat Kohli",
    role: "Batsman"
};
console.log(player_one);
//type guards --typeof,instanceof,userdefined
let numbers_one = 1;
numbers_one = 1;
const printSomething = (num) => {
    if (typeof num === "string") { //type of guards
        console.log(num);
    }
};
printSomething('4');
function doGreeting(name, age) {
    if (age) {
        console.log(`My name is ${name} && age is ${age}`);
    }
    else {
        console.log(`My name is ${name}`);
    }
}
doGreeting('Keshav', 20);
doGreeting('Keshav');
let users = null;
let default_user = 'guest';
console.log(users !== null && users !== void 0 ? users : default_user); //nullish coleaishing
let comp;
comp = {
    name: "keshav",
    age: 20,
    city: {
        area: {
            locality: "indiranagara"
        }
    }
};
console.log((_b = (_a = comp === null || comp === void 0 ? void 0 : comp.city) === null || _a === void 0 ? void 0 : _a.area) === null || _b === void 0 ? void 0 : _b.locality); //optional Chaining
//Generics
const doMagic = (num) => {
    let random = Math.random() * 100;
    return num + random;
};
console.log(doMagic(2));
function doMagicGen(num) {
    let random = Math.random() * 100;
    console.log(num, random);
}
console.log(doMagicGen('2'));
function doMagics(ob) {
    console.log(ob.name, ob.age);
}
console.log(doMagics({ name: "Keshav", age: 20 }));
//class generics
class Stack {
    constructor() {
        this.nums = [];
    }
    Push(num) {
        this.nums.push(num);
    }
    isEmpty() {
        if (this.nums.length == 0) {
            return true;
        }
        return false;
    }
    Display() {
        console.log(this.nums);
    }
}
let new_stack_int = new Stack;
new_stack_int.Push(2);
new_stack_int.Push(3);
console.log(new_stack_int.Display());
let new_stack_string = new Stack;
new_stack_string.Push('18');
new_stack_string.Push('Keshav');
console.log(new_stack_string.Display());
//Decorators
//class , Property , Parameter Decorators
function classLogger(target) {
    console.log(target);
}
function propLogger(target, key) {
    console.log(`The key is ${key}`);
}
function ParamLogger(target, key, index) {
    console.log(`The Paramater is ${key} && index is ${index}`);
}
function MethodLogger(target, key) {
    console.log(`The key is ${key}`);
}
let Vscode = class Vscode {
    constructor(n) {
        this.n = n;
        this.name = n;
    }
    printName() {
        console.log(this.name);
    }
};
__decorate([
    propLogger
], Vscode.prototype, "name", void 0);
__decorate([
    MethodLogger
], Vscode.prototype, "printName", null);
Vscode = __decorate([
    classLogger
], Vscode);
let new_obje = new Vscode('Keshav');
///<reference path="dummy.ts">
console.log("Hello Weback done");
// console.log(_.shuffle([1,2,3,5]))
//# sourceMappingURL=app.js.map