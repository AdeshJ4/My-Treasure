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
so 8 is greater than 2 and we should shift 8 to right to create open space for 2 to this 




*/