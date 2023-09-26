// Primitive  datatypes :- 

// string = "Demo"
// number = 2551  //float = 25.105
// boolean = True/false
// null  = standalone value (object)
// undefined = not assign value or string 
// symbol
// BigInt

// refereance type (Non primitive)

// Objects :- 
// example : 
/*
let myObj = {
     name: "shankar"
     age: 22,
 }

*/ 


// Array   => 
// const arry = ["shaknar","umesh","Mahesh"]

// functions :- 
/*
const myFunction = function () {
    console.log("hello world");
    
}
*/


// typeof operator Result 

// Type value :-   
// Null = "Object "
// Boolean = "boolean "
// Number = "Number "
// String = "String "
// Symbol = "symbol"
// function = "function" // object function
// Object (native or host does implement [[Call]]) = "function"
// Object (native and does not implement [[Call]]) = "object"
// Object (host and does implement [[Call]]) = "undefined","boolean","number","or String"


let name = "hello"
let age = 36
const isNum = 15.6;
let isLoggedIn = true;
const is = Symbol('123')
// const bigNumber = 1235434355454545n

// console.log(typeof "shankar");    // chack datatype


// anather examples of reference:

// stack (primitive data types) Heap (non-promitive datatype)

//================stack memory===========get copy of object==

let myYutubename = "shankar gavit "

let anotherName = myYutubename;

anotherName = "gavit shankar"

console.log(myYutubename);
console.log(anotherName);

//==========heap memory=============get reference 
let userOne = {
    email: "jmsgavit@gmail.com",
    upi: "shinkar@ypl"
}

let userTwo = userOne

userTwo.email = "jone@gmail.com"

console.log(userOne);
console.log(userTwo);