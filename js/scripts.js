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
