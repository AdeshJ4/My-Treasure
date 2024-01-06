function insertionSort(arr){
    for(let i=1; i<arr.length; i++){  // 50 40 30 20 10
        let current = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]> current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
}

let arr  = [ 50, 40, 30, 20, 10];
console.log(arr);
insertionSort(arr);
console.log(arr);

/**
 * 
 * 
 * 
 * we are making two parts : sorted and unsorted.
 * 
 * at a time we are taking one element and comparing it to sorted part.
 * 
 * we are comparing given element with sorted elements and if given element is smaller than sorted elements then we are shifting all 
 * sorted elements to right to make space for given element.
 * 
 * 
 */