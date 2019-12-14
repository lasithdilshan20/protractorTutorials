//Type script is converted to js
//tsc - compile
//run the js file node ***.js



const a = "I am a String";
//Number can not be assigned to me
//a=5

let b = "I am also a string"
//Number can not be assigned to me
//b=5

//Varibale types
let c:string = "String";
let d:number = 5;
let flag:boolean = true;
let list: Array<number> = [1,2,3,5];
let listString: Array<string> = ["apple","orange"];
let listAny: Array<any> = ["apple",2,"cal",true];

console.log(c);


function  add(a:number,b:number):number{
    return a+b;
}

console.log(add(3,5));

