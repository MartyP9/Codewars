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