function selectionSort (arr){
    let n = arr.length;
    
    for(let i=0; i<n-1; i++){
        let minIndex = i;

        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }


        if(minIndex !== i){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        } 
    }


    console.log(arr);
    
}

const arr = [50, 30, 20,10, 40, 80, 20, 45];


selectionSort(arr)

// function selectionSort(arr){
//     let n = arr.length;

//     for(let i=0; i<n-1; i++){
//         let minIndex = i;

//         for(let j=i+1; j<n; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }

//         if(minIndex !== i){
//             [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
//         }
//     }

//     console.log(arr);
    
// }

// const arr = [5, 4, 3, 2, 1];

// selectionSort(arr);

