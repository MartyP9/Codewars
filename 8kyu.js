// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arr){
    return arr.filter(x => x === true).length;
  }

// Cleanest solution
// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }
// or
// const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;


// Gravity Flip
// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
const flip=(d, a)=>{
  return (d==='R' ? a.sort((x,y) => x-y): a.sort((x,y) => y-x));
}

// Cleanest solution
// const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);


//Remove String spaces
//Write a function that removes the spaces from the string, then return the resultant string.
const noSpace = (x) => {return x.split("").filter(y => y !==" ").join("");}

//most popular solution
// function noSpace(x){
//   return x.replace(/\s/g, '');
// }


//Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let x = weight/height**2
  return (x <=18.5 ? 'Underweight': x<=25 ? 'Normal': x<=30 ? 'Overweight': 'Obese')
}


// The Feast of Many Beasts
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  return (beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1])
  }

//Sum of positive

const positiveSum = (arr) => arr.filter(x => x > 0).reduce((a,b) => a+b, 0)

// Square(n) Sum

const squareSum = (numbers) => numbers.reduce((a,b) => a + b**2 , 0)

// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split('').reverse().map(Number)
}
// Note: Not sure why it needs to be converted to string then back to number. It worked fine in without it in VSCode but not the testing

//A Needle in the Haystack

// Can you find the needle in the haystack
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

const findNeedle = n => 'found the needle at position ' + n.indexOf('needle')


//     Cat years, Dog years
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const humanYearsCatYearsDogYears = function(n) {
  let c = 15 + ((n>2) ? (9+(n-2)*4):n===2?9:0)
  let d = 15 + ((n>2) ? (9+(n-2)*5):n===2?9:0)
  return [n,c,d];
}

//    Well of Ideas - Easy Version
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

let arr = ['bad', 'bad', 'bad', 'bad', 'bad']
function well(arr){
    let w = arr.filter(x=>x=='good').length
    return w == 0 ? 'Fail!': w<3? 'Publish!': 'I smell a series!'
}

//   N-th Power
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

const index = (a,n) => isNaN(a[n]**n) ?-1: a[n]**n

//     Grasshopper - If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
// The function receives one parameter health which will always be a whole number between -10 and 10.

const checkAlive = n => n>0 

//     Get Nth Even Number

// Return the Nth Even Number
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
const nthEven = n => (n-1)*2

//   Generate range of integers
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step){
  let range =[]
  for (i=min; i <=max; i+step){
      range.push(i)
  }
      return range
}

//   What's the real floor?
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

const getRealFloor = n => n<=0 ? n: n>13? n-2: n-1;

//    Simple Fun #1: Seats in Theater
//Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1)*(nRows-row)
}

//    Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
const numToString = (num) => num.toString()

// Other solutions
// const numberToString = num => `${num}`
// const numberToString = num => String(num)

//   Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
const removeChar = str => str.slice(1,-1)

//   Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = str => Number(str);
//Other possible solution 
// const stringToNumber = str => +str;

//     Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

const areYouPlayingBanjo = (name)=> {
  if (name[0]==='r' || name[0]==='R') return name + " plays banjo"
  else return name + " does not play banjo"
}

//   Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);

//   Dollars and Cents

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

const formatMoney = amount=> "$" + amount.toFixed(2)

//    Return Negative
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//The number can be negative already, in which case no change is required.
//Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
function makeNegative(num) {
  return -Math.abs(num);
}
//   Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = bool => bool?'Yes':'No'

//      Opposite Number
// Very simple, given an integer or a floating-point number, find its opposite.
const opposite = number => -number

//     Century From Year
//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

const century = year => Math.ceil(year/100)

//    Keep Hydrated!
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const water = (time) => Math.floor(time*.5)

//    Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

const abbrevName = name => name.split(' ').map(i => i[0].toUpperCase()).join('.')

// Other solution const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

//    Boolean to String
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
const booleanToString = b => b.toString()


//     Fake Binary

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  let result ='' 
  for (let i of x){
   (i < 5)? result += '0' : result +='1';
 }
 return result;
}

// Other Solution 
// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

//    Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//     Convert a string to an array
// Write a function to split a string and convert it into an array of words.

const stringToArray = string => string.split(' ')

//   You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

const check = (a,x)=>a.includes(x)

//     Total amount of points
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// Points are awarded for each match as follows: if x > y: 3 points (win), if x < y: 0 points (loss), if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
function points(games) {
  let score = 0
  games.map(game => game[0]>game[2]?score +=3: game[0]===game[2]? score +=1: score+=0)
  return score
}
// const points=g=>g.reduce((a,c)=>a+(c[0]>c[2]?3:c[0]<c[2]?0:1),0)

//     Sum mixed array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumMix=x=>x.reduce((a,b)=>+b+a,0)

//    Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = s =>s.split('').map(x=> x!== '!'?x:'').join('')
// Other solutions const removeExclamationMarks = s =>s.replace(/!/gi, '');

//    MakeUpperCase
// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase()
}

//    Welcome to the City
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }

//     Remove Duplicate Words
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
const removeDuplicateWords = s => [... new Set(s.split(' '))].join(' ')

//     Remove First and Last Character Part Two
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

  const array = arr => arr.split(`,`).slice(1, -1).join(` `) || null;

//    Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
const smash = x => x.join(' ')

//    Do I get a bonus?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3")
const bonusTime = (salary,bonus) => bonus?`\u00A3`+salary*10:`\u00A3`+salary

//    Name Shuffler
// Write a function that returns a string in which firstname is swapped with last name.
const nameShuffler =str=> str.split(' ').reverse().join(' ')

//    Reversing words in a string
//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
const reverse= string=> string.split(' ').reverse().join(' ')

//     Who is going to pay for the wall?
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
function whoIsPaying(name){
  return name.length>2?[name, name.slice(0,2)]:[name]
}

//     Name on billboard
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
// You can not use multiplier "*" operator.
const billboard = (name, price = 30) => +(name.length / (1 / price))

// function billboard(name, price = 30){
//  let totalCost = 0;
//   for(i=0; i<name.length; i++){
//       totalCost += price;
//   } 
//   return totalCost;
//   }

//   UEFA Euro 2016
// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
function uefaEuro2016(teams, scores){
  let result = scores[1]>scores[0]?`${teams[1]} won!`: scores[1]<scores[0] ? `${teams[0]} won!`:`teams played draw.`
  return `At match ${teams[0]} - ${teams[1]}, ${result}`
}

//    Grasshopper- Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  let sum=0
  for (let i=0; i<=num; i++){
    sum = sum+i
  }
  return sum
}
// Other solution
// const summation = n => n * (n + 1) / 2;

//    Grashopper - Debug
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
// Find the errors in the code to get the celsius converter working properly.

function weatherInfo (temp) {
  let c = convertToCelsius(temp)
  if (c <= 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  let celsius = (temperature - 32) * (5/9)
  return celsius
}

//    Grasshopper - Terminal Game # 1
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes: name = user argument or 'Hero', position = '00', health = 100, damage = 5, experience = 0

function Hero (name='Hero',position,health,damage, experience) {
  this.name = name;
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

// Find smallest Integer in an array
// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {

  findSmallestInt(args) {
    let min = Infinity;
    for (let i = 0; i < args.length; i++) {
      if (args[i] < min) {
        min = args[i];  
      }
    }
    return min;
  }
}

//    Better Solution - O(1)
//class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

//    Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
const isDivisible = (n,x,y)=> n%x===0 && n%y===0

//    Get the Mean of an array
// Return the average of the given array rounded down to its nearest integer.
const getAverage = (marks)=> Math.floor(marks.reduce((a,c)=>a+c,0) / marks.length)

//   Merge Arrays
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
const mergeArrays = (a, b) => [...new Set(a.concat(b))].sort((a,b)=>a-b);


//    To square(root) or not to square(root)   
// Write a method, that will get an integer array as parameter and will process every number from this array. Return a new array with processing every number of the input-array.
// If the number has an integer square root, take this, otherwise square the number.

const squareOrSquareRoot = array => array.map(n => Math.sqrt(n)%1===0 ? Math.sqrt(n): n*n)


//     Is he gonna survive?
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
const hero = (bullets, dragons) => bullets>= dragons*2

//    Neutralisation
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
function neutralise(s1, s2) {
  let res = "";
  for(let i = 0; i < s1.length; i++) {
    res += s1[i] !== s2[i]? "0": s1[i];
  }
  return res;
}
// const neutralise = (a, b) => a.split('').map((el,i) => el === b[i] ? el : 0).join('')

//     Get Planet by Id Name
// The function is not returning the correct values. Can you figure out why?
function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }return name;
}

//     Calculate Price Excluding VAT
// Write a function that calculates the original product price, without VAT.
 // VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

const excludingVatPrice = price => price == null? -1 : +(price/1.15).toFixed(2)

//    Is it a number?
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

const isDigit = s => s == parseFloat(s)

//    Failed Sort - Bug Fixing #4
// Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order
var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}

//    String Templates - Bug Fixes #5
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//    Switch/Case - Bug Fixing #6  
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
      break;
    case'-': result = value.a - value.b;
      break;
    case'/': result = value.a / value.b;
      break;
    case'*': result = value.a * value.b;
      break;
    case'%': result = value.a % value.b;
      break;
    case'^': result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

//   Classy Classes
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    get info() {
      return `${this.name}s age is ${this.age}`;
    }
}

//     Grasshopper - Array Mean
// Find the mean (average) of a list of numbers in an array.

const findAverage = (nums) => nums.reduce((a,c)=>a+c,0)/nums.length