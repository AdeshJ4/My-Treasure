function countVowels(str){
    let vowels = 'aeiou';
    let count = 0;

    for(let i=0; i<str.length; i++){
        if(vowels.indexOf(str[i].toLowerCase()) !== -1)
            count++;
    }

    console.log(count);
}

function reverseWord1(word){
    return word.split('').reverse().join('');
}

function reverseWord2(word){
    let reverse='';
    for(let i=word.length-1; i>=0; i--){
        reverse += word[i];
    }
    console.log(reverse);
}

// INput: Adesh Jadhav
// Output: hsedA vahdaJ
function reverseSentence1(str){
    return str.split(" ").map(ele=>{
        return ele.split("").reverse().join("")
    }).join(" ");
}

// INput: Adesh Jadhav
// Output: vahdaJ hsedA
function reverseSentence2(word){
    let reverse='';
    for(let i=word.length-1; i>=0; i--){
        reverse += word[i];
    }
    console.log(reverse);
}

console.log(reverseSentence2('Adesh Jadhav'));

