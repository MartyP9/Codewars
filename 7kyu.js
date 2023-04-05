// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function disemvowel(str){ 
    return str.split("").filter(lett => !vowels.includes(lett)).join("");
}

//  Better solution
//  disemvowel = str => str.replace(/[aeiou]/gi,'');


//Sum of Even Numbers
// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.
function sumEvenNumbers(x){
    let w = x.filter(y => y % 2 === 0)
    return w.reduce((a,b) => a+b, 0);
}
//  shorter solution
//  sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)


// Between Extremes
// Given an array of numbers, return the difference between the largest and smallest values.

function betweenExtremes(a) {
    let b = a.sort((x,y) => x-y)
    return (b[b.length-1] - b[0])
  }
//   Shorter solutions
//   const betweenExtremes = a => (b => b[0] - b[b.length-1])(a.sort((x, y) => y - x))
//   const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);