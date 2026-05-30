//Whenever the code is executed line by line  - we call it sync
//Whenever the code is executed not line by line  - we call it async

//code segment -> which is performing some type of input output operations then we can't gurrantee the time of completion of the code segment.
//  It can be 2ms or 200s. Here we use async operations for better execution of js.

//promise -> promise is an object representiong eventual completion or failure of an async operation


/*console.log("Hello");  // sync
setInterval(()=>{
    console.log("asyn code");   //async
},0);
console.log("Bye");   //sync*/

// output is : Hello -> Bye -> asyn code


//resolve will be called if promise is successful
//reject will be called if promise gets fails

const p1 = new Promise(function(resolve,reject)
{
    arr = [12,34,11]
    // setTimeout(() =>{
    //     resolve(arr);

    // },4000)
    setTimeout(() =>{
        reject(new Error("Some error occured!"));
    },4000)
})
//if  resolve the then 
p1.then(function(output)
{
    console.log(output);
}).catch(function(err)
{
    console.log(err.message);
})