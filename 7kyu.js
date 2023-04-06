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

// Keep The Order
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

const keepOrder = (ary, val) => ary.concat(val).sort((x,y) => x-y).indexOf(val)

// other solution
// function keepOrder(ary, val) {
//   return ary.filter(a => a < val).length;
// }

//Fix my Phone Numbers!
// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
function isItANum(s) {
    const newS = s.replace(/\D/g, "")
    return ((newS.length === 11 && newS.startsWith(0)) ? newS:'Not a phone number');
}

//  Other solution const isItANum = str =>(str.replace(/\D/g,'').match(/^0\d{10}$/) || ['Not a phone number'])[0];