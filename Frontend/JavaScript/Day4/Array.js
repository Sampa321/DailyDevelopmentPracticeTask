// let arr = [1,2,3,5,6,8]
// console.log(arr)


//  let arr = [12,78]
// arr.push(23)  //push or insert at the end
// console.log(arr)
// console.log(arr.pop())  // delete last element you insert(stack)
 

//making an array of even number
// let arr = []
// for(let i = 2 ;i <=20;i += 2)
// {
//     arr.push(i)
// }
// console.log(arr)


// //Making array of fibonacci numbers
// arr = [] 
// a = 0
// b = 1
// arr.push(a)
// arr.push(b)
// for(let i=1;i<=10;i++)
// {
//     c = a+b
//     arr.push(c)
//     a = b
//     b = c
// }
// console.log(arr);


//ADD first 20 palindrome number in array
palindrome_arr = []
let count = 0;
let start = 1;
let actual = start;
while(count <= 20)
{
    let rev = 0
    start = actual;
    while(start > 0)
    {
        rev = rev*10 + start%10
        start/=10
        start = parseInt(start)
    }
    if(actual == rev)
    {
        palindrome_arr.push(actual);
        count++;
    }
    actual++;
}
console.log(palindrome_arr);

 
 

//Add all leap year between 2000 - 2200
leapYear_arr = []
for(let i=2000;i<=2200;i++)
{
   if((i%4 == 0 && i%100 != 0) || (i%400 == 0))
    {
        leapYear_arr.push(i)
    }
}
console.log(leapYear_arr);



let x = [1,2,3,4,5]
x.shift()  //will pop the first element
x.unshift(166)   //will add something to the first position
console.log(x);
console.log("Array length : "+x.length);   //5


//Reverse the array without inbuild function
let y = [1,2,3,4,5]
rev_arr = []
for(let i = y.length-1;i >= 0;i--)
{
  rev_arr.push(y[i])
}
console.log("Reverse array is :");
console.log(rev_arr);

//Reverse the array using inbuild function
y = [1,2,3,4,5]
let rev = y.reverse()   //original array will be reverse
console.log(rev);
 

//[23,11,46,67,33,66] => index of 46 =2  without inbuild function
arr = [23,11,46,67,33,66]
for(let i=0;i<arr.length;i++)
{
    if(arr[i] == 46)
    {
        console.log("Index of  46 is "+i);
        break
    }
}

//[23,11,46,67,33,66] => index of 46 =2  using inbuild function
let idx = arr.indexOf(46)
console.log("Index of 46 is :"+idx)



//Calculate average of the array
y =[1,2,3,4,5,6,7,8,9,10]
sum = 0
for(let i = 0;i<y.length;i++)
{
    sum += y[i]
}
console.log("Sum of the array is : "+sum);
console.log("Average of the array is : "+(sum/y.length));




let arr1 = [11,22,3,4,55,66,77,33]
console.log(...arr1);
console.log("Maximum value of arr is: "+Math.max(...arr1));


// //ForEach Loop
// function converter(str){
//     console.log(str.toUpperCase());
    
// }
// arr = ["rudra","sampa","arpita"]
// arr.forEach(converter) 
// console.log(arr)
