/*
Q1] Factorial Calculation
Write a function to calculate the factorial of a number n.
Example: factorial(5) => 120
Hint: 1! = 1, 0! = 1.

fact(5) => 5 * fact(4)
fact(4) => 4 * fact(3)
fact(3) => 3 * fact(2)
fact(2) => 2 * fact(1)
fact(1) => 1

*/

function factorial(num){
  // base condition
  if(num === 1) return 1;

  return num * factorial(num-1)
}


/*
Q] Sum of Natural Numbers
Find the sum of the first n natural numbers.
Example: sum(5) => 15
Example: sum(10) => 55

Hint: Natural numbers are the set of positive integers starting from 1 and continuing infinitely 
N={1,2,3,4,5,…}

*/

function sumOfNaturalNumbers(num) {
  // base condition
  if(num === 1) return 1;
  return num + sumOfNaturalNumbers(num-1);
}



/*
3. **Fibonacci Series**  
Calculate the nth Fibonacci number.  
**Example:** `fibonacci(6) => 8` 

Hint: 

A fibonacci sequence is written as:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...

The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is 
defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.


-  F(0) = 0   
-  F(1) = 1   
-  F(2) = 1  
-  F(3) = 2   
-  F(4) = 3   
-  F(5) = 5   
-  F(6) = 8   
-  F(7) = 13   
-  F(8) = 21  
-  F(9) = 34
-  F(10) = 55

formula: F(n) = F(n-1) + F(n-2)

ex: F(6) => F(5) + F(4) => 5 + 3 => 8


*/
function fibonacci(n) {
   if(n<2) return n;// base condition
   return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6));
for(let i=0; i<= 6; i++){
   console.log(fibonacci(i));
}


/*
reverse string
"Adesh" => "hsedA"
*/


function reverseString(str){
   if(str === "" || str.length === 1) return str;  // base condition

   return reverseString(str.slice(1)) + str[0];
}



/*
5. **Power of a Number**  
   Implement a function to compute `x^n` (x raised to the power n).  
   **Example:** `power(2, 4) => 16` 

   hint:
   Any non-zero number raised to the power of 0 is always 1.

For example:

2^0 = 1
5^0 = 1

*/
function calculatePower(num, power){
   // base condition
   if(power === 0) return 1;
   else if(power === 1) return num;

   return num * calculatePower(num, power-1);
}

console.log(calculatePower(2, 0)); // Output: 1
console.log(calculatePower(2, 3)); // Output: 8 (2 * 2 * 2)
console.log(calculatePower(5, 2)); // Output: 25 (5 * 5)
console.log(calculatePower(7, 1)); // Output: 7





### Basic Problems (Warm-up)
1. **Factorial Calculation**  
   Write a function to calculate the factorial of a number `n`.  
   **Example:** `factorial(5) => 120`  

2. **Sum of Natural Numbers**  
   Find the sum of the first `n` natural numbers.  
   **Example:** `sum(5) => 15`  

3. **Fibonacci Series**  
   Calculate the nth Fibonacci number.  
   **Example:** `fibonacci(6) => 8`  

4. **Reverse a String**  
   Write a recursive function to reverse a string.  
   **Example:** `reverse("hello") => "olleh"`  

5. **Power of a Number**  
   Implement a function to compute `x^n` (x raised to the power n).  
   **Example:** `power(2, 4) => 16`  

---

### Intermediate Problems
6. **Palindrome Check**  
   Check if a string is a palindrome (reads the same forward and backward).  
   **Example:** `isPalindrome("racecar") => true`  

7. **Greatest Common Divisor (GCD)**  
   Find the GCD of two numbers using recursion.  
   **Example:** `gcd(48, 18) => 6`  

8. **Count Digits**  
   Write a function to count the number of digits in an integer.  
   **Example:** `countDigits(12345) => 5`  

9. **Binary Search**  
   Implement binary search recursively.  
   **Example:** `binarySearch([1, 3, 5, 7, 9], 5) => 2`  

10. **Sum of Digits**  
   Calculate the sum of digits of a number.  
   **Example:** `sumDigits(123) => 6`  

---

### Advanced Problems
11. **Generate All Subsets**  
   Generate all subsets of a given array.  
   **Example:** `subsets([1, 2]) => [[], [1], [2], [1, 2]]`  

12. **Permutations of a String**  
   Generate all permutations of a string.  
   **Example:** `permutations("abc") => ["abc", "acb", "bac", "bca", "cab", "cba"]`  

13. **Tower of Hanoi**  
   Solve the Tower of Hanoi problem with `n` disks.  
   **Example:** `hanoi(3)` should print steps to move disks from source to destination.  

14. **Count Ways to Climb Stairs**  
   Find the number of ways to climb `n` stairs if you can take 1 or 2 steps at a time.  
   **Example:** `climbStairs(4) => 5`  

15. **Sudoku Solver**  
   Solve a Sudoku puzzle using recursion and backtracking.  

---

Would you like me to explain how to solve any of these problems step by step?