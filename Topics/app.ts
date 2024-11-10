// import * as _ from "lodash"

console.log("Hello World");
let num1 = document.getElementById("numberone") as HTMLInputElement;
let num2 = document.getElementById("numbertwo") as HTMLInputElement;
let btn = document.getElementById("btn") as HTMLButtonElement;

let addition = (num1: number, num2: number) => {
  return num1 + num2;
};

btn.addEventListener("click", () => {
  console.log(addition(Number(num1.value), Number(num2.value)));
});

//Numbers,Strings,Booleans in TS
const doAddition = (
  num1: number,
  num2: number,
  phrase: string,
  condition: boolean
) => {
  let res = num1 + num2;
  if (condition) {
    console.log(phrase + res);
  } else {
    console.log(phrase + 0);
  }
};

doAddition(2, 3, "the results is: ", false);
doAddition(2, 3, "the results is: ", true);

//Type Assignment Explicit
let num: number;
num = 2;
// num='2' will give an error
console.log(num);

let success: boolean;
success = true;
console.log(success);

//objects in TS

let personone: {
  name: string;
  age: number;
} = {
  name: "Keshav",
  age: 20,
};

let persontwo: {
  //nested object
  name: string;
  age: number;
  techstack: string[];
  place: {
    city: string;
  };
} = {
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

let numbers: number[] = [];
numbers.push(1);
numbers.push(3);
console.log(numbers, numbers.length, numbers.includes(2));
// numbers.push('4') will give an error

//Tuples in JS

let new_result: [string, number];
new_result = ["Keshav", 20];
console.log(new_result);
let [names, age] = new_result;
console.log(names, age);
let new_arrs: [string, string] = ["Keshav", "Poojary"];
console.log(new_arrs);

//enums in TS
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const printResult = (num: number) => {
  if (num == 0 || num == 6) {
    console.log("Its a Weekend");
  }
};
num = Day.Saturday;
printResult(num);

//any && union type && type aliasing

let an_array: any[] = [];
an_array.push(1);
an_array.push("2");
console.log(an_array);

type StringorNum = string | number;
let doAdd = (num1: number | string, num2: StringorNum) => {
  console.log(typeof num1, typeof num2);
};
doAdd(2, 3);
doAdd("4", "5");

type objStructure = { name: string; age: number };

let person: objStructure;

person = {
  name: "Keshav",
  age: 20,
};
console.log(person.name, person.age);

//returns

function doOp(num1: number, num2: number): number {
  //returning number
  return num1 + num2;
}
console.log(doOp(1, 2));

function dontOp(num1: number, num2: number): void {
  console.log(num1, num2);
}
dontOp(2, 3);

//function types && its specific signature

let doNothing: Function;

doNothing = () => {
  console.log("Hello World!");
};
doNothing();

let doSomething: (num: number) => number;

doSomething = (num) => {
  return Math.pow(num, 2);
};

console.log(doSomething(2));


//classes

class Student{
    name:string
    age:number
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }

    speak(){
        console.log(`My Name is ${this.name} && my age is ${this.age}`)

    }
}

let studentone=new Student('Keshav',20)
console.log(studentone.speak())


//public,private,readonly

class Animal{
    public name:string
    private age :number
    readonly area:string
    constructor(n:string,a:number,ar:string){
        this.name=n;
        this.age=a;
        this.area=ar;
    }

    getAge(){
        console.log( `My name is ${this.name} and age is ${this.age}`)
    }

    // updateArea(){
    //     this.area="Banglore";  ->>> will throw and erro
    // }
}

let dog=new Animal('bruno',20,'indiranagara')
console.log(dog.getAge())
//console.log(dog.age) get a error



//shorthand Initilization

class FunDiscovery{
    constructor(public n:string,public a:number){
        this.n=n;
        this.a=a;
    }
    speak(){
        console.log(this.n,this.a)
    }
}

let new_fun=new FunDiscovery('keshav',10)
console.log(new_fun.speak())


//Inheritance

class Electronic{
    name:string
    price:number
    constructor(n:string,p:number){
        this.name=n;
        this.price=p;
    }
    speak(){
        console.log(`The name is ${this.name} && price is ${this.price}`)
    }
}

class Laptop extends Electronic{
    constructor(n:string,p:number,public osmodel?:string){
        super(n,p);
        super.speak()
        console.log(`The os Model is ${osmodel}`)
    }
}

let macbook=new Laptop('macbook_pro',40000000,'Mac')


//protected in TS

class Head{
    protected num:number
    constructor(n:number){
        this.num=n;
    }
    printNum(){
        console.log(this.num)
    }
}

class Tail extends Head{
    printnuMBER(){
        console.log(this.num)
    }
}

let number_one=new Head(3);
console.log(number_one.printNum())
let new_obj=new Tail(4);
new_obj.printNum();
// console.log(number_one.num) will give a eroror'



//interfaces in TS


interface Person{
  name:string,
  age:number,
  hand:boolean,
  leg:boolean,
  speak():void;
  getAge():number;
  getName():string;
}

let user_one:Person;

user_one={
  name:"Keshav",
  age:20,
  hand:true,
  leg:true,
  speak(){
    console.log(`'Iam ${this.name} and iam ${this.age} years old`)
  },
  getAge() {
    return this.age;
  },
  getName() {
    return this.name;
  },
}

console.log('Hi my name is ', user_one.getName())

//interfaces with classes

interface Greeter{
  readonly name:string;
  greet():void;
}


class intern implements Greeter{
    name:string;
    constructor(n:string){
      this.name=n;
    }
    greet(){
      console.log(`My Name is ${this.name}`)
    }
}

let intern_one:Greeter;

intern_one=new intern('Keshav')
console.log(intern_one.greet())
//intern_one.name="King"  error



//extending interfaces

interface student{
  name:string
}

interface interns extends student{
  greet():void;
}

let kesh:interns;
kesh={
  name:"Keshav",
  greet(){
    console.log(this.name)
  }
}

kesh.greet()


//Type aliasing

type NumberorString=number|string;

let nump:NumberorString='2';
console.log(nump)

type match={
  name:string;
}

type cricketer={
  role:string,
}

type player = match & cricketer;

let player_one:player;

player_one={
  name:"Virat Kohli",
  role:"Batsman"
}

console.log(player_one)


//type guards --typeof,instanceof,userdefined


let numbers_one:NumberorString=1;
numbers_one=1;

const printSomething=(num:number|string)=>{
  if(typeof num === "string"){ //type of guards
      console.log(num)
  }
}
printSomething('4')


//function overloads

function doGreeting(name:string):void;
function doGreeting(name:string,age:number):void;

function doGreeting(name:string,age?:number){
  if(age){
    console.log(`My name is ${name} && age is ${age}`);
  }else{
    console.log(`My name is ${name}`)
  }
}

doGreeting('Keshav',20)
doGreeting('Keshav')


//optional Chainning && nullish coelishing in TS

interface compu{
  name:string,
  age:number,
  city:{
    area:{
      locality:string,
    }
  }
}


let users=null;
let default_user='guest'

console.log(users??default_user)  //nullish coleaishing


let comp:compu;
 comp={
  name:"keshav",
  age:20,
  city:{
    area:{
      locality:"indiranagara"
    }
  }
}

console.log(comp?.city?.area?.locality) //optional Chaining

//Generics

const doMagic=(num:number)=>{
  let random=Math.random()*100;
   return num+random;
}

console.log(doMagic(2))


function doMagicGen<T>(num:T){
  let random=Math.random()*100;
  console.log(num,random)
}

console.log(doMagicGen('2'))


function doMagics<T extends {name:string,age:number}>(ob:T){
  console.log(ob.name,ob.age)
}

console.log(doMagics({name:"Keshav",age:20}))


//class generics
class Stack<T>{
   public nums:T[]=[];
   
   Push(num:T){
         this.nums.push(num);
   }

  
   isEmpty(){
    if(this.nums.length==0){
      return true;
    }
    return false;
   }  

   Display(){
    console.log(this.nums)
   }
}

let new_stack_int=new Stack<number>;
new_stack_int.Push(2);
new_stack_int.Push(3);

console.log(new_stack_int.Display())

let new_stack_string=new Stack<string>;
new_stack_string.Push('18')

new_stack_string.Push('Keshav')
console.log(new_stack_string.Display())



//Decorators

//class , Property , Parameter Decorators

function classLogger(target:Function){
  console.log(target);
}

function propLogger(target:any,key:string){
  console.log( `The key is ${key}`);
}

function ParamLogger(target:any,key:string,index:number){
  console.log(`The Paramater is ${key} && index is ${index}`)
}

function MethodLogger(target:any,key:string){
  console.log( `The key is ${key}`);
}



@classLogger
class Vscode{
  @propLogger
  name:string

  constructor(  private n:string){
    this.name=n;
  }
  @MethodLogger
  printName(){
   console.log(this.name)
  }
}

let new_obje=new Vscode('Keshav')


///<reference path="dummy.ts">
console.log("Hello Weback done")


// console.log(_.shuffle([1,2,3,5]))