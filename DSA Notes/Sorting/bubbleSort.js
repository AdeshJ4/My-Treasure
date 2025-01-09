function bubbleSort(arr) {
    let sorted;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        sorted = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
        }

        if (!sorted) break;
    }

    console.log(arr);
}

const arr = [50, 40, 30, 10, 20];
bubbleSort(arr);


/*


-> sort the array in increasing order.
-> we scan the array left to right and if the item are out of order we swap them.
-> we start by comparing items at index 0 and 1, if the right item is smaller then left one then we swap them because we want to sort 
the array in ascending order.
-> at the end of each pass/iteration the next largest item moves to its correct position.
-> This is why we called this algorithm bubble sort, because after each pass/iteration the next largest item bubbles up and movers to 
its correct position.


Time Complexity: 

-> In best case our array is already sorted, so we need "single pass". 
-> In worst case scenario the array is sorted in reverse order so we need "n" passes.
-> In both best and worst scenario each pass/iteration we need "n" comparisons, more accurately (n-1) comparisons. 
for ex if we have 4 items then we need 3 comparisons

Summary : 
-> In Best case we have linear O(n) complexity. (Fair)
-> In Worst case we have quadratic O(n^2) complexity. (Horrible)
-> This algo gets real slow as the amount of input data grows.

Explanation: 

arr.length - 1: 

The outer loop iterates n-1 times (where n is the array length). This is because:
In each pass, the largest unsorted element "bubbles" to its correct position.
After one full pass, the last element is sorted, meaning you don't need to check it again in subsequent passes.
By the time the loop runs n-1 times, all elements will be sorted.


arr.length - i - 1: 

Each pass reduces the unsorted portion of the array by 1.
The - i part ensures we don't recheck sorted elements.
The - 1 part prevents comparing the last element with undefined.




How It Works:


Initial Array: [50, 40, 30, 10, 20]

---

### Pass 1 (i = 0):
(i = 0, i < n - 1 ⇒ 0 < 5 - 1 ⇒ 0 < 4)

Iterations within (j):
1. (j = 0, j < n - i - 1 ⇒ 0 < 5 - 0 - 1 ⇒ 0 < 4) 
   (arr[j] > arr[j + 1] ⇒ arr[0] > arr[1] ⇒ 50 > 40 ⇒ Yes) 
   **Swap** → [40, 50, 30, 10, 20]

2. (j = 1, j < n - i - 1 ⇒ 1 < 5 - 0 - 1 ⇒ 1 < 4) 
   (arr[j] > arr[j + 1] ⇒ arr[1] > arr[2] ⇒ 50 > 30 ⇒ Yes) 
   **Swap** → [40, 30, 50, 10, 20]

3. (j = 2, j < n - i - 1 ⇒ 2 < 5 - 0 - 1 ⇒ 2 < 4) 
   (arr[j] > arr[j + 1] ⇒ arr[2] > arr[3] ⇒ 50 > 10 ⇒ Yes) 
   **Swap** → [40, 30, 10, 50, 20]

4. (j = 3, j < n - i - 1 ⇒ 3 < 5 - 0 - 1 ⇒ 3 < 4) 
   (arr[j] > arr[j + 1] ⇒ arr[3] > arr[4] ⇒ 50 > 20 ⇒ Yes) 
   **Swap** → [40, 30, 10, 20, 50]

5. (j = 4, j < n - i - 1 ⇒ 4 < 5 - 0 - 1 ⇒ 4 < 4 ⇒ No, end inner loop.)

**Array after Pass 1:** [40, 30, 10, 20, 50]

---

### Pass 2 (i = 1):
- (i = 1, i < n - 1 ⇒ 1 < 5 - 1 ⇒ 1 < 4)

Iterations within (j):
1. (j = 0, j < n - i - 1 ⇒ 0 < 5 - 1 - 1 ⇒ 0 < 3) 
   (arr[j] > arr[j + 1] ⇒ arr[0] > arr[1] ⇒ 40 > 30 ⇒ Yes) 
   **Swap** → [30, 40, 10, 20, 50]

2. (j = 1, j < n - i - 1 ⇒ 1 < 5 - 1 - 1 ⇒ 1 < 3) 
   (arr[j] > arr[j + 1] ⇒ arr[1] > arr[2] ⇒ 40 > 10 ⇒ Yes) 
   **Swap** → [30, 10, 40, 20, 50]

3. (j = 2, j < n - i - 1 ⇒ 2 < 5 - 1 - 1 ⇒ 2 < 3) 
   (arr[j] > arr[j + 1] ⇒ arr[2] > arr[3] ⇒ 40 > 20 ⇒ Yes) 
   **Swap** → [30, 10, 20, 40, 50]

4. (j = 3, j < n - i - 1 ⇒ 3 < 5 - 1 - 1 ⇒ 3 < 3 ⇒ No, end inner loop.)

**Array after Pass 2:** [30, 10, 20, 40, 50] 

---

###Pass 3** (i = 2):
- (i = 2, i < n - 1 ⇒ 2 < 5 - 1 ⇒ 2 < 4)

Iterations within (j):
1. (j = 0, j < n - i - 1 ⇒ 0 < 5 - 2 - 1 ⇒ 0 < 2) 
   (arr[j] > arr[j + 1] ⇒ arr[0] > arr[1] ⇒ 30 > 10 ⇒ Yes) 
   **Swap** → [10, 30, 20, 40, 50]

2. (j = 1, j < n - i - 1 ⇒ 1 < 5 - 2 - 1 ⇒ 1 < 2) 
   (arr[j] > arr[j + 1] ⇒ arr[1] > arr[2] ⇒ 30 > 20 ⇒ Yes) 
   **Swap** → [10, 20, 30, 40, 50]

3. (j = 2, j < n - i - 1 ⇒ 2 < 5 - 2 - 1 ⇒ 2 < 2 ⇒ No, end inner loop.)

**Array after Pass 3:** [10, 20, 30, 40, 50]

---

###Pass 4** (i = 3):
- (i = 3, i < n - 1 ⇒ 3 < 5 - 1 ⇒ 3 < 4)

Iterations within (j):
1. (j = 0, j < n - i - 1 ⇒ 0 < 5 - 3 - 1 ⇒ 0 < 1) 
   (arr[j] > arr[j + 1] ⇒ arr[0] > arr[1] ⇒ 10 > 20 ⇒ \text{No}) 

**No swaps in this pass. Early exit triggered by the `sorted` flag.**

**Array after Pass 4:** [10, 20, 30, 40, 50]

---

### Final Sorted Array:
[10, 20, 30, 40, 50]



final: [40, 30, 10, 20, 50]





i=1, 1<4, j=0, j<3  final: [40, 30, 10, 20, 50]
*/