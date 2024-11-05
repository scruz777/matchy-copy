/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};//declaring var animal and initializing to an empty object
animal.species = 'feline';//using .dot notation to add key species, value 'feline'
animal[name] = 'CatNap';//using bracket not to add key name, value CatNap
animal.noises = [];//using any notation to add key noises, value empty array
console.log(animal);//printing to console to check for accuracy
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];//delcaring var noises and assigning to empty array
noises[0] = 'meow';//using bracket not to give noises a string representing a noise the animal would make 
noises.push('purr');//using array method .push() to add another noises to end of array 
noises.unshift('grrrr');//using .unshift() method to add another noise to the beginning of the array 
noises.push('scratchy scratch');//using bracket not to add another noise to the end of array 

console.log(noises.length); // Log the length of the array
console.log(noises[noises.length - 1]); // Log the last element without hardcoding index
console.log(noises); // Log the entire array to verify
/////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;// using bracket not to add noises arr to 'noises' key value 
animal.noises.push('hiss');//adding another sound to end of array using method
console.log(animal);//printing animal to check for accuracy

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * we can use .dot notation and bracket notoation to modify key value pairs of an object
 * 2. What are the different ways of accessing elements on arrays?
 * we can use different array methods such as .push, .unshift, etc depending on what you're try to do
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];//initializing var animals to an empty arr
animals.push[animal];


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}