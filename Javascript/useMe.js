function unionArray(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
const unionArr = unionArray([10, 20, 30], [20, 30, 40]);

