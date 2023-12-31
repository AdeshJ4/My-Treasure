
function ternarySearch(arr, target, left, right){

    // base condition: element not found
    if(left > right)
        return -1;

    let partitionSize = Math.floor((right-left)/3);
    let mid1 = left + partitionSize;
    let mid2 = right - partitionSize;
    

    if(arr[mid1] === target)
        return mid1;
    if(arr[mid2] === target)
        return mid2;

    // search element in left partition
    if(arr[mid1]>target)
        return ternarySearch(arr, target, left, mid1-1);

    // search element in right partition
    if(arr[mid2] < target)
        return ternarySearch(arr, target, mid2+1, right);

    // search element between two middle points. 
    return ternarySearch(arr, target, mid1+1, mid2-1);

}


const arr = [10, 20, 30, 40, 50];
let res = ternarySearch(arr, 10, 0, arr.length-1);
console.log(res);