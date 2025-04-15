function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        let isSorted = false;
        for(let j=1; j<arr.length; j++){
            if(arr[j] < arr[j-1]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
                isSorted = true;
            }
        }

        if(!isSorted)
            return;
    }
}


let arr = [50, 40, 30, 20, 10];

bubbleSort(arr);

console.log(arr);

