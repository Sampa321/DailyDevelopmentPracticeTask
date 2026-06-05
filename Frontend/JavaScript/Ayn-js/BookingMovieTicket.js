const bookingTicket = new Promise(function(resolve, reject)
{
    let ticketAvailable = false;
    if(ticketAvailable)
    {
         resolve("Congratulations🎉,Ticket Booking successfully!!😊")
    }
    else{
        reject("Sorry!! Ticket is not available!!😢")
    }
})
bookingTicket.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
})