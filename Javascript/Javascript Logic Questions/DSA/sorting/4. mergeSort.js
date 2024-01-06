function mergeSort(arr) {
  // base condition : will be executed if array contain only one item
  if (arr.length < 2)
    return;

  let middle = Math.floor(arr.length / 2);

  let left = [];
  for (let i = 0; i < middle; i++) 
    left[i] = arr[i];

  let right = [];
  for (let i = middle; i < arr.length; i++) 
    right[i-middle] = arr[i];

  mergeSort(left);
  mergeSort(right);

  // at this point both left and right array are already sorted, we just want to merge them
  merge(left, right, arr);
}

function merge(left, right, result) {
  let i = 0,j = 0,k = 0;

  // comparing elements from both array(left and right)
  while (i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      result[k] = right[j];
      k++;
      j++;
    } else {
      result[k] = left[i];
      k++;
      i++;
    }
  }

  // if left array have some elements left then just add them in main array because they are already sorted.
  while (i < left.length) {
      result[k] = left[i];
      k++;
      i++;
    }
    

  // if right array have some elements left then just add them in main array because they are already sorted.
  while (j < right.length) {
    result[k] = right[j];
    k++;
    j++;
  }
}

let arr = [50, 40, 30, 20, 10];
console.log("Before, ", arr);
mergeSort(arr);
console.log("After: ", arr);
