//1.Print reverse string
let str = "Hello World"
let ans = ""
// for(let i=0;i<str.length;i++)
// {
//     ans = str[i] +ans
// }
for(let i = str.length-1;i>=0;i--)
{
    ans += str[i]
}
console.log("Original String is "+str)
console.log("Reverse string is "+ans)


//2.Count vowels and consonents without space string
let strin = "watermelon"
let vowelCount = 0
for(let i=0;i<strin.length;i++){
    char =  strin[i]
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
    {
        vowelCount++
        console.log(char)
    }
}
console.log("String is : "+strin);
console.log("No of vowel from string : "+vowelCount)
console.log("No of consonents from string : "+(strin.length-vowelCount))


//3.String  ="Abdul pakir Janur Abdul Kalam"
String  ="Abdul Pakir Janur Abdul Kalam"
String_arr = String.split(" ")
ans = ""
for(let i=0;i<String_arr.length;i++)
{
    ans += String_arr[i][0]
}
console.log(ans);
