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

//     Filter the number
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
const filterString =value => +value.replace(/\D/g,'')

//    Odd-Even String Sort
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated
const sortMyString = S => {
    let str1 = S.split('').filter((x,i)=> i%2 === 0?x:'').join('')
    let str2 =S.split('').filter((x,i)=> i%2 !== 0?x:'').join('')
    return `${str1} ${str2}`
}

//     Spacify
// Modify the spacify function so that it returns the given string with spaces inserted between each character.
const spacify = str => str.split('').join(' ')

//     Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers. Return as a number.
const divCon = arr => {
    let num = x => {if(typeof(x)==='number') return num}
    let str = x => {if(typeof(x)==='string') return str}
    let sum1 = arr.filter(num).reduce((a,b)=>a+b, 0)
    let sum2 = arr.filter(str).reduce((a,b)=>a + +b, 0)
    return sum1 -sum2
}
// const divCon = x => return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)

//     Digits explosion
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
const explode = s => {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      const digit = s[i];
      const count = parseInt(digit);
  
      if (!isNaN(count)) {
        result += digit.repeat(count);
      } else {
        result += digit;
      }
    }
    return result;
  }

  //Other solutions const explode = s => s.split("").map((e) => e.repeat(+e)).join("");
  // const explode = s => s.replace(/\d/g, d => d.repeat(d));
  // explode=s=>[...s].map(n=>n.repeat(n)).join``

  //   Short Long Short
  // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
  const solution1 = (a,b) => {
    let sorted = [a,b].sort((c,d)=>c.length-d.length)
    return sorted.concat(sorted[0]).join('')
}
//  const solution = (a, b) => a.length > b.length ? b+a+b : a+b+a;

//    Most digits
// Find the number with the most digits. If two numbers in the argument array have the same number of digits, return the first one in the array.
const findLongest = arr => arr.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

//     Switcheroo
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

const switcheroo = x => {
  return x.replace(/[ab]/g, function(match) {
    return match === "a" ? "b" : "a";
  });
}
// Otehr solution const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")

//    Mumbling
// The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"

function accum(s) {
	return s.split('').map((x, i) => (x.toUpperCase() + x.toLowerCase().repeat(i))).join('-');
}

// Coding Meetup #1 - Higher-Order Functions Series
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

const countDevelopers = (list) => {
  let count = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
      count++
    }
  }
  return count
}
// Other Solution
// const countDevelopers =(list) => list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length

// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
const friend = (friends) => friends.filter(x=>x.length === 4)


// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(o, a, b) {
  return eval(a+o+b);
}
// Can also use a switch case on the operation value

//  Categorize new Member
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

const openOrSenior = (data)=> data.map(e=> e[0]>=55 && e[1]>7?'Senior':'Open')

//    Sum of array Singles
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

const repeats = (arr)=> arr.filter(n => arr.indexOf(n)=== arr.lastIndexOf(n)).reduce((a,c)=> a+c , 0)

//   Number of People on the bus
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus.

const numberBus = (busStops) => busStops.map(n=> n[0]-n[1]).reduce((a,c)=>a + c, 0)

//    Mumbling
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

//   Number-Star Ladder
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):  pattern(3) should return "1\n1*2\n1**3"
const pattern = n => {
  if (n < 1) return "";
  let output = "1";
  for (let i = 2; i <= n; ++i) {
    output += "\n1" + Array(i).join("*") + i;
  }
  return output;
}

//   Find The Duplicated Number in a Consecutive Unsorted List
// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer. The array is unsorted. You should return the duplicate value as a single integer.

const findDup = arr => {
  for (let i =0;i<arr.length;i++){
      if (arr.indexOf(i) !== arr.lastIndexOf(i)){
          return i
      }
  }
}
// const findDup = a => a.find(x=>a.indexOf(x)!=a.lastIndexOf(x));
// const findDup = arr => arr.filter((v, i) => arr.indexOf(v) != i)[0];

//   See you next Happy Year
// Return the next year with unique digits
const nextHappyYear = year => {
  while(new Set([...++year+'']).size<4);
  return year;
}

//    Leap Years
// In this kata you should simply determine, whether a given year is a leap year or not. 
const isLeapYear = year => (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;

//    Elevator Distance
// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

const elevatorDistance = arr => {
  let curr = 0
  for (let i=0; i<arr.length -1; i++){
      curr += Math.abs(arr[i] - arr[i+1])
  }
  return curr
}
// Other solution with reduce
// const elevatorDistance = arr => arr.reduce((acc,x,i)=>acc += Math.abs(x-arr[i-1] ||0),0)

//    Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.All inputs will be valid.

const last = s => s.split(' ').sort((a,b)=> a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1))

// Other Solution
// const last = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))

//     Multiplication - Generators #2
// Your generator must take one parameter `a` then everytime the generator is called you must return a string in the format of: `'a x b = c'` where c is the answer. Also, the value of `b`, which starts at 1, must increment by 1 each time!
function* generator(a, b=1) {
  while(true) yield `${a} x ${b} = ${a*b++}`;
}

//  Other Solution
//function* generator(a) {
  // for(let b = 1; ; b++){
  //     yield `${a} x ${b} = ${a*b}`
  //   }
  // }

  
  //    Simple Fun #40: Timed Reading
 //Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

// Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.

const  timedReading = (maxLength, text) => text.replace(/\p{P}/gu,"").split(' ').filter(e => e.length && e.length <= maxLength).length

//     Only One
// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.
const onlyOne = (...args) => args.filter(Boolean).length === 1
// const onlyOne = (...args) => args.filter(e=>e).length === 1

//     Simple Fun#69: Are Equally Strong?
// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

const  areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => (yourLeft==friendsLeft && yourRight==friendsRight) || (yourLeft==friendsRight && yourRight==friendsLeft)
// Other Solution const areEquallyStrong = (a1, a2, b1, b2) =>a1+a2 == b1+b2 && a1*a2 == b1*b2;

//      Lorraine wants to win a tv
// There are many word games that can help to make our minds more agile. Many TV programs, in different countries, use them as entertainment for the audience. Lorraine had tried to win one of them many times but she was not successful in her attempts. The TV contest is as follows:
// The TV show host gives a random caller a scrambled word (that is incomprehensible) and by rearranging those letters they have to discover a word that is in the Oxford English Dictionary.They have only 25 seconds to discover the word. Her friend Bruce obtained the list of 2000, frequently used, English words used by the TV show. Help Lorraine by making a function that will give her a list of all valid words that may be obtained by rearranging the scrambled word. There always be at least one valid word for each test case.

function unscramble(scramble) {
  const a = scramble.split('').sort().join('');
  return wordList.filter(b => b.split('').sort().join('') === a);
}

//    Return the Missing Element
// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

const getMissingElement = arr => {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
      sum += arr[i]
  }
  return 45 - sum
}
// Other Solution   const getMissingElement = arr => arr.reduce((acc,x)=>acc-x, 45)

//    Boiled Eggs
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
// You can put at most 8 eggs into the pot at once. It takes 5 minutes to boil an egg

const cookingTime = (eggs) => Math.ceil(eggs/8)*5

//     Minimize Sum Of Array (Array Series #1)
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product. Only positive integers and even length arrays

const minSum = arr => {
  let sorted = arr.sort((a,b)=>a-b)
  let result = 0
  for (let i = 0; i < Math.floor(sorted.length / 2); i++) {
      result += sorted[i] * sorted[sorted.length - 1 - i];
    }
    return result
}
// Other solutions
// const minSum = arr => arr.sort((a,b) => a - b).reduce((acc,curr) => acc + curr * arr.pop(),0)
// const minSum = arr =>arr.sort((a,b)=>a-b).reduce((s,x,i,a)=>s+x*a[a.length-i-1],0)/2

//     Averages of numbers
// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
const averages = arr =>{
  if(!arr) return []
  let newArr = []
  for(let i = 0; i<arr.length-1; i++){
      newArr.push((arr[i]+arr[i+1])/2)
  }
  return newArr
}
// const avg = numbers =>numbers ? numbers.map((v, i, a) => (v + a[i + 1]) / 2).slice(0, -1) : [];

//    8 towers
// Write a function that, given N (positive-only integer) the size of the board, returns the number of different combinations in which the towers can be.

function towerCombination(n) {
  return n === 1 ? 1n : BigInt(n) * BigInt(towerCombination(n-1))
}

//   Consecutive items
// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise). It is guaranteed that a and b are both present in arr.

const consecutive = (arr, a, b) => arr.indexOf(a) + 1 === arr.indexOf(b) ? true : arr.indexOf(b) + 1 === arr.indexOf(a)? true: false

// Other solution 
//cont consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
