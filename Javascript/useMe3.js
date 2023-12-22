// duplicate removal 

function removeDuplicate(arr){
  return arr.filter((ele, index, array)=>{  // 10 0, 20 1, 20 2, 10 3, 20 4, 30 5
    return array.indexOf(ele)  === index; //  0==0, 1==1, 1!=2, 0!=3, 1!=4, 5==5
  })// [10, 20, 30]
}

removeDuplicate([10, 20, 20, 10, 20, 30]);

