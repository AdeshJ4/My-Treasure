/**
 *  0  1    2       3   4   5         6   7   8         9   10   11     12  13
 * 10, 20, 30,     40, 50, 60,       70, 80, 90        100  110  120    next     ?
 * n = 12
 * 
 * block 1:   12 < 12
 * start = index 0 - 10;
 * next = index 3 - 40
 * 30 < 150  
 * 
 * block 2:
 * start: index 3 - 40
 * next = 3 + 3 = 6 - 70
 * 60 < 150  
 * 
 * block 3:
 * start = index 6 - 70
 * next = 6 + 3 = 9 - 100
 * 90 < 150 
 * 
 * block 4:
 * start: index 9 - 100
 * next: 9 + 3 - 12 -  next
 * next > arr.length = 12 > 12 false
 * 120 < 150
 * 
 * 
 * block 5:
 * start: index 12 - no ele
 * start >= 12 => 12 >= 12 => true => break - cause no element left
 * next: 12+3= 15 - next
 * next > arr.length = 15 > 12 true -> next = arr.length => 12
 * 
 * 
 * 
 * now we got our block where our element lies.
 * start: index - 6
 * next : index - (9-1)
 * now run linear search on this array.
 */