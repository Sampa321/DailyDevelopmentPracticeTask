//1. Booking,Payment, delivery together

/*let booking = new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve("Booking done");
    }, 3000);
})

let payment = new Promise((resolve, reject) =>{
    setTimeout(() => {
         resolve("Payment done");
    }, 2000);
})

let delivery = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Delivery done");
    }, 1000);
})

booking.then((res)=>{
    console.log(res);
    payment.then((res)=>{
        console.log(res);
        delivery.then((res)=>{
            console.log(res);
            
        })
    })
})*/



//2.
//Booking starts
//Wait for 3 sec
//Booking successfully

//Payment start
//Wait for 2 sec
//Payment successfully

//delivery start
//Wait for 1 sec
// Delivery successfully

function Booking()
{
    console.log("Booking start!!");
    let booking = new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve("Booking done");
    }, 3000);
    })
    return booking;
}

function Payment(){
    console.log("Payment start!!");
    let payment = new Promise((resolve, reject) =>{
    setTimeout(() => {
         resolve("Payment done");
    }, 2000);
    })
    return payment;
}

function Delivery(){
    console.log("Delivery start!!");
    let delivery = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Delivery done");
    }, 1000);
    })
    return delivery;
}


Booking().
then((res)=>{
    console.log(res);
    return Payment();
})
.then((res)=>{
    console.log(res);
    return Delivery();
})
.then((res)=>{
    console.log(res);
    
})