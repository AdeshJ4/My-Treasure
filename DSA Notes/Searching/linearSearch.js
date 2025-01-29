/*
Linear Search : 

we iterate over list, inspect each item, if we find it we return its index otherwise we return -1 meaning item doesn't exist.

Best Case : Target item is first element of the list so we find it using one comparison. thats O(1) operation.
Worst Case: The target item is at the end of the list s o we need n comparisons. thats O(n) operation.

what if item does not exist.
then we have to iterate over entire list and inspect each item so thats O(n) operation.


linear search is relatively slow compare to other searching algorithms but it works well if you have small number of list.

as the size of input grows algorithms slow down.

*/


function linearSearch(arr, target){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }

  // if you reach here then you didn't found any element
  return -1;
}