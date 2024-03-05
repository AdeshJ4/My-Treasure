function calculateVowels (str){
  let vowels = 'aeiou';
  let count = 0;
  for(let ch of str){
    if(vowels.includes(ch.toLowerCase())){
      count++;
    }
  }

  console.log('count: ', count);
}


calculateVowels('Adesh')