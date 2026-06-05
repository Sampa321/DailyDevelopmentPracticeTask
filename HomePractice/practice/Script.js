// class student {
//     name = "default";
//     rollNo = 0;
//     Dept = "Default";
//     static total = 0;
//     constructor(obj ={})
//     {
//         this.name = obj.name;
//         this.rollNo = obj.rollNo;
//         this.Dept = obj.Dept;
//         student.total += 1;
//     }
//     get studentName(){ return this.name;}
//     set studentName(n) 
//     {
//         this.name = n;
//     }
//     details(){
//         console.log(this.name);
//         console.log(this.rollNo);
//         console.log(this.Dept);
//     }
// }
// let s1 = new student({name : "sampa", rollNo : 90, Dept : "B. Tech in cse"})
// let s2 = new student({name : "sampa", rollNo : 90, Dept : "B. Tech in cse"})
// let s3 = new student({name : "sampa", rollNo : 90, Dept : "B. Tech in cse"})
// s1.details() 
// // s1.name = "Mamon";
// // s1.studentName("hello")
// console.log(s1.studentName);
// console.log(student.total);









class car{
    name = "default";
    seat = 2;
    mode = "manual";
    location = "Kolkata"
    static totalCars = 0;
    constructor(obj = {})
    {
        if(obj.name) this.name = obj.name;
        if(obj.seat) this.seat = obj.seat;
        if(obj.mode) this.mode = obj.mode;
        if(obj.location) this.location = obj.location;
        this.totalCars += 1;
    }

    get carName(){ return this.name;}
    set carNameSet(name)
    {
         this.this.name = name;
    }

    details(){
        console.log(this.name);
        console.log(this.seat);
        console.log(this.mode);
        console.log(this.location);
        console.log(this.totalCars);
        
    }
}
let car1 = new car({name : "abc", seat : 4, mode : "manual", location : "Kolkata"})
console.log(car1.carName);
car1.name = "oss";
console.log(car1.carName);
