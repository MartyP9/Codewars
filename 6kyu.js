// Multiples of 3 or 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution (n){
    let sum = 0;
    for (let i = 0; i < n; i++){
        if ( i % 3 == 0 || i % 5 == 0){
        sum += i
        } 
    }
    return sum;
}

//  Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
// shorter solution
  function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }