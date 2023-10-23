//Challenge: For Loops - Fundamentals

let countDown = 10;
// // ADD CODE HERE
for (let i=1; i<=10; i++){
  countDown--;
}

// // Uncomment the below line to check your work
console.log(countDown) // -> should print 0;
//=====================================================

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i=0; i<synonyms.length; i++){
  greetings.push('Have a '+ synonyms[i] + ' day!');
}
console.log(greetings);


//============================================
// Challenge: For Loops and Array Indices

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];
for ( let i=0; i<firstNames.length; i++){
    for (let j=0; j<lastNames.length; j++){
       for (let k=0; k<places.length; k++){
    
    bios[i] = ('My name is '+ firstNames[i]  + lastNames[j] + 'and I am from ' + places[k] )
              
  }
}
}
 
console.log(bios);

//===================================
//Challenge: For Loops - Calculating Array Elements


const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE
for(let i=0; i<increaseByTwo.length; i++){
  increaseByTwo[i]+=2
}

// // Uncomment the line below to check your work!
 console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7]