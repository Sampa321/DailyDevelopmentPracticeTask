//Example1
class student{
   name = "default";
    rollNo = 0;
    Dept = "default"
    static totalStudent = 0;
    constructor(obj={}){
        this.name = obj.name;
        this.rollNo = obj.rollNo;
        this.Dept = obj.Dept;
        student.totalStudent +=1;  //static belong to class not object
    }
    get stuName(){
        return this.name;
    }
    set stuName(n){
        this.name = n;
    }
    details(){
        console.log("Student Name : "+this.name);
        console.log("Student RollNo :"+this.rollNo);
        console.log("Studenr dept : "+this.Dept);
    }
}

let s1 = new student({name : "sampa", rollNo : 12, Dept : "B.tech in CSE"})
let s2 = new student({name : "sampa", rollNo : 12, Dept : "B.tech in CSE"})
let s3 = new student({name : "sampa", rollNo : 12, Dept : "B.tech in CSE"})
s1.details()
console.log(s1.name);

console.log(s1.stuName);
s1.stuName = "Mamon"
console.log(s1.stuName);

console.log("Total students : "+student.totalStudent);



//Example2
class Car{
    name ="default"
    seat = 2
    mode = "manual"
    location = "Kolkata"
    features = ["100km/hr", "bluetooth"]
    image = "https://imageofCar"
    static totalCars = 0
    constructor(obj = {}) {
        if(obj.name)  this.name = obj.name
        if (obj.seat) this.seat = obj.seat
        if (obj.mode) this.mode = obj.mode 
        if (obj.location) this.location = obj.location
        if (obj.image) this.image = obj.image
        Car.totalCars += 1
        
    }
    get carName() {
        return this.name 
    }
    set carName(n) {
        this.name = n
    }
    details() {
        console.log("car name : "+this.name)
        console.log("car seat : "+this.seat)
        console.log("car mode : "+this.mode) 
        console.log("car location : "+this.location)
    }

}

let car1 = new Car({ name: "BMW X5", mode: "manual", location: "Los Angeles", seat: 4 })

console.log(car1.carName)
car1.carName = "Mercedes"

console.log(car1.carName) 