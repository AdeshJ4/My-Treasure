function sort(arr){
  let middle = Math.floor(arr.length/2);
  
  let left = [];
  for(let i=0; i<middle; i++)
    left[i] = arr[i];

  let right=[];
  for(let i=middle; i<arr.length; i++){
    right[i-middle] = arr[i];
  }

  // at this point both left and right array are already sorted
  merge(left, right, arr);
}

function merge(left, right, arr){
  let i=0, j=0, k=0;
  
  while(i<left.length && j<right.length){
    if(left[i] >= right[j]){  // 40 >= 
      arr[k] = right[j];
      k++;
      j++;
    }else{
      arr[k] = left[i];
      k++;
      i++;
    }

    while(i<left.length){
      arr[k] = left[i];
      k++;
      i++;
    }

    while(j<right.length){
      arr[k] = right[j];
      k++;
      j++;
    }

  }
}