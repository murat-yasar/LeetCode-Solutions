//* 9. Palindrome Number
//* Given an integer x, return true if x is a palindrome, and false otherwise.
/** 
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    let num = x.toString().split('');
    for(let i=0; i<num.length/2; i++)
        if (num[i] != num[num.length-1-i]) return false;
};

// TEST CASES
isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);