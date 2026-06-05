const msg = new Promise((resolve, reject)=>{
    let content = "My name is Sampa Nayak";
    if(content.length == 0)
    {
        reject("Content is not available!!")
    }
    else{
        resolve("Message sent successfully!!")
    }
})

msg.then(function(result)
{
    console.log(result);
}).catch(function(err)
{
    console.log(err);
})