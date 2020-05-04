const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test cases:
//Equality
let a1 = [1,2];
let a2 = a1;
assertEqual(eqArrays(a1, a2), true);
//Different lengths
a2 = [1];
assertEqual(eqArrays(a1, a2), false);
//One element doesnt match
let txt1 = ['h', 'l', 'j'];
let txt2 = ['l', 'j'];
assertEqual(eqArrays(txt1, txt2), false);
//Capital vs lowercase
txt1 = ['H', 'J'];
txt2 = ['h', 'j'];
assertEqual(eqArrays(txt1, txt2), false);
//Empty and full
let arr = ['h'];
let arrr = [''];
assertEqual(eqArrays(arr, arrr), false);