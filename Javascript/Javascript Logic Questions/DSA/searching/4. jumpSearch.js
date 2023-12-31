function jumpSearch(arr, target){
    let blockSize = Math.floor(Math.sqrt(arr.length));
    console.log('blockSize : ', blockSize);
    let start = 0;
    let next = blockSize;

    while(start < arr.length && arr[next-1] < target){ 
        start = next;

        next += blockSize;
        if(next > arr.length)
            next = arr.length;
    }

    // linear search 
    for(let i=start; i<next; i++){
        if(arr[i] === target)
            return i;
    }
    
    return -1;
}

const arr = [10, 20, 30, 40, 50, 60, 70];
let res = jumpSearch(arr, 60);
console.log(res);

/**
 *  0  1    2       3   4   5         6   7   8         9   
 * 10, 20, 30,     40, 50, 60,       70, 80, 90        100  
 * 
 * block 1:
 * start = index 0 - 10;
 * next = index 3 - 40
 * 30 < 80  -> condition false
 * 
 * block 2:
 * start: index 3 - 40
 * next = 3 + 3 = 6 - 70
 * 60 < 80  -> condition false
 * 
 * block 3:
 * start = index 6 - 70
 * next = 6 + 3 = 9 - 100
 * 100 < 80  -> condition false
 * terminate the loop
 * 
 * now we got our block where our element lies.
 * start: index - 6
 * next : index - (9-1)
 * now run linear search on this array.
 */