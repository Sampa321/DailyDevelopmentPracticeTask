// //for loop
// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }
//  //while loop
// let n=10;
// while(n>0)
// {
//     console.log("While loop iteration : "+n)
//     n--;
// }

// //do-while Loop
// n=10
// do{
//     console.log("Hello")
//     n--
// }while(n>0)


// //Table
// //let x = prompt("Enter the number : ")
// // for(let i = 1;i<=10;i++)
// // {
// //     console.log(x+" X "+i+" = "+x*i)
// // }


// console.log(Math.round(9.75))  //10
// console.log(Math.round(9.15))  //9

// console.log(Math.floor(9.75))  //9

// console.log(Math.ceil(9.05))  //10
// console.log(Math.ceil(1.000))  //2
// console.log(Math.ceil(1))  //1


// console.log(Math.pow(2,3))  //8
// console.log(Math.sqrt(121))  //11

// console.log(Math.max(2,5,23,8,6))  //23
// console.log(Math.min(2,5,23,8,6))  //2

// console.log(Math.random())  //0.0677



num = 63
let guessNumber
do{
    guessNumber = prompt("Enter the guess Number : ")
    if(guessNumber<num)
    {
        alert("please give greater than number of "+guessNumber)
    }
    else if(guessNumber>num)
    {
        alert("please give less than number of "+guessNumber)
    }
    else{
        alert("Congratulations! you choose the correct number")
    }
}
while(num!=guessNumber)