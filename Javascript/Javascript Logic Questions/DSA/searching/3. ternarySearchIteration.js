function ternarySearchIteration(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let partitionSize = Math.floor((right - left) / 3);
    let mid1 = left + partitionSize;
    let mid2 = right - partitionSize;

    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    // search element in left side
    if (arr[mid1] > target) {
      right = mid1 - 1;
      //
    } else if (arr[mid2] < target) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  // element not found
  return -1;
}

const arr = [10, 20, 30, 40, 50];
const res = ternarySearchIteration(arr, 10);
console.log(res);
