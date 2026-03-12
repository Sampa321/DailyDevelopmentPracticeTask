//1.Give an Array arr = [1,2,3,4,5,6] , 
// func check even or odd and print arr[i] is even/odd 
// using forEach Loop
arr = [12,21,35,43,56,6]
function checkEvenOdd(arr){
    if(arr%2 == 0)
    {
        console.log(arr + " is even");
    }
    else{
        console.log(arr + " is odd");
    }
}
arr.forEach(checkEvenOdd)


//2.arr = ["apple","mango"]
//Function to print length -  apple length is 5
//use forEach loop for that
arr = ["apple","mango"]
function printLength(arr)
{
    console.log(arr+" length is : "+arr.length);
    
}
arr.forEach(printLength)



//3.arr= [23,45,67,893,342]
//narr = []
//All value more than 100 add them to narr
//print narr
arr = [23,45,67,893,342,234,667]
narr =  []
//using forEach Loop
/*function greaterThan100(arr){
    if(arr>100)
    {
        narr.push(arr)
    }
    console.log(narr);
}
arr.forEach(greaterThan100)*/
//Using For Loop
function check(arr){
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i]>100)
        {
            narr.push(arr[i])
        }
    }
}
check(arr)
console.log("Element of greater than 100 is : "+narr);

 
//4.Sort an array using Insertion Sort and bubble sort.
//Bubble sort
arr1 = [12,35,79,3,45,2,9,56,233,23]
console.log("Before sorting, Array is : "+arr1);
for(let i = 0;i<arr1.length;i++)
{
    for(let j = i+1; j<arr1.length; j++)
    {
        if(arr1[i] > arr1[j])
        {
            temp  = arr1[i]
            arr1[i] = arr1[j]
            arr1[j] = temp  
        }
    }
}
console.log("After sorting, Array is : "+arr1);
//Insertion Sort
arr1 = [12,35,79,3,45,2,9,56,233,23]
console.log("Before sorting, Array is : "+arr1);
for(let i = 1;i<arr1.length;i++)
{
    temp = arr1[i]
    j = i-1
    while(j >= 0 && temp < arr1[j])
    {
        arr1[j+1] = arr1[j]
        arr1[j] = temp
        j--
    }
}
console.log("After sorting, Array is : "+arr1);