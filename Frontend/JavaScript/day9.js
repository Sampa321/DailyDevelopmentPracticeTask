var tiger = {
    name : "Royel Bengal Tiger",
    address : "Jungle",
    gender : "Male",
    color : "Yellow",
    food : function(x)  //Without function name
    {
        console.log("The food of the tiger is :"+x);
        
    }
}
tiger.food("Chicken")
//console.log(tiger);



var school = {
    name : "abc",
    student : 68,
    teacher : 10,
    address : "kolkata",
    color : "white",
    study : function(){  //Without function name
        console.log("Many student studies in school");
        
    }
}
school.study();
//console.log(school);


var crow = {
    name : "pqr",
    color : "Black",
    address : ()=>{  //Arrow function
        console.log("Crow stay in the world!!");
        
    }
}
crow.address()
//console.log(crow);
