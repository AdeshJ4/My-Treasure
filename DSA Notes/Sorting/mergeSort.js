/*
Merge Sort is a divide-and-conquer algorithm that recursively splits an array into halves, sorts each half, 
and then merges the sorted halves to produce the final sorted array



The idea of merge sort is to break down the list into smaller and smaller sub lists, sort those and merge them 
back to build a complete sorted list.

cons arr = [8, 2, 4, 1, 3], n=5

we start by dividing the array into half,  we can find index of middle element by dividing the length of the array 
by 2.
middle = n/2; => 5/2 => 2 (index of middle item)
[8, 2]  [4, 1, 3]
we are going to allocate two small arrays and copy the items from input array into these new arrays.
this is important characteristics of merge sort.

we are allocating additional space for this algorithm to run. we don't have to do this before.

Now we repeat same process, for now lets focus on left array [8, 2]

middle = n/2 => 2/2 => 1 (index of middle ele);

[8] [2]


we are recursively dividing the array until we cannot divide any more.

Now we have two single items arrays.

We know that array with single item is already sorted.

so we should merge/combine these arrays in a manner that the resulting array is sorted.

so between [8] & [2] 2 is smaller so we inserted first followed by 8.

[8] + [2] => [2, 8]

[2, 8] [4, 1, 3]

now we have two perform same steps with sub array on the right.

[4, 1, 3]

middle = n/2 => 3/2 => 1 

[4] [1, 3]

as i mentioned array with one element is already sorted so we are done here.

focus on right side [1, 3]

m = n/2 => 2/2 => 1

[1] [3]

we can't divide further so we should merge/combine these arrays in a manner that the resulting array is sorted.

[1] + [3] => [1, 3]

Now merge these : 
[4] [1, 3]

we read first item from both arrays, compare 4 and 1, we pick 1 because its smaller.[1], now we advance our 
pointer and read the 2nd item (3) from right array and compare it with 4, 3<4, so we pick it, [1, 3].
we have read all the items from right  array so now we have elements left in left array in this case 4, 
so final : [1, 3, 4]

now we have to merge these two arrays: 

[2, 8] + [1, 3, 4] 

read first item from both array 2, 1 and pick the smaller one. [1, ....].
now we advance our pointer and read the next value from 2nd array which is 3, now compare 2, 3, we pick 2,
so [1, 2, .....].
No advance pointer from 1st array, now compare 8, 3, pick smaller one 3, [1, 2, 3,......].
advance pointer of 2nd array. now compare 8, 4, pick smaller one 4, [1, 2, 3, 4, ....].
and finally only one item left which is 8 so we add it in array. [1, 2, 3, 4, 8]

so our array is sort.


SO merge sort is what we called "Divide and Conquer" algorithm.
It works by recursively divide a  problem into subproblem until they becomes easy enough solve then it 
combines the solutions to build  the solution to original problem.


Time Complexity : 

We have two operations, dividing and merging.
When we dealing with problem where we have to recursively divide that problem into half we have O(log n).
so if we have array with n numbers the maximum number of times we can divide that array into half is O(log n).

then we have to merge these small single items in our array, this will be O(n) operation because we have to read 
each item from each sub array to build that output.

so for Best and Worst time complexity we have O(n log n).

This algo comes with cost, cost of allocating additional space, how must additional space should we allocate ?
every time we split an array we have to allocate two new sub arrays. all these sub-arrays are combined 
together takes the same amount space  as the original array so here we have O(n) space.

Note that when merging these sub arrays we don't need to create separate array, we can simply copy the items 
into a input array.

space complexity : O(n) for both best and worst case.

there are variations of this array which sort the array without need of extra space.
search : in-place mergeSort.






*/


function mergeSort(arr) {
  if (arr.length <= 1) return arr;  // Base case: Already sorted if 1 or 0 elements

  const mid = Math.floor(arr.length / 2);  // Find midpoint
  const left = mergeSort(arr.slice(0, mid));  // Recursively sort left half
  const right = mergeSort(arr.slice(mid));  // Recursively sort right half

  return merge(left, right);  // Merge sorted halves
}

// Merge helper function
function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  // Compare and merge elements
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example
console.log(mergeSort([8, 3, 5, 2]));  // Output: [2, 3, 5, 8]
