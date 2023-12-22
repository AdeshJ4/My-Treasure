function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  console.log('Original Array:', myArray);
  
  shuffleArray(myArray);
  console.log('Shuffled Array:', myArray);
  