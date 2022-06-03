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

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result)

//creating html temples

// let html = `
//     <h2> ${title}</h2>
//     <p> ${author} </>
//     <span> this blog has ${likes} likes </span>

// `;

// console.log(html)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// arrays

// let ninjas = ['shaun', 'ryu', 'chun-li'];
// console.log(ninjas) 

// if you only want one person in an array, put brackets after ninjas and their position within the array

// console.log(ninjas[1]) this will give me ryu

// if you want to override position[1], you can do the following

// ninjas[1] = 'ken';
// console.log(ninjas[1]) you will get ken as the output

// let ages = [20, 25, 30, 35]
// console.log (ages[2])

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random) you will get the array

// console.log(ninjas.length) you get 3 since there are three names in the original array

/* array methods */

// let result = ninjas.join(',') // this will take an array and joins all the elemnets inside them into a single string with a comma


// let result = ninjas.indexOf('chun-li');

// let result = ninjas.concat (['ken', 'crystal'])   // concat will join two arrays together

// let result = ninjas.push('ken') // pushing a new item into an array, this alters the original value
// console.log (result) // this will return the length of the new array
// console.log (ninjas) // this will return all the orginal names in the array along with ken


// result = ninjas.pop() // pop takes off the end value
// console.log (ninjas) // this will give us the original array without ken

// console.log (result) // this will give us "ken" since that is what we popped off


// ----------------------------------------------------------------------------------------------------------------------------------------------

// null (intentional lack of value) and undefined (nonintentional lack of value)

// let age;
// console.log(age, age + 3, `the age is ${age}`) // three values are outputed. The first value is undefined because we have not given age a value. The second value is NaN. the third value says "the age is undefined"


// let age = null
// console.log(age, age + 3, `the age is ${age}`) // null is the first output. we get 3 as the second output because null takes the value of 0 in a formula. the third ouput is "the age is null"



// ----------------------------------------------------------------------------------------------------------------------------------------------


// Booleans- represent true and false

// console.log(true, false) // not putting quotes

console.log(true, false, 'true', 'false') // the new 'true' and 'false' are strings


// methods can return booleans
// let email = "luigi@netninja.co.uk"
// let result = email.includes('@') // includes checks if a certain character is in a string. The result will be a boolean response

// console.log (result) // output is true because there is an @ symbol in the email

// let result = email.includes('!')
// console.log (result) // output is 'false' because there is no ! in the email variable


let email = "luigi@netninja.co.uk"
let names = ['mario', 'luigi', 'toad']

let result = names.includes('luigi')
console.log (result)


1 hour 8 Min 
