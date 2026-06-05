const post = new Promise((resolve, reject)=>{
    let photo = true;
    let video = true;
    if(photo || video)
    {
        resolve("Post Successfully!!")
    }
    else{
        reject("First create photo or video content!!")
    }
})

post.then(function(result){
    console.log(result);
}).catch(function(err)
{
    console.log(err);
    
})