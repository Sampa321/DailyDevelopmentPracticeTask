// async is a keyword which is used before a function.
// async function - is a function which returns a promise
//await keyword used for waiting the resolve promise. It can only be used inside an async function
//await keyword stops the execution of the async function upto when the promise is not settled.
function order(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Order done")
        }, 3000);
    })
}

function Payment()
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Payment successful")
        }, 3000);
    })
}

//For async, not needs then. use try-catch
async function Hello(){
    try{
        console.log("Hi");
        const abc = await order(); //if we don not use await then show pending promise because cannot wait for promise resolve
        console.log(abc);
        const def = await Payment();
        console.log(def);
        console.log("Bye");
    }catch(err){
        console.log(err);
    }
}
Hello();

// console.log(await Hello())  //error because it is not asyncronous func



//Output :-
//Hi
//wait for 3 sec
//Order done
//wait for 3 sec
//Payment successful
//Bye