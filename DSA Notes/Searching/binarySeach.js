/*
Note : Binary search is faster than linear search, but it only works on sorted list.

arr = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30]

lets say we looking for item 6.

first we will look at middle item.

middle = (left + right) / 2

here, 

left = 0
right = 9
middle = (0 + 9) / 2  => 4

we have 11 at middle.

the value we are looking for is 6, since the list is already sorted 6 < 11 we can guess that 6 is at left side of 11.
thats why binary search is faster because in every step we cut down half list.

this is another example of divide and conquer algorithm.
In every step we divide the problem into a smaller problem 


Now repeat the same step with partition on the left side of list.

[3, 5, 6, 9,]

left = 0
right = 3
middle = (0 + 3) / 2 => 1


we have 5 in middle which is smaller than value we are looking for 
so omit left part and give attention to right part.

[6, 9]

left = 2
right = 3
middle =( 2 + 3 ) / 2 => 2

we have 6 in middle 

so we found 6 with only 3 comparisons even though we have 10 items in the list 

this is beauty of binary search.



lets say w are finding item 2:
[3, 5, 6, 9,]

left = 0
right = 3
middle = (0 + 3) / 2 => 1

we have 5 in middle which is greater than value we are looking for which is 2
so omit right part 

[3]
left = 0
right = 1  (arr.length)
middle = (0 + 1) / 2 => 1/2 => 0
we have 3 in middle which is greater than value we are looking for which is 2, but we don't have items left.
so according to base condition :
  // base condition
  if(left > right){  // (0 > 1)
    return -1; 
  }





Complexity analysis: 
===================

Time Complexity(Best & Worst) : O(log n) because of dividing list in every step.

Space Complexity :  
1. "recursion" : if you implement this algo using recursion then javascript store recursive calls on the stack.
amount of space we need on stack is equal to number of recursive calls.
How many times we can divide this list into half? O(log n) so that our space complexity if we use "recursion".
2. "Iterative": If use this then space complexity will be O(1).

Does it mean iterative implementation is best because it require less space?, not necessary. the extra space we need in recursive  
implementation is way smaller than you can think.
for example if we have 1 million of items then log based 2 1 million equal 19, so we are going to find target item within maximum 19
comparisons. so we need 19 recursive calls thats should be stored on stack. thats very negligible.

recursive implementation is bit cleaner and easy to understand.



*/





function binarySearhRecursive(arr, target, left=0, right=arr.length-1){
  // base condition 
  if(left > right) return -1;

  let middle = Math.floor((left+right)/2);

  if(arr[middle] === target) return middle;


  if(arr[middle] > target){
      return binarySearh(arr, target, left, middle-1);
  }else{
      return binarySearh(arr, target, middle+1, right);
  }


}

console.log(binarySearhRecursive([10, 20, 30, 40, 50], 20));







function binarySearchIterative(arr, target){
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
      let middle = Math.floor((left + right) / 2);

      if(arr[middle] === target) return middle;

      if(arr[middle] > target){
          right = middle - 1;
      }else{
          left = middle + 1;
      }

  }


  return -1;

}

console.log(binarySearchIterative([10, 20, 30, 40, 50], 20));
