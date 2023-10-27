

// Challenge: While Loops - Fundamentals
let count = 2;

while (count < 8) {
    count = count + 2;
}
console.log(count);
// ADD CODE HERE


// Uncomment these to check your work!
// console.log(count); 
//================================
//Challenge: fizzbuzz

const fb = [];
// // ADD CODE HERE
for(let i=1; i <=16; i++)
  if (i% 3===0 && i%5===0){
    fb.push('fizzbuzz');
} else if( i%5===0){
  fb.push('buzz')
} else if (i% 3===0){
  fb.push('fizz')
} else{
  fb.push(i);
}

// console.log(fb)

// /==========================================
// Challenge: Control Flow - if statements

const num = 40;
let final;
// // ADD CODE HERE
if(num > 100 ){
         final = null;
} 
else {
   final = num*2;
}
console.log(final)

// Log final to the console below to check your work

//===================================================
// Challenge: While Loops - Conditional Expression
// Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9. It's crucial to note that if there's more than one statement in the loop block, the entire block needs to be enclosed in curly braces {}. This ensures that all statements within the block are executed together in each iteration of the loop.

var addThis =0;
var sum = 0;
while (addThis<10 ){
sum = sum+addThis ;
addThis++;
}

console.log(sum);





