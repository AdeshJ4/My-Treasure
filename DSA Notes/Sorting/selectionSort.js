/*

Selection Sort is a simple sorting algorithm that divides the list into two parts:

Sorted Part: Initially empty, where the smallest (or largest, depending on the order) elements are moved one at a time.
Unsorted Part: Contains the remaining elements to be sorted.
The algorithm works by repeatedly finding the smallest (or largest) element from the unsorted part of the list and swapping it with the first element of the unsorted part.




We need multiple pass to sort the array.
In each pass we should find the next smallest item and move it to correct position.
In each pass we find/select next minimum/maximum value and move it to right place.


time complexity: 

We need n passes for both best and worst case scenario so thats O(n).
In each pass we need to find next minimum value from unsorted part of the array so thats a O(n)
technically unsorted part shrink after each pass but we still see this as a O(n) 

So, Its O(n^2) for both best and worst case.


Why we need O(n) passes for best case when array is already sorted?
-> we can't tell with one pass if the array is fully sorted or not 





arr = [8, 2, 4, 1, 3]

In 1st pass, find the minimum number from the array and swap it with item at index 0
Now we have two parts sorted and unsorted.
sorted have item called 1 and unsorted have remaining elements 
final: [1, 2, 4, 8, 3]

in the next pass, find the minimum value from unsorted part and swap with item at index 1.
2 is smallest number so we swap it with item at index 1.
final: [1, 2, 4, 8, 3]

in the next pass, we have 3 as a smallest number from unsorted part, so we swap it with item at index 2.
final: [1, 2, 3, 8, 4]

In the next pass we have 4 as as smallest number, so we swap it with item at index 3
final: [1, 2, 3, 4, 8]


 
*/




function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // Find the smallest element in the unsorted part
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the smallest element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    console.log(arr);
}

const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
