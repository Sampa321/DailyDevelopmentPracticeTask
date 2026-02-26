//Ascending order of an array
let arr = [12,45,4,687,34,23]
arr.sort((a,b)=>a-b)
console.log(arr);

//leader of an array
const arr1 = [12,47,22,11,7,9];
let max = arr1[arr1.length - 1]
const output = [arr1[arr1.length - 1]]
for(let i= arr1.length -2;i >= 0;i--)
{
    if(arr[i] >= max)
    {
        output.push(arr1[i])
        max = arr1[i]
    }
}
console.log(output);



//Map method
// const nums = [1,2,3,4,5,6,7,8,9]
// sq = []
// for(let i of nums)
// {
//     sq.push(i*i)
// }
// console.log(sq);
// //OR,
// const result = nums.map((x) => x*x)
// console.log(result);
// //OR,
// function square(x){
//     return x*x
// }
// const res = nums.map(square)
// console.log(res);


//Find the length of fruit using map method
// const fruit = ["apple","banana","watermelon","mango"]
// const flength = []
// for(let i of fruit)
// {
//     flength.push(i.length)
// }
// console.log(flength);
// //OR,
// const result = fruit.map((x) => x.length)
// console.log(result);
// //OR,
// function length(x){
//     return x.length
//  }
// const res = fruit.map(length)
// console.log(res);



const name = "virat kohli!"
console.log(`Hello ${name}`);

//Date object
let date = new Date()
console.log(date);
console.log(date.toLocaleDateString());


let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()

console.log("Year : "+year);
console.log("Month : "+(month+1));
console.log("Day : "+(day+1));

const p = date.toLocaleDateString().split("/")  //26/2/2026
console.log("Year : "+p[2]);
console.log("Month : "+p[1]);
console.log("Day : "+p[0]);


if(p[0].length <2) p[0] = "0"+p[0]
if(p[1].length <2) p[1] = "0"+p[1]

const indian = p[1]+"-"+p[0]+"-"+p[2]
console.log("Day in our standard :"+indian);


Date  = new Date(0)
console.log(Date); //starting time of computer
