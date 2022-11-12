/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter 
and returns an array containing:  all the keys from the object **and** all the 
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/

let object1 = { name: 'Rupert', age: 5, speak: 'Meow' };
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

function breakDownObj(obj) {
  let array = [...Object.keys(obj), ...Object.values(obj)];
  // let array = [...obj.keys(), ...obj.values()]; // doesnt work
console.log(array);
return array;


/*   let array = [];
  let keys = Object.keys(obj);
  let vals = Object.values(obj);
  array.push(keys, vals);
  console.log(array);
  return array; */

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;