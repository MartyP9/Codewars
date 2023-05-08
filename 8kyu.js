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