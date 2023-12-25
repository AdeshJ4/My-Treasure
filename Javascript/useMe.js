function bubbleSort(arr){
  let count = 0;
  for(let i=0; i<arr.length-count; i++){
    let sorted = false;
    for(let j=1; j<arr.length-i; j++){
      if(arr[j-1] < arr[j]){  // 50 > 40
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        sorted = true;
      }
    }
    count++;
    if(!sorted){
      return
    };
  }
}


const arr = [50, 40, 30, 20, 10];
console.log('Before: ', arr);
bubbleSort(arr)
console.log('After: ', arr);
// [ 50, 40, 30]
