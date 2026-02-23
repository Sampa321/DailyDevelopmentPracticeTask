///////HOMEWORK
//1.Function for converting uppercase to lowercase.
function UpperToLower(str){
    return str.toLowerCase()
}
console.log("Lowercase String is : "+UpperToLower("HELLO WORLD"))


//2.Function to concatenate two strings.
function concateTwoString(str1,str2)
{
    console.log(str1+" "+str2);
}
concateTwoString("Hello","World")

//3.Function to find largest in array.
arr = [12,3,56,32,89,23]
function findLargest(arr)
{
    let max = 0
    for(let i = 0;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max = arr[i]
        }
    }
    console.log("Maximum value of array is :"+max);
}
findLargest(arr)



//4.Function to find average of an array.
function average(arr){
    let sum = 0
    for(let i = 0;i<arr.length;i++)
    {
        sum += arr[i]
    }
    console.log("Average : "+sum/arr.length);
    
}
average(arr)

//5.Function to find factorial.
function factorial(n){
    let fact = 1;
    for(let i=1;i<=n;i++)
    {
        fact *= i;
    }
    console.log("Factorial of "+n+" is : "+fact);
}
factorial(5)

//6.Function to generate random Number.
function randomNumber(){
    return Math.random()
}
console.log("Random Number is : "+randomNumber());
// function random(){
//     let r = Math.floor(Math.random()*10)
//     return r
// }
// console.log(random());  //3,4,5,9
 
// function random1(x,y){
//     let r = x + Math.floor(Math.random()*y)
//     return r
// }
// console.log("Random value :"+random1(100,1000));   // 100 -1000



//7.Write a function to print n fibonacci numbers.
console.log("Fibonacci series is : ");
function fibonacci(n)
{
    let a = 0
    let b = 1
    console.log(a);
    console.log(b);
    
    for(let i = 1 ;i < n; i++)
    {
        let c = a+b;
        a = b
        b = c
        console.log(c)
    }
}
fibonacci(5)


//8.Write a function to create short form. Apj Abdul kalam -> ADK
function shortName(str)
{
    string_arr = str.split(" ")
    ans = ""
    for(let  i = 0;i<string_arr.length;i++)
    {
        ans += string_arr[i][0]
    }
    console.log("Short form of "+str+" is : "+ans)
}
shortName("Abdul Pakir Janur Abdul Kalam")


//9.Add to matrix.
let matrix1 = [
                [1,2,3],
                [3,4,3],
                [1,2,3]
]
let matrix2 = [
                [1,2,3],
                [3,4,3],
                [1,2,3]
]
let sum = []
for(let i=0;i<matrix1.length;i++)
{
    for(let j = 0;j<matrix1[i].length;j++)
    {
        sum.push(matrix1[i][j] + matrix2[i][j])
    }
}
console.log(sum);


//10.Multiply two matrix.
matrix1 = [
            [1,2],
            [3,4]
]
matrix2 = [
            [1,2],
            [3,4]
]
sum = []
for(let i=0;i<matrix1.length;i++)
{
    sum[i] = []
    for(let j = 0;j<matrix1[i].length;j++)
    {
        sum[i][j] = 0
        for(let k = 0;k<matrix1[i].length;k++)
        {
           sum[i][j] += (matrix1[i][k] * matrix2[k][j])
        }
    }   
}
for(let i =  0;i<matrix1.length;i++)
{
    for(let j = 0;j<matrix1[i].length;j++)
    {
        console.log(sum[i][j]);
        
    }
}
