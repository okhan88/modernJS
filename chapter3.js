// for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);

// }

// console.log('loop finished')


// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]) // the ouput is each name in the array above
//     let html = `<div>${names[i]}</div>`;
//     console.log(html); 
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------


//while loop- loop around code just like for loop, but setup is different. The first setup is the while loop and the second setup is the for loop, notice the differences in setup but know that the result for both is the same

/*
let i = 0
while (i < 5) {
     console.log('in loop:', i);
     i++;
}

for (let i = 0; i < 5; i++) {
     console.log('in loop:', i);
}

*/

/*
const names = ['shaun', 'mario', 'luigi'];

let i = 0
while (i < names.length) {
    console.log(names[i])
    i++;
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------


// do while loops

/*
let i = 5

do {
     console.log ('val of i is:', i);
     i++;
}
while (i < 5); // this code will run once, 


*/
//----------------------------------------------------------------------------------------------------------------------------------------------

// if statements

/*
const age = 25
if (age > 20) {
     console.log ('you are over 20 years old')
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 4) {
     console.log("that's a lot of ninjas")
}



const password = 'pass'
if (password.length >= 8 ) {
     console.log('that password is long enough')
}


const password1 = 'password10'
if (password1.length >= 8 ) {
     console.log('that password is long enough')
}
 */
//----------------------------------------------------------------------------------------------------------------------------------------------
/*
 else statements

const password = 'pasdsdfss'

if (password.length >= 12) {
     console.log('that password is mighty strong')
} else if (password.length >= 8 ) {
     console.log('that password is long enough')
} else {
     console.log('password is not long enough')
}

*/
//----------------------------------------------------------------------------------------------------------------------------------------------
/*
logical operators- OR || and AND &&

const password = 'p@ss'

if (password.length >= 12 && password.includes('@')) {
     console.log('that password is mighty strong')
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
     console.log('that password is strong enough')
} else {
     console.log('password is not strong enough')
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------
/*
logical NOT (!)

console.log(!true)
console.log(!false)


let user = false;

if (!user) {
     console.log ('you must be logged in to continue')
}

*/


//----------------------------------------------------------------------------------------------------------------------------------------------

/*
break and continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++){
     if (scores[i] === 0) {
          continue;
     }

     console.log ('your score: ', scores[i]);

     if(scores[i] === 100) {
          console.log('congrats, you got the top score');
          break;
     }
}

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
/*
switch statements

const grade = 'D';

switch(grade) {
     case 'A':
          console.log ('you got an A');
          break
     case 'B':
          console.log ('you got an B');
          break
     case 'C':
          console.log ('you got an C');
          break
     case 'D':
          console.log ('you got an D');
          break
     case 'E':
          console.log ('you got an E');
          break
     default:
          console.log ('not a valid grade')

}

*/
//----------------------------------------------------------------------------------------------------------------------------------------------
/*
variables and black scope

let age = 30;

if(true) {
     console.log('inside 1st code block: ', age);
}
console.log('outside  code block: ', age);

// output for both functions above is 30


let age = 30
if(true) {
     age = 40;
     console.log('inside 1st code block: ', age);
}
console.log('outside  code block: ', age);

// output for both functions above is 40



let age = 30;

if(true) {
     let age = 40;
     console.log('inside 1st code block: ', age);
}
console.log('outside  code block: ', age);

// output for inside code block is 40 and output for outside block is 30
// when you use let inside a block, the variable is changed only in that code block, not on the outside




let age = 30;

if(true) {
     let age = 40;
     let name = 'shaun'
     console.log('inside 1st code block: ', age, name);
}
console.log('outside  code block: ', age, name);

// shaun is not ouputed in the outside code block

*/

let age = 30;

if(true) {
     let age = 40;
     let name = 'shaun'
     console.log('inside 1st code block: ', age, name);

     if(true) {
          let age = 50
          console.log('inside 2nd code block: ', age)
     }
}
console.log('outside  code block: ', age, name);