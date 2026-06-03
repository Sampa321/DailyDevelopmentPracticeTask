// Promise.all(input - array of promises) -> Parallely promise execute and return result
// If all promises successfully -> then return output array
// If one of them fails -> return the error (not an array)

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p1");
    }, 3000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("p2 error");
    }, 2000);
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p3");
    }, 4000);
})


/*Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
}) 
.catch((err)=>{
    console.log(err);
})

//op = [p1,p2,p3]  time taken : 4s because that is parallel executed






// Promise.allSettled() -> similar to Promise.all()
// Just if one of the promises got rejected, still it returns an array containing the outputs of all Promises
/*Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
}) 
.catch((err)=>{
    console.log(err);
})*/





//Promise.race() -> returns the first promise which is settled
Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
}) 
.catch((err)=>{
    console.log(err);
})



// Promise.any() -> It will return the first promise which will be resolved.
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
}) 
.catch((err)=>{
    console.log(err);
})