/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/
let animals = { dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo' }
let foods = { apple: 'tart', lemon: 'sour', mango: 'sweet' }

function keysInObject(obj) {
  let keyarr = [];
  for (let key in obj) {
    keyarr.push(key);
  }
  return keyarr;

  
}




console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;