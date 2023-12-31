function exponentialSearch(arr, target){
    let bound = 1;

    while(bound<arr.length && arr[bound] < target){
        bound *=2; 
    }

    let left = Math.floor(bound/2);
    let right = Math.min(bound, arr.length -1);

    return binarySearchRecursion(arr, target, left, right);
    
}

function binarySearchRecursion(arr, target, left, right){
    if(left>right) return -1;
    let middle = Math.floor((left+right)/2);
    if(arr[middle] === target) return middle;
    if(arr[middle] > target) return binarySearchRecursion(arr, target, left, middle-1);
    return binarySearchRecursion(arr, target, middle+1, right);
}



// const arr = [10, 20, 30, 40, 50];
const res = exponentialSearch(arr, 10);
console.log(res);