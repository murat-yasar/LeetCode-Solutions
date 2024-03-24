//* 1. Two Sum
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target){
                console.log([i,j]);
                return [i,j];
            }
        }
    }
};
// TEST CASES
console.log("1. Two Sum");
twoSum([2,7,11,15], 9); // Output: [0,1]
twoSum([3,2,4], 6);     // Output: [1,2]
twoSum([3,3], 6);       // Output: [0,1]


----------------------------------------------------------------------------------------------------

//* 9. Palindrome Number
/** 
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    let num = x.toString().split('');
    
    for(let i=0; i<num.length/2; i++)
        if (num[i] != num[num.length-1-i]){
            console.log(false);
            return false;
        }

    console.log(true);
    return true;
};
// TEST CASES
console.log("9. Palindrome Number");
isPalindrome(121);  // Output: true
isPalindrome(-121); // Output: false
isPalindrome(10);   // Output: false


----------------------------------------------------------------------------------------------------

//* 13. Roman to Integer
/** 
 * M=1000, D=500, C=100, L=50, X=10, V=5, I=1
 * Given a roman numeral, convert it to an integer.
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(str) {
    let result = 0, intArr = [];

    for (let i in str){
      switch (str[i]) {
        case "M": intArr.push(1000);  break;
        case "D": intArr.push(500);   break;
        case "C": intArr.push(100);   break;
        case "L": intArr.push(50);    break;
        case "X": intArr.push(10);    break;
        case "V": intArr.push(5);     break;
        case "I": intArr.push(1);     break;
      }
    }

    intArr.push(0); // To fix the problem of checking the last character
    for (let i=0; i<intArr.length; i++){
      (intArr[i] >= intArr[i+1]) ? result += intArr[i] : result -= intArr[i];
    }

    return result;
};

// TEST CASES
console.log("13. Roman to Integer");
romanToInt("III");      // Output: 3
romanToInt("LVIII");    // Output: 58
romanToInt("MCMXCIV");  // Output: 1994


----------------------------------------------------------------------------------------------------

