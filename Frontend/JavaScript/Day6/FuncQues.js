//1.Write a function which will check if a number is strong or not .
let n = 145; 
function checkStrong(n)
{
    let temp = n;
    let sum = 0;
    while(temp != 0)
    {
        let fact = 1; 
        let r = temp%10;
        for(let i = 1;i<=r;i++)
        {
            fact *= i;
            
        }
        sum += fact;
        temp = Math.floor(temp/10);
    }
    if(sum == n)
    {
        console.log(n+" is Strong Number");
    }
    else{
        console.log(n+" is not Strong Number");
    }
}

checkStrong(n);


//2.Write a function which will calculate number of digits of a number
number = 11235 ;
function countNumber(x)
{
    let c = 0;
    while(x != 0)
    {
        c = c+1 ;
        x = Math.floor(x/10);
    }
    return c;
}
console.log("The digit of the "+number+" is :"+countNumber(number));

//3.Write a function which will convert a number to binary 
//4.Write a function which will return the unique elements in array[Hard]
arr = [12,45,7,533,2,3,12,46,7,2]
arr.sort()
console.log("Unique element is : ");

function uniqueEle(arr)
{
    if(arr[0] != arr[1])
    {
        console.log(arr[0]);
        
    }
    for(let i = 1;i<arr.length;i++)
    {
        if(arr[i-1] != arr[i])
        {
            console.log(arr[i]);
            
        }
    }
}
uniqueEle(arr)

//5.Write a function which will return all leaders in an array [Medium] Means all the number present to right will be lower than that number 
//Example - [12,47,22,11,7,9] here leaders = 9,11,22,47
arr = [12,47,22,11,7,9]
 console.log("All leaders in an array is : ");

function leaders(arr)
{
    console.log(arr[arr.length-1]);
    for(let i = arr.length-2;i>=0;i--)
    {
        for(let j = i+1;j<arr.length;j++)
        {
            if(arr[j]>arr[i])
            {
                console.log(arr[i]);
                break;
            }
        }
        break;
    }
   
}
//leaders(arr)