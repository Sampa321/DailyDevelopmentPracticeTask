class Animal{
    color = "black";
    food = "grass";
    constructor(c,f)
    {
        this.color = c;
        this.food = f;
    }
    eat(){
        console.log("Animal is eating !!");
    }
    sleep(){
        console.log("Animal is sleeping!!");
    }
}
class Bird{
    fly(){
        console.log("Bird is flying !!");
    }
}

class Lion extends Animal{
    constructor(color,food)
    {
        super(color,food)
    }
    roar(){
        console.log("Lion is roaring !!");
    }
    hunt(){
        console.log("Lion is hunting !!");
        
    }
}

let l1 = new Lion("brown","flesh")
l1.eat();
l1.hunt();
console.log(l1.color);
//l1.fly()   //error
