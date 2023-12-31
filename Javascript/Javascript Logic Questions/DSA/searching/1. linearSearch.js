function linearSearch(arr, searchElement) {   
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
}

const arr = [10, 20, 30, 40];

let res = linearSearch(arr, 40);

// console.log(res);
