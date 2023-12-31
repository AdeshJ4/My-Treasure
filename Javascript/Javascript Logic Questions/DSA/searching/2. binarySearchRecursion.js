function binarySearchRecursion(arr, target, left, right) {
  // base condition // array is empty
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  // check middle element is equal to the target element or not
  if (arr[middle] === target) {
    return middle;
  }

  // left side: element should be in the left side
  if (arr[middle] > target) {
    return binarySearchRecursion(arr, target, left, middle - 1);
  }

  // right side: element should be on the right side
  return binarySearchRecursion(arr, target, middle + 1, right);
}

const arr = [10, 20, 30, 40, 50];
const res = binarySearchRecursion(arr, 50, 0, arr.length - 1);
console.log(res);
