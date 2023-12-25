// [ 50, 40, 30, 20, 10];  // 4
//[ 10 ]

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let minIndex = i;  // 4
        for(let j=i; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
}

const arr = [50, 40, 30, 20, 10];
console.log('Before : ', arr);
selectionSort(arr);
console.log('After : ', arr);



/**
 * 
 * we are selecting next minimum value and place it in its correct position. we are doing swapping of elemts.
 * 
 * 
 */