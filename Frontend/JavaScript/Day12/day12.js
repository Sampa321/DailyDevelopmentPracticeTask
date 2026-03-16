//Method-Overloading, Method-overriding
//Method-Overloading not supports in python but Method-overriding supports in python
// class Animal{
//     eat()
//     {
//         console.log("Eating!!");
//     }
// }
// class Dog extends Animal{
//      eat()
//     {
//         console.log("Cat eating!!");
//     }
//     eat(n)
//     {
//         console.log("Cat eating "+n);
//     }
// }
// let d = new Dog();
// d.eat();
//d.eat("food")

  

/*
//try-catch- finally
try{
    console.log(10/0);  //automatically handle for logical error
    
}catch(e)
{
    console.log("Error occured !!");   
}finally{
    console.log("Execution executed");
}

//For error
try{
    throw new Error("Some error occured!!")  
    
}catch(e)
{
    console.log(e.message);   
}finally{
    console.log("Execution executed");
}



try{
    con.log("hello");
}catch(e){
    console.log("Erroe:"+e.message);
    
}finally{
    console.log("Executed!!");
    
}


//SetTimeout()

// console.log("Start");
// setTimeout(()=>{
//     console.log("Some func which will execute");  //Not 10s
// })
// console.log("End");

console.log("Start");
setTimeout(()=>{
    console.log("Some func which will execute 10s")},10000)
console.log("End");

*/
console.log(window)


console.log("Starting time : "+new Date());
setTimeout(()=>{
    console.log("Waiting for 5s");
    console.log("Finishing time : "+new Date());
},5000)
console.log("Ending time : "+new Date());





//setInterval

// setInterval(()=>{
//     console.log("Interval !!");
// },3000)

 
let x = 1;
let myInterval = setInterval(()=>{
    console.log("Interval ->"+x);
    x++;
    if(x == 5)
    {
        clearInterval(myInterval)
    }
},3000)