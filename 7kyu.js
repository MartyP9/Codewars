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

//      other solution
//      function keepOrder(ary, val) {
//      return ary.filter(a => a < val).length;
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


//Largest Elements
// Write a program that outputs the top n elements from a list.
// Example:
// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]
const largest = (n,x) => n ? x.sort((a,b)=>a-b).slice(-n): [];

//Identical elements
// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
let duplicateElements = (m,n) => m.some(x => n.includes(x));

// Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

const sortByLength = (array) => array.sort((a,b)=>a.length-b.length)


//Sum of two lowest positive integers
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(n) {  
    n.sort((a,b)=> a-b);
    return n[0] + n[1];
}

// Ones and Zeros
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = n => parseInt(n.join(''), 2); 

//  Sum of odd numbers
// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
function rowSumOddNumbers(n) {
	return n**3;
}

//  Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

const oddOrEven = a => a.reduce((a,b) => a + b,0) % 2 === 0 ? 'even':'odd';

//   Digit*Digit

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.

const squareDigits = n => +(n.toString().split('').map(a => (+a) ** 2).join(""))

//  Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes: All numbers are valid Int32, no need to validate them. There will always be at least one number in the input string. Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow (n){
    let s = n.toString().split(' ').sort((a,b) => +b - +a)
    return `${s[0]} ${s[s.length-1]}`
}

//Other solution
// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }


//   Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = n => +(n.toString().split('').sort((a,b) => +b - +a).join(''))

// other possible solution 
// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }

//   Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle (n) {
    let len = n.split('').length
    if (len % 2 === 0){
    return n.split('').slice(len/2 -1 , len/2 + 1).join('')} 
    else return n.split('').slice(len/2, len/2 + 1).join('');
}
console.log(getMiddle('Potatos'))

// Cleaner Solution
// function getMiddle(s){
//   return s.slice((s.length-1)/2, s.length/2+1);
// }


//    You're a square!
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
const isSquare = n => n % Math.sqrt(n) === 0 || n == 0

// other solutions
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;} 
// const isSquare = n => Number.isInteger(Math.sqrt(n)); 


//     Remove the minimum
//The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
  }
// Other solutions
// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));

//     Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number = (arr)=> arr.map((x,i)=> (`${i+1}: ${x}`))

//    Don't give me five!
//In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive! The result may contain fives. ;-)
//The start number will always be smaller than the end number. Both numbers can be also negative!
function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; ++i)
        if (!i.toString().includes("5")){
            count++;
        }
    return count;
}

//     The highest profit wins!
// Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(n){
    let x = n.sort((a,b)=>a-b,0)
    return [x[0], x[x.length-1]]
}
console.log(minMax([5,233467,2,6,7]))

// Other solution
// const minMax = arr=> [Math.min(...arr), Math.max(...arr)];

//     List Filtering
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
const filter_list = arr => arr.filter(x => typeof x === 'number')

// Other solution  const filter_list = l => l.filter(Number.isInteger);

// Isograms     
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
const isIsogram = (word) => new Set(word.toLowerCase()).size === word.length

// Other solution  function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)}

//     Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
const XO = (str) => {
    let arr = str.toLowerCase().split('')
    return arr.filter(a=> a === "x").length === arr.filter(a=> a === "o").length
  }
  // Other solution   function XO(str) {
  //   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
  // }

//    Jaden Casing Strings
//When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
    return this.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");
  };

//     Complementary DNA
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
const dna = str => str.split('').map(x=> x==="A"? "T": x==="T"? "A":x=="C"? "G":"C").join('');
// Alternative solution
//let pairs = {A:'T',T:'A',C:'G',G:'C'};
//const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

//    Credit Card Mask    
//Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc){
    let num = cc.split('').slice(-4)
    let hash = cc.split('').slice(0,-4).map(x=> x!=null ?'#':x)
    return hash.concat(num).join('')
  }
  // Other solutions 
  // function maskify(cc) {
  //   return cc.split('').map((v,i,a) => a.length - i > 4 ? '#' : v).join('')
  // }
  //function maskify(cc) {
  //   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  // }
  
   //     Reverse words
 // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 const reverseWords = (str) => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')

 //    Remove anchor from URL
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
const removeUrlAnchor = url => url.split('#')[0]

//   Find the Capitals
//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string
const capitals = word => word.match(/[A-Z]/g).map(cap=>word.indexOf(cap))

//   String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

const solution = (str,ending) => str.endsWith(ending)

//    Number of Decimal Digits
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

const digits = n => n.toString().length

//    Vowel Count 
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const getCount = str => str.match(/[aeiou]/gi)?str.match(/[aeiou]/gi).length:0

//   Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const findShort = s =>s.split(' ').sort((a,b)=>a.length-b.length)[0].length

//    Two to one
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    let seen = {};
    let c = (s1+s2).split('').sort()
    let d = c.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
    return d.join('')
}
// Other solutions const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//     Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

const isTriangle = (a,b,c) =>{
    return a+b>c && b+c>a && a+c>b
}

//    Bumps in the Road
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
    let count =''
    for (let n of x){
      n ==='n'? count++:null;
    }
    return +count <= 15? 'Woohoo!': 'Car Dead'
  }
  // Other solution const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

//     Find min and max
// Implement a function that returns the minimal and the maximal value of a list (in this order).
function getMinMax(arr){
    let order = arr.sort((a,b)=>a-b)
    return [order[0],order[order.length -1]]
  };

//     Anagram Detection
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
const isAnagram = (test, original) => test.toLowerCase().split('').sort().join('')===original.toLowerCase().split('').sort().join('')

//    Greet Me
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
const greet = (name) => `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`

//    Alphabet war
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
//The other letters don't have power and are only victims.
const alphabetWar = (fight) => {
    let l =''
    let r = ''
    fight.split('').map(x=> {switch(x){
        case 'w': l += 4;
        break;
        case 'p': l +=3;
        break;
        case 'b': l +=2;
        break;
        case 's': l +=1
        break;}
    })
       let scoreL = l.split('').reduce((a,b)=>+a + +b,0)

       fight.split('').map(x=> {switch(x){
           case 'm': r += 4;
           break;
           case 'q': r +=3;
           break;
           case 'd': r +=2;
           break;
           case 'z': r +=1
           break;}
       })
          let scoreR = r.split('').reduce((a,b)=>+a + +b,0)
          
          return scoreR>scoreL?'Right side wins!':scoreL>scoreR? 'Left side wins!':'Let\'s fight again!'    
}

// Other solution function alphabetWar(fight) {
//     let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
//     let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
//     return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
// }

//    Convert an array of strings to array of numbers
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
const toNumberArray = stringarray => stringarray.map(x=> +x)
// Other Solution function toNumberArray(s){ return s.map(x => parseFloat(x)); }

//   Sort the Gift Code
// Write a function that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
const sortGiftCode = code => code.split('').sort().join('')

//    All unique
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
const hasUniqueChars = (str) => new Set(str).size === str.length;