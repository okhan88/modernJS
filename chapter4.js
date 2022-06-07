/*

function declaration

function greet() { // this is a function declaration because we are not storing a function under a variable
    console.log('hello there');

}

const speak = function() { // this is a function expression because we are storing a function inside a variable
    console.log('good day!')

};

greet();

speak();

*/
//----------------------------------------------------------------------------------------------------------------------------------------------

// arguments and parameters
/*
const speak = function(name) {
    console.log(`good day ${name}`);

};

speak('mario') // inside the () is an argument



const speak = function(name, time) { // the () here indicate the parameters. the order in which the parameters are typed are very important
    console.log(`good ${time} ${name}`);

};

speak('mario', 'morning')




const speak = function(name = 'luigi', time = 'night') { 
    console.log(`good ${time} ${name}`);

};

speak() // if you invoke speech but do not include any argument, then it will take the parameters above. If you add any argument, it will override the parameters
speak('shaun', 'morning')
speak('shaun')

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
/*
 returning values

const calcArea = function(radius){
    let area = 3.14 * radius**2 // you can also just put (return 3.14 * radius**2) and you will still get the same answer
    return area
};

const area = calcArea(5)
console.log(area)

*/

//----------------------------------------------------------------------------------------------------------------------------------------------


// taking regular functions and making them into arrow functions

//(this is the arrow function setup, there is no function used here)

// const calcArea = (radius) => {
//     return 3.14 * radius**2
// }

// const area = calcArea(5)
// console.log('area is:', area)


// another way to write an arrow function from above
// const calcArea = radius => 3.14 * radius**2


// const area = calcArea(5)
// console.log('area is:', area)


// practice with functions and arrow functions below


// const greet = function() {
//     return 'hello world'
// }

// const greet = () => 'hello world';
// const result = greet();
// console.log (result)



const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total
}

const bill = (products, tax) => {
    let total = 0
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total

}


console.log(bill(([10,15,30]), 0.2))
