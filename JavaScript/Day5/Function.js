function greet(){
    console.log("Good evening !!");
    
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



//IIFE - Immediately Invoked Function Expression
//*****without function name,we can call function call
const welcome = function(){ console.log("Hello");};
//welcome()


//function arr = () => {console.log()} //Arrow function
( () =>{ console.log("IIFE")})()


//Spread Operator
X = "Virat Kohil";
console.log(...X);

let arr1 = [11,22,3,4,55,66,77,33]
console.log(...arr1);
console.log("Maximum value of arr is: "+Math.max(...arr1));

