/*
=============== Double Base Palindrome Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      Don't worry about capitalization.
*/

/*
Question 1
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/
const doubleBasePalindromeSum = function (/* base1, base2, upperLimit */) {
      let sum = 0
      //palindrome check function
      const checkPalindrome = (string) => {
            const length = string.length
            for (let i = 0; i < length / 2; i++) {
                  if (string[i] != string[length - 1 - i]) {
                        return false
                  }
            } return true
      }

      //take all numbers between 0 and upper limit and only check odd, since we are only checking base 10 and base 2
      for (let i = 1; i < upperLimit; i++) {
            num = i
            if (i / 2 !== 0) {
                  let number = i.toString()
                  if (checkPalindrome(number)) {
                        //convert number to binary
                        //convert back to int
                        const int = parseInt(number)
                        //convert to string with radix of 2
                        const binary = int.toString(2)
                        if (checkPalindrome(binary)) {

                              sum += i
                        }
                  }


            }
      }
      //check for palindrome of base 10 odd number and then if that is a palinedrom, convert to base 2 and check again. if so, add to the sum
      return sum


}




// DO NOT MODIFY
module.exports = {
      doubleBasePalindromeSum,
}