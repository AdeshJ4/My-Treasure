function duplicateRemoval(arr){
  const uniqueArr = [];
  for(let i=0; i<arr.length; i++){  // i=0,1,2, 3, 4, 5
    let duplicate = false;
    for(let j=0; j<uniqueArr.length; j++){  // 0<1, 0<1
      if(arr[i] === uniqueArr[j]){  // 20==10
        duplicate = true;
        break;
      }

      if(!duplicate){
        uniqueArr.push(arr[i]);  // [10, 20, 30, 40]
      }
    }
  }
}

const arr = [10, 20, 20, 10, 30, 40]
console.log('before : ', arr);
duplicateRemoval(arr);
console.log('after ', arr);




