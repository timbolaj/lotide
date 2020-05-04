# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aaron.timbol/lotide`

**Require it:**

`const _ = require('aaron.timbol/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Will log a message indicating if arr1 is equivalent to arr2
* `assertEqual(actual, expected)`: Will log a message indicating if actual is equivalent to expected - used to test the output of functions and their expected value(s)
* `assertObjectsEqual(actual, expected)`: Will log a message indicating if the object in actual is equivalent to the object in expected - use to test output of functions and their expected object value(s)
* `countLetters(str)`: Will return an object with each letter provided in str and the number of times it appears in that string
* `countOnly(`allitems, itemsToCount`): Will return an object with a count of each name in object itemsToCount and the amount of times it appears in allitems
* `eqArrays(arr1, arr2)`: Will evaluate if arr1 is equal to arr2 and return a boolean
* `eqObject(object1, object2)`: Will evaluate if object1 is equal to object2 and return a boolean
* `findKey(obj, callback)`: Will loop through keys in an object until the condition indicated in callback is satisfied. If no key is found, undefined is returned
* `findKeyByValue(obj, value)`: Goes through all the keys in an object and returns the first key that contains the value provided
* `flatten(arr)`: Will evaluate arr, looping through one level of nested array, and will return a new array with no nested arrays
* `head(arr)`: Will return the first element in an array
* `letterPositions(str)`: Will return an object with a count of how many times each letter appears in a string
* `map(arr, callback)`: Imitates the .map() method for arrays in JS
* `middle(arr)`: Will return the middle-most value(s) in an array whose length is above 2
* `tail(arr)`: Returns all elements of an array except the first element in cases where arr.length is above 2
* `takeUntil(arr, func)`: Collects items in an array until the func condition is meant, at which point, it will return all the values preceding that value
* `without(sourceArr, itemsToRemove)`: Will return the elements in sourceArr, not including those in itemsToRemove