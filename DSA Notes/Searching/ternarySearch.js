/*
In ternary search instead of dividing list into half at every step we divide into three parts.


arr = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30]

so here we have two middle poits mid1(at index 3) and mid2(at index 6)

lets see how we can calculate these.

first we have to calculate size of our partition 

partitionSize = (right - left) / 3
mid1 = left + partitionSize
mid2 = right - partitionSize


as we identify the middle points we need few comparisons to find target item.

if its not one of the middle points then it could be one of the partition, so we repeat same steps.


we can implement it using recursion and iteration.

Binary search is faster than Ternary search.


as we divide our array into more parts it gets slower


time complexity: 




*/