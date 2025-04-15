function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){   // passes-(n-1)
        let sorted = false;
        for(let j=1; j<arr.length-i; j++){  // comparisons- (n-i) comparisons
            if(arr[j] < arr[j-1]){  // 20 < 50
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                sorted = true;
            }
        }

        if(!sorted){  // if no sorting is done that means our array is already sorted.
            return;
        }
    }
}

/**
 * 
 * Bubble sort compare two adjacent elements. 
 * 
 * In each pass we get next largest element at the end of the array.
 * 
 * that why its name is bubble sort because at the end of each pass a large element is move at the end of 
 * the array like bubble.
 * 
 * (n-1) passes are required, but i made some changes in outer loop, i used count variable which starts from 
 * 0 and after inner loop.
 * its value is increasing like count++; so you don't need (n-1) passes, you need less than that.
 * 
 * (n-i) comparisons in each pass, because we are not taking last places element in count, why should we 
 * because its already places.
 * 
 * 
 */