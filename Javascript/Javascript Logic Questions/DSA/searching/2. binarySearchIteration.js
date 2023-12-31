function binarySearchIteration(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    // middle element
    if (arr[middle] === target) {
      return middle;
    }

    // left partition
    if (arr[middle] > target) {
      right = middle - 1;
    } else {  
      // right partition
      left = middle + 1;
    }
  }


  // element does not exists
  return -1;
}

const arr = [10, 20, 30, 40, 50];
const res = binarySearchIteration(arr, 10);
console.log(res);
