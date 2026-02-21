function greet(){
    console.log("Good evening!!");
}
//greet()

function isEven(x)
{
    let a = x%2 == 0
    return a
}
//console.log(isEven(3));


//Arrow function
var Bye = () =>{
    console.log("Good Bye ! Take Care ! See u soon !");
}
//Bye()


//*****without function name,we can call function call
const welcome = function(){ console.log("Hello")};
welcome();

//IIFE - Immediately Invoked Function Expression
//function arr = () => {console.log()} //Arrow function
( () =>{ console.log("IIFE")})()


//Spread Operator
X = "Virat Kohil";
console.log(...X);



