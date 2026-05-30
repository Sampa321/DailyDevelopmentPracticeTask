let amount = 12233;
Transactions(amount).then(function(message)
{
    console.log(message);
}).catch(function(message){
    console.log(message);
    
})

function Transactions(amt){
    return new Promise(function(resolve, reject)
    {
        if(amt < 0)
        {
            reject("Amount not be negative");
        }
        if(amt > 1000000)
        {
            reject("Invalid amount");
        } 
        resolve("Transaction completed of "+amt+"$")
    })
}