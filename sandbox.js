/*

let age = 25;
let year = 2019

console.log(age, year)

age = 30
console.log(age)

const points = 100
console.log(points)



// strings
console.log('hello, world')

let email = "blah@gmail.com"
console.log (email)

// string concatenation- joinging things together
let firstName = "John"
let lastName = "Black"

let fullName = firstName + ' ' + lastName
console.log(fullName)

// getting characters - you can get indiviual characters
console.log (fullName[2])

// string length- how many characters in a string
console.log(fullName.length)

//string methods- functions that can do things, if you ever see () after the . in the console log function, then you will know you are performing a method
console.log(fullName.toUpperCase())

let result = fullName.toLowerCase();
console.log (result, fullName)

let index = email.indexOf('@') // if you pass a value like this, this is called an argument. what this does is find the index in the variable and return a velue
console.log(index)

*/

// ----------------------------------------------------------------------------------------------------------------------------------------------

// common string methods

// let email = 'blah@gmail.com'

// let result = email.lastIndexOf('a'); //this method finds us the last index in a particular string

// let result1 = email.slice(1,8) // slice slices a section from a string, you need two arguments (where you slice from and where to slice to)
// console.log(result1)
// let result = email.substring(1,8) // the first argument is still the starting point but the second argument tells how many characters you want to go along. in this example, we use 1,8 

// let result = email.replace('b', 'p')  // takes two arguments, replaces one characrer with another character

// let result = email.replace('a', 'o') // in this case, it will only replace the first 'a' in the email

// console.log(result)

// ----------------------------------------------------------------------------------------------------------------------------------------------


// NUMBERS

// let radius = 10;
// const pi = 3.14;

// console.log(radius,pi)

// math operators +, - , * , / , ** (to the power of), % (gives a remainder)

// console.log (10/2)

// let result = radius % 3; // takes radius and divides by 3 and then gives the remaineder

// let result = pi * radius**2

// let result = 5 * (10-3)**2

// console.log(result)

// let likes = 10
// likes = likes + 1 is the same as the following
// likes++; // this is the same as adding one
// likes--; // this removes one

// likes += 10; (takes current value and adds new number)


// 

// NaN- not a number

// concatenating numbers

// let result = 'the blog has ' + likes + ' likes';

// console.log(result)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// template strings- lets us inject variables into strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;


// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'

// console.log(result)

// template string way- this is faster and easier than doing concatenation way

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result)

//creating html temples

50.35