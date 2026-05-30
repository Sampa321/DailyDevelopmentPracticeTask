 

let users = [{
    name : "Sampa",
    password : "123"
},
{
    name : "Arpita",
    password : "1235"
},
{
    name : "Rudra",
    password : "1243"
},
{
    name : "Virat",
    password : "1223"
}]

let name = "Sampsa";
let password = "1233";
Login(name,password).then(function(message)
{
    console.log(message);
}).catch(function(message){
    console.log(message);
})

function Login(name,password)
{
    return new Promise(function(resolve, reject)
    {
        let user = users.find(p => p.name == name)
        if(user)
        {
            if(user.password == password)
            {
                resolve("Login succesfully "+ name);
                
            }
            else{
                reject("Wrong password!!");
            }
        }
        reject("User not available!!");
    })
}