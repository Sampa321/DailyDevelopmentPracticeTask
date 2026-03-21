// Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

// Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1
// Explanation: Since, 1 is present more than 7/2 times, so it is the majority element.
// Input: arr[] = [7]
// Output: 7
// Explanation: Since, 7 is single element and present more than 1/2 times, so it is the majority element.
// Input: arr[] = [2, 13]
// Output: -1
// Explanation: Since, no element is present more than 2/2 times, so there is no majority element.

class MajorityElement{
majorityElement(arr) {
        //code here
        let value = (arr.length/2);
        let c = 0
        let ele = arr[0];
        for(let i = 0;i<arr.length;i++)
        {
           if(c == 0)
           {
               ele = arr[i];
               c++;
           }
           else if(ele == arr[i])
           {
               c++;
           }
           else
           {
               c--;
           }
        }
        c = 0;
        for(let i = 0;i<arr.length;i++)
        {
            if(ele == arr[i])
            {
                c++;
            }
        }
        if(c>value)
        {
            return ele;
        }
        return -1;
    }
}


let obj = new MajorityElement();
console.log("Majority element is : "+obj.majorityElement([2, 13]));
