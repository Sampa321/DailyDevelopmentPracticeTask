//MAP
//fILTER
//Find age who is voter
// age = [12,45,7,73,89,22,45,15]
// voter = age.filter((Element)=> Element>=18)
// console.log(voter);



//1.marks = []
//Find how many persons who have got 90% and above .
//Find how many has (for fail marks < 34)
//result  = [pass, fail,pass]  (array print)
marks = [23,67,90,46,99,89,11,30,22,45,7,94,56]
Result = marks.filter((number) => number>=90)
console.log(Result.length);

fail = marks.filter((number) => number<34)
console.log(fail.length);

r = []
check = marks.filter((number) => number<34 ? r.push("Fail") : r.push("Pass"));
console.log(r);


// output = []
// for(let i = 0;i<marks.length;i++)
// {
//     if(marks[i]<34)
//     {
//         output.push("Fail")
//     }
//     else{
//         output.push("Pass")
//     }
// }
// console.log(output);




//fruits = []
//return all fruits for which fruit.length >= 5(print array)
fruits = ["Apple","Mango","Banana","Watermelon","Pineapple","pear"]
arr = fruits.filter((fruit) => fruit.length>=5)
console.log(arr);



//sum of array element
arr = [1, 2, 4, 3,5,6,7]
result = arr.reduce((p,c) => p+c)
console.log(result);
