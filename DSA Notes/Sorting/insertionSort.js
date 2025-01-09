/*
Thinks like we are playing card game.

arr = [8, 2, 4, 1, 3];

Each item in this array present a card, dealer give you one card  at a time, every time you get a card you inserted it at a right place.
first you get 8 you keep it since it is first element [8].
then you get 2 you inserted before 8. so it becomes [2, 8]
then you get 4, you inserted between 2 and 8 so it becomes [2, 4, 8].
then you get 1, you inserted before all items, [1, 2, 4, 8].
finally you get 3, you inserted after 2, [1, 2, 3, 4, 8]


so evert time you get a item you inserted it in correct position. thats why we called this algorithm insertion sort.


arr = [8, 2, 4, 1, 3];

so we start from index 0, we have 8, 8 is only item we have seen so we assume it is in correct position.
next we read 2, we inserted before 8, but how? unlike another algorithms we are not going to do swap here. instead we are going to see all items we have seen so far.
if they are greater than 2 we should  shift them to right to create open space to move 2. this is key distinction about insertions sort.
instead of swapping items we shift them to right.
so 8 is greater than 2 and we should shift 8 to right to create open space for 2 to do this first we store 2 to in separate variable called current then we shift 
8 to right more accurately we copied to right so it overrides 2 thats why we stored 2 in separate variable so we don't loose it. so it looks like this : [8, 8, 4, 1, 3]
so technically we stored 8 in two places in array.but conceptually we can assume that we shifted 8 to right.
so item at index 0 is empty, so we stored value stored in current in that place. so we placed 2 in correct position between items we have seen so far.
[2, 8, 4, 1, 3]
[2, 8] is sorted part of array 
[4, 1, 3] unsorted part of array.

In every step we pick one item from unsorted part and inserted it at correct position in the sorted part.

next we read 4, now we will look in the items we have seen so far, so we placed 4 between 2 and 8, for that we store 4 in current variable and then shift 8 to right to 
make open space for 4. [2, 8, 8, 1, 3] current = 4, then we store value of current in that place, [2, 4, 8, 1, 3]


next we read 1, for this we shift all the items to right to make open space for 1, final [1, 2, 4, 8, 3]

same for 3, [1, 2, 3, 4,  ];



time complexity: 

here we need to iterate over input array and read one item at a time thats O(n) operation,In each step of iteration we need to iterate over items we have seen so far 
and shift them if required. In best case scenario if the array is already sorted then current item is already in correct position. so we don't need to shift any items.
thats O(1) operation for best case, In worst case where array is sorted in descending order we have to shift all items we have seen to right thats a O(n) operation.


Best Case: O(n)
Worst Case: O(n^2)




*/


function insertionSort(arr){
    let n = arr.length;
  
    for(let i=1; i<n; i++){
        let current = arr[i];
        let j=i-1;
  
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
  
        arr[j+1] = current;
    }
  
    console.log(arr);
  }
  
  const arr = [50, 40, 10, 20, 30];
  
  insertionSort(arr)
  
  
  
  /*
  i value starts from index 1 because we think that first element is already sorted.
  so we assume first element to be part of sorted array and i element is first element of unsorted array.
  so we iterate over sorted array by decrementing the j value and compare it ith i element.
  we stored this i element inside current variable. and compare it with arr[j]
  
  
  
  */