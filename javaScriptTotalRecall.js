// /* 
// We create the variables using: let, var, const

// 1. How do we assign a value to a variable?
//  use the single = with the variable name and the new value
//  (variable = value)

// 2. How do we change the value of a variable?
// The same way, use the =
// ( variable = newValue )

// 3. For a variable, what is the difference between: 
// declare - let x 
// assign - this is what we did in question 1
// define - let x = 5

// What is pseudocoding and why should you do it?
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// */

// // let number = 5;
// // console.log('This is the value of number');
// // console.log(number);
// // number = 7;
// // console.log('this is the new number');
// // console.log(number);

// // const newNumber = 10;
// // console.log('This is the new number');
// // console.log(newNumber);
// // you cannot change a variable that is a string, number, or boolean if you initialize it as const
// // newNumber = 12;
// // console.log('this is the same new number');
// // console.log(newNumber);

// // what are the types of variable in javaScript
// // boolean, string, number
// // array, object


// /*
// STRINGS

// */
// // create a variable called firstVariable
// let firstVariable;
// // Assign it the value of the string "Hello World"
// firstVariable = "Hello World";
// // this would do the same thing
// // let firstVariable = "Hello World";

// // console.log('firstVariable is ');
// // console.log(firstVariable);
// // console.log('firstVariable is: ', firstVariable);
// // console.log('firstVariable is: ', 'firstVariable');
// // Change the value of this variable to some number
// firstVariable = 17;
// // console.log('firstVariable is: ', firstVariable);

// // Store the value of firstVariablein a new variable called secondVariable
// let secondVariable = firstVariable;
// // console.log('after second variable');
// // console.log('firstVariable is: ', firstVariable);
// // console.log('secondVariable is: ', secondVariable);

// // Change the value of secondVariableto any string.
// secondVariable = 'any string';
// // console.log('firstVariable is: ', firstVariable);
// // console.log('secondVariable is: ', secondVariable);
// // What is the value of firstVariable?

// // Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName
// // so that it returns a new string with them concatenated.
// // ex: Hello, my name is Jean Valjean
// let yourName = 'Christina';
// // you can concatenate a string in two ways
// // using the console.log so that we can see the concatenation, but you don't need that to concatenate
// // console.log('Hello, my name is ', yourName);
// // console.log('Hello, my name is ' + yourName);

// /* 
// BOOLEANS
// */

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// // you could also use (a < b)
// console.log(a !== b);

// console.log(c > d);

// console.log('Name' === 'Name');

// // FOR THE NEXT TWO, USE ONLY && OR ||
// // for || (OR), if any one thing is true, the whole thing is true
// console.log(true || false);
// // console.log(false && true);
// console.log(false || false || false || false || false || true);

// console.log(false === false)

// console.log(e === 'Kevin');

// // a = 4, b = 53, c = 57
// // is 4 = -(53 - 57)
// console.log(a === -( b - c)); 
// // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a + b === c);

// console.log(a !== a - d); 
// // note: the answer is a simple arithmetic equation, not something "weird"

// console.log(48 == '48');
// // this will be false
// // console.log(48 === '48');

//=========================================
// D. The Farm
// =========================================

// declare a variable animal and set it to be either "cow" or something else
// This will print "Hey! You are not a cow."
let animal = "frog";
// animal = "cow";
// This will print "moooooooo"
// if (animal === "cow") {
//     console.log("moooooooo");
// } else {
//     console.log("Hey! You are not a cow.")
// }

// =========================================
// E. Driver's Ed
// =========================================
// let age = -5;
// if (age >= 16) {
//     console.log("Here are the keys!");
// } else if (age > 0) {
//     console.log("Sorry, you're too young.")
// } else {
//     console.log("that's not a real age")
// }


// ==================================================
// SECTION II 
//      LOOPS
// ==================================================

// =========================================
// A. The Basics
// =========================================
//Write a loop that will print out all the numbers from 0 to 10, inclusive
// i++ is the same as i = i + 1
for (let i = 0; i < 11; i++) {
    // console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i=10; i<=400;i++) {
    // console.log(i);
}

// Write a loop that will print every third number starting with 12 and 
// going no higher than 4000
// 12, 15, 18, ... 
// i += 3 is the same as i = i + 3
// set up of a for loop
// for (starting point; go until; how to step up or down) 
//   {what to do}
for (let i=12; i< 4000; i+=3) {
    // console.log(i);
}

// the first few steps of a for loop
// let i = 4000
// is i > 12 (is 4000 > 12)
// it is, so console.log(i), and then i = i - 3, so i = 3997
// it goes back around, and checks, is i > 12
// 3997 > 12 (this is true), so it does what is in {}
for (let i = 4000; i > 12; i -= 3) {
    // console.log(i);
}

// count down by 2 from 10 to 0
// so my starting point is 10, and my ending point is 0
// and we subtract 2 each time
// i -= 2 is the same thing as i = i - 2
for (let i=10; i >= 0; i = i - 2) {
    // console.log(i);
    // the i = i - 2 happens after you console.log
}

// =========================================
// B. Get Even
// =========================================
// print out the numbers that are withing the range of 1 - 100
// add a message next to even numbers saying 
//  "<-- is an even number"
// are we including 1 - 100? we are including 1 and 100
// remember that % checks for the remainder
// i % 2 checks for the remainder of i / 2
for (let i=1;i<=100;i++) {
    if (i%2 === 0) {
        // console.log(i + " <-- is an even number")
    } 
    // else {
    //     console.log(i);
    // }

}

// =========================================
// C. Give me Five
// =========================================
// For the each _number_ 0 - 100, print out "I found a _number_.  High five!"
// then add the code to print out "I found a _number_.  Three is a crowd"
// if the number is divisible by both 3 and 5, print both messages
// ****** I need to check the both condition FIRST
for (let i = 0; i <= 100; i++) {
    if (i%5 === 0 && i%3 === 0) {
        // console.log("I found a " + i + ". High five! Three is a crowd")
    }
    else if (i%5 === 0) {
        // console.log("I found a " + i + ". High five!")
    } else if (i%3 === 0) {
        // console.log("I found a " + i + ". Three is a crowd")
    }
}

// =========================================
// D. Savings Account
// =========================================
// Write code that will save the sum of all of the numbers between 1 - 10 to a variable 
// called bank_account
// at the end, bank_account should have $55 in it
// let bank_account = 0;
// console.log('bank_account before the for loop: ', bank_account);
// for (let i=1; i<=10; i++) {
//     bank_account = bank_account + i;
//     console.log('in the for loop, and i is: ', i);
//     console.log('bank_account is: ', bank_account);
// }
// console.log(bank_account);

// You got a bonus!
// sum all the numbers between 1 - 100 multiplied by 2
// let bank_account = 0;
// console.log('bank_account before the for loop: ', bank_account);
// for (let i=1; i<=100; i++) {
//     bank_account = bank_account + i*2;
//     console.log('in the for loop, and i is: ', i);
//     console.log('bank_account is: ', bank_account);
// }
// console.log(bank_account);

//==============================
// Bank Account
//===============================

// let bank_Account = 0
// for (let i=1; i<=10; i++ ){
//     bank_Account = bank_Account +i
// }
// console.log(bank_Account)

// let bank_Account =0
// for ( let i=1; i<=100 ; i++){
//     bank_Account= bank_Account+i*2
// }
// console.log(bank_Account)
//

//==========================
//III. Arrays & Control flow
//================================
//===========================
// A. Talk about it:
//============================

//1. What are the things in an array called?
//2. Do Arrays guarantee those things will be in order?
// 3.What real-life thing could you model with an array?

//=============================
//B. Easy Does It
//==========================


//Create an array that contains three quotes and store it in a variable called quotes

// const quotes = ['Speak the truth in love', 'power of your words', 'faith, hope, and love']
// console.log(quotes)


//==============================
//C. Accessing elements
//===============================

// Given the following array
// const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
//console.log(randomThings[0]);
// Change the value of "Hello"to "World"
//console.log(randomThings)
//randomThings[2] = 'World';

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
//console.log(randomThings)


//============================
//D. Change values
//========================
//Given the following array 

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?

//console.log(ourClass[2])

//Change the value of "Github" to "Octocat"
ourClass[4]= 'octocat';
//console.log(ourClass)

//Add a new element, "Cloud City" to the array

//ourClass[5]= 'cloud city'
//console.log(ourClass)

// ourClass.push ('cloud city');
// console.log(ourClass)
// console.log(ourClass.length)



//=============================
// E. Mix It Up
//================================

// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]


// Add the string "Aegon"to the end of the array. 
// myArray.push ('Aegon')
// console.log(myArray)

//Add another string of your choice to the end of the array.
myArray.push('another array')
//console.log(myArray)

// Remove the 5 from the beginning of the array.
myArray.shift();
//shift() removes the first element
//console.log(myArray)

// Add the string "Bob Marley"to the beginning of the array.
myArray[0]='Bob Marley'
// console.log(myArray)
myArray.unshift('Nissi');
//console.log(myArray)
// Remove the string of your choice from the end of the array.
myArray.pop()
// console.log(
//     myArray
// );

// Reverse this array using Array.prototype.reverse().
//  Did you mutate the array? What does mutate mean?
//   Did the .reverse()method return anything?
//  const reverseArray = myArray.reverse();
// console.log(myArray
//console.log(myArray)


//============================
// F. Biggie Smalls
//=============================
// Create a variable that contains an integer.

//let x= 5;

// Write an if ... else statement that:
// if(x<100){
//     console.log('little number')
// }else {
//     console.log('Big number')
// }


// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.


//============================
// G. Monkey in the Middle
//===============================
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
// let number = 5;
// if ( number < 5){
//     console.log('little number');
// } else if (number>10 )
// {
//     console.log('big number');
// } else{
//     console.log('monkey');
// }


//==============================
//H. What's in Your Closet?
//===================================

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
//console.log( 'kristyn is rocking that ' + kristynsCloset[2] + ' today! ');


//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat"
kristynsCloset.splice(6,0, 'raybans')
//console.log(kristynsCloset)

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5]='stained knit hat'
//console.log(kristynsCloset)
// kristynsCloset[]
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
//console.log (thomsCloset[0][0])
//In the same way, access one item from Thom's pants array.
//console.log(thomsCloset[1][2])
//Access one item from Thom's accessories array.
//console.log(thomsCloset[2][1])
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
//console.log('Thom is looking fierce in a '  + thomsCloset[0][0] + ' , ' + thomsCloset[1][1] + 'and' + thomsCloset[2][1])
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2]='Footie Pajamas'
//console.log(thomsCloset)


// ==================================================
// SECTION IV 
//      FUNCTIONS
// ==================================================

// =========================================
// A. printGreeting
// =========================================
// Do you think you could write a function called printGreetingwith a parameter name
// that returns a greeting with the argument interpolated into the greeting?
// -- Defining the function printGreeting
// -- name is a parameter that we are passing in
// -- return a greeting
// -- argument interpolated
//          embed the variable into the string
//          "This is just a string" and you can concatenate
//          `This is a string with ${variable}`
function printGreeting(name) {
    return `Hello there, ${name}`;
    // return 'Hello there, ${}'
}

// =========================================
// B. printCool
// =========================================
// Write a function printCoolthat accepts one parameter, nameas an argument. 
// The function should print the name and a message saying that that person is cool.
function printCool(name) {
    // return " " + name + " is  cool";
    return ` ${name} is cool`;
}

// console.log(printGreeting("Slimer"));
// console.log('i can do things in between');



// console.log(printCool("Captain Reynolds"));

// console.log(printGreeting('Elle'));

// =========================================
// C. calculateCube
// =========================================
// Write a function calculateCubethat takes a single number and 
// prints the volume of a cube made from that number.
//  -- parameter that is a number 
//  -- CALCULATE THE volume
//  -- print the volume
function calculateCube(number) {
    console.log(number * number * number);
}

// actually executing and passing in a 6
// calculateCube(6);

// invoke to find volume of cube with side 4
// calculateCube(4);

// =========================================
// D. isVowel
// =========================================
// Write a function isVowelthat takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case. 
// Test your function on every vowel and make sure it's working. 
// In general, when you write functions, 
// take a minute to test them with different values to make sure they behave the way you want.
//  -- function name isVowel
//  -- one parameter that is a character
//  -- return true or false
//  -- how do we decide?
//  -- compare the input argument to the vowels
function isVowel(letter) {
    // toLowerCase() changes all characters in a string to lowercase
    letter = letter.toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    } else 
    return false;
}

// console.log('checking a');
// console.log(isVowel('a'));

// console.log('checking b')
// let answer = isVowel('b');
// console.log(answer);

// console.log('checking A');
// console.log(isVowel('A'));

// ==================================================
// SECTION V 
//      OBJECTS
// ==================================================

// =========================================
// A. Make a user object
// =========================================

// Create an object called user.
// Write in to the object the key-value pairs for 
// name, email, age, and purchased. 
// Set the value of purchased to an empty array []. 
// Set the other values to whatever you would like.

const user = {
    name: "Mercy",
    email: "email@something.com",
    age: 29,
    purchased: []
}

// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.age);
// console.log(user.purchased);

// B. Update the user
// Our user has changed his or her email address. 
// Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! 
// Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

// in a string called email, if i want to update it, 
// email = newValue
// this is similar, but you need to refer to the user
user.email = "newEmail@something.com";
// console.log(user);
// user.age = user.age + 1;
user.age++;
// console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you 
// want to collect.
// Without changing the original userobject, 
// add a new key locationto the object, and give it a value or some-or-other location (a string).
// object.key = 'value';
user.location = 'Columbus';
// console.log(user);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// -- when i want to refer to the purchased array in user, i type user.purchased
// console.log(user.purchased);
user.purchased.push("carbohydrates");
// console.log(user.purchased);

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");
// console.log(user.purchased);
// Console.log just the "Merino jodhpurs" from the purchasedarray.
// console.log(user.purchased[2]);
// console.log(user)

// you can also push multiple elements at the same time
user.purchased.push("new thing", "another new thing", "more things");
// console.log(user);


// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a 
//      name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Columbus",
    purchased: []
}
// console.log(user);
// console.log(user.friend);
// Console.log just the friend's name
// console.log(user.friend.name);
// Console.log just the friend's location
// console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = 55;
// console.log(user.friend.age);
// console.log(user);
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring", "A latte");
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.
// console.log(user.friend.purchased[1]);
console.log(user)
// F. Loops
// Write a for loop that iterates over the User's purchasedarray 
// (NOT the friend's purchased array), and prints each element to the console.
let arrLength = user.purchased.length;
for (i=0; i<arrLength; i++) {
    console.log(user.purchased[i]);
}
// Write a for loop that iterates over the Friend's purchasedarray, 
// and prints each element to the console.
console.log('**********************')
arrLength = user.friend.purchased.length;
for (i=0; i<arrLength; i++) {
    console.log(user.friend.purchased[i]);
}
// G. Functions can operate on objects
// Write a single function update User that takes no parameters. 
// When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, 
// it will merely modify the user object.

function updateUser() {
    console.log('This is the user in the function')
    console.log(user);
    user.age++;
    user.name = user.name.toUpperCase();
    console.log(user.name);
}

// updateUser();


// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// Call your oldAndLoudfunction with useras the argument.
function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
}

oldAndLoud(user);
console.log('This is the user after the function')
console.log(user);




//===================
// ClassesPractice.js
//======================

// vehicle example
// start with class definition of a class keyword and the name of the class
// this class definition tells me what each INSTANCE of the class will look like
// and instance is once the class object is actually created
class Vehicle {
    // code to define the properties (attributes) and the methods (functions for this specific class)
    // const v1 = new Vehicle('12345', 'honda','accord');
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        // this is a keyword, and ties what I'm doing to the specific instance that I am in

    }

    // class methods define what objects in a class can do
    // you can use the methods with any instance of the class
    start() {
        this.running = true;
        console.log('running...');
    }

    // create a stop method, but it sets the running property to false
    // and console.logs the message "stopped..."
    stop() {
        this.running = false;
        console.log('stopped...');
    }

    // this is method overriding because I am taking an existing Oject built-in method and I'm changing it
    // You NEED to use the "this" keyword to access the attributes of the instance
    toString() {
        // return 'Vehicle (' + this.vin + ') is a ' + this.make + ' model ' + this.model;
        return `Vehicle (${this.vin}) is a ${this.make} model ${this.model}`;
    }

}

// Vocabulary:
// Instance
// Instantiate
// Instantiation

// Here we are instantiating the class because we are CREATING a new object of that class type
// so v1 is an INSTANCE of the Vehicle class
// I'm making a new instance, so it's a new variable
const v1 = new Vehicle('12345', 'honda','accord');
console.log(v1);
// the parameter order matters, so if i put what I want as the make before the vin, 
// they'll get switched
// const v2 = new Vehicle('toyota', '323456');
const v2 = new Vehicle('323456', 'toyota');
// console.log(v2);
const newCar = new Vehicle('234324', 'bmw');
// console.log(newCar);

// once I have created the start method, I can use it with any instance of the class
console.log('checking what happens when I invoke running');
v1.start();
console.log(v1);
if (v1.running) {
    console.log('this vehicle is running');
}
v1.stop();
console.log(v1);
console.log(v1.toString());


//=========================================
// objextsAndOrcs.js
//===============================================

// =============================================================
// 
// This is all background for the classes part of this
// 
// =============================================================

// This first part is using objects, but not classes
// const adventurer = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "Tums"]
// }

// this shows the entire (array) list of belongings
// console.log(adventurer.belongings);

// this only shows the first belonging in the array
// console.log(adventurer.belongings[0]);

// we can also iterate over an array in an object
// which means we can use a loop to access each item in the array individually
// for (let i=0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// let's add an object in an object
// and an object in an object in an object
// it is okay to have companion INSIDE of the companion, but they could
// not both be on the same level
const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
        }
    }
}

// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);

// console.log(adventurer.companion.companion.name);
// console.log(adventurer.companion.companion.type);
// what if i want to console.log Tim's health insurance
// console.log(adventurer.companion.companion.belongings[2]);


// Using arrays of objects
const movies = [
    { title: "Tokyo Story" },
    { title: "Paul Blart: Mall Cop" },
    { title: "L'Avventura" }
];

// console.log(movies[0].title);

// for (let i=0; i<movies.length; i++) {
//     console.log(movies[i].title);
// }

// curly braces tell me this is an object
// there are no other keywords (function or class)
// this is a function inside of an object
const foo = {
    someMethod: ()=>{
        console.log('oh hai!')
    }
}

// foo.someMethod();

// =============================================================
// 
// This is where we start practicing with classes
// 
// =============================================================

class Character {
    // the constructor goes first
    // lovesCats has a default because the parameter is lovesCats = false
    //      which means if I don't pass anything in, lovesCats = false
    // lovesDogs has a default because when I set this.lovesDogs, 
    //      I use this.lovesDogs = lovesDogs || false, so
    //      if i passes a value in for lovesDogs, that will be the value,
    //      otherwise, lovesDogs = false
    constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false;
    }

    // class methods that a Character instance can invoke
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    }

    setHair (hairColor) {
        this.hair = hairColor;
    }

    // seeOtherCharacter (otherCharacter) {
    //     console.log(otherCharacter);
    // }

    classyGreeting (otherClassyCharacter) {
        console.log('Greetings ' + otherClassyCharacter.name + '!');
    }

    smite () {
        console.log('I smite thee you vile person');
    }
}

const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
const you = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
// console.log(me);
// console.log(you);
// console.log(typeof me);
// console.log(typeof you);

me.greet('you');
me.smite();
// you.greet('me');
// you.smite();
// me.legs = 1;
// console.log(me);

me.hair = 'supernova red';
// console.log(me);
you.setHair('red');
// console.log(you);

// this is just to show you what it looks like when I pass a character object in to my method
// me.seeOtherCharacter(you);

// me is the character class object that is using the classyGreeting method
// you is what we are passing in to the method
// in this case, I expect that to be a Character
me.classyGreeting(you);

// an example of a function using the return value of another function
function multiply(a, b) {
    return a * b;
}

// these are the same
// this one evaluate multiply(2, 3) and multiply(3, 4)
// and uses that for the outer multiply()
console.log(multiply(multiply(2, 3), multiply(3, 4)));
let x = multiply(2, 3);
let y = multiply(3, 4);
console.log(multiply(x, y));