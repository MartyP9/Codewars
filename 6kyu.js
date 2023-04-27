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

//   Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

  function digitalRoot(n) {
    if (n < 10) return n;
    
    return digitalRoot(
      n.toString().split('').reduce((a,b)=> a + +b, 0));
  }

// Math Trick solution. Casting 9's
// const digitalRoot = n => (n-1) % 9 + 1;

//   Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other.

const arrayDiff = (a,b) => a.filter(x=> b.indexOf(x) === -1)

// Other solution 
//const array_diff = (a, b) => a.filter(x => !b.includes(x));


//    Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. The returned format must be correct in order to complete this challenge. Don't forget the space after the closing parentheses!

function createPhoneNumber(arr){
  let x = arr.slice(0,3).join('')
  let y = arr.slice(3,6).join('')
  let z = arr.slice(6,10).join('')
  return `(${x}) ${y}-${z}`
}

//Cleaner solution
//function createPhoneNumber(numbers){
//   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
// }

//     Take a Ten Minutes Walk
//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  let ns = walk.filter(x => x==='n').length - walk.filter(x => x==='s').length
  let ew = walk.filter(x => x==='e').length - walk.filter(x => x==='w').length
  return walk.length === 10 && ns == 0 && ew == 0
}

//  Tribonacci Sequence
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature)
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
function tribonacci (arr,n){
  for (let i=0; i <n-3; i++){
     arr.push(arr[i] + arr[i+1] + arr[i+2])
  }
  return arr.slice(0,n)
}

//   Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

const findUniq = arr => +arr.filter((a) => arr.indexOf(a) === arr.lastIndexOf(a))