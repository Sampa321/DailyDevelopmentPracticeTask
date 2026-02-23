//a=prompt("Enter value of a: ")
switch(a)
{
    case 1:
        console.log("One")
        break
    case 2:
        console.log("Two")    
        break
    case 3:
        console.log("Three")    
        break
    default:
        console.log("Default")
}


//1.Find day based on number  1->monday ,2->tuesday
//day = prompt("Enter day : ")
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("WednesDay")
        break
    case 4: 
        console.log("Thursday")    
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log("Invalid day!!")        

}


//2.Basic calculator
a = 12
b = 4
option = 2
switch(option)
{
    case 1:
        console.log(a+b)
        break
    case 2:
        console.log(a-b)
        break
    case 3:
        console.log(a*b)
        break
    case 4:
        console.log(a/b)
        break
    case 5:
        console.log(a%b)
        break
    default:
        console.log("Invalid choice!!")               
}

//3.greeting(1->"Morning",2->"Afternoon",3->"Night")
greeting = 3
switch(greeting)
{
    case 1:
        console.log("Morning")
        break
    case 2:
        console.log("Afternoon")    
        break
    case 3:
        console.log("Night")
        break
    case 4:
        console.log("Evening")        
        break
    default:
        console.log("Invalid choice")
}

//4.stream("CSE"->"WELCOME TO CSE!","ECE"->"WELCOME TO ECE!","Wrong value")
stream = prompt("Enter stream :")
switch(stream)
{
    case "CSE":
        console.log("WELCOME TO CSE !!")
        break
    case "ECE":
        console.log("WELCOME To ECE !!")
        break
    case "MCE":
        console.log("WELCOME To ME !!")    
        break
    case "CE":
        console.log("WELCOME To CE !!") 
        break
    default:
        console.log("Invalid stream choice !!")    
}
//if-else grade system
//if-else courseexpenditure (course -> javascript(3000) , java(4000) , c++(3000))