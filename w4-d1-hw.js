class Hamster{
    constructor(name){
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun(){
        console.log('squeak squeak' )
    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice(){
        return this.price
    }

}
let pet = new Hamster("manny");
console.log(pet);
 pet.owner = "Nissi"
 console.log(pet.owner);
pet.eatFood()
pet.wheelRun()

let x = pet.getPrice()
console.log(x)
 //pet.getPrice()
//console.log(pet.price);

console.log(pet.name);


// Person

class Person{
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamster = []
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
console.log(`I am ${this.name} hello`)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10

    }
    buyHamster(hamster){
        this.hamster.push(hamster)
        this.mood+=10
        this.bankAccount -= hamster.getPrice()

    }
}

const timmy = new Person('Timmy')
for(let i =0; i < 5; i++){
    timmy.ageUp()
  }
  for(let i =0; i < 5; i++){
    timmy.eat()
  }
  for(let i =0; i < 5; i++){
    timmy.exercise()
  }
  for(let i =0; i < 9; i++){
    timmy.ageUp()
  }
  const gus = new Hamster('Gus')
  gus.owner = 'Timmy'
  timmy.buyHamster(gus)
  
  for(let i =0; i < 15; i++){
    timmy.ageUp()
  }
  timmy.eat()
  timmy.eat()
  timmy.exercise()
  timmy.exercise()

//   =============================================

// class Dinner{
// constructor(appetizer, entree, dessert){
//     this.appetizer = appetizer;
//     this.entree = entree;
//     this.dessert = dessert
// }

// }

// class Chef{
    
//     cookdinner(appetizer, entree, dessert){
//         return new Dinner(appetizer,entree,dessert)
//     }
// }

// const chef1 = new Chef()
// console.log(chef1.cookdinner('calamari', 'pasta', 'tiramisu'));
// console.log(chef1.cookdinner('spinach artichoke dip', 'grilled chicken', 'chocolate cake'));
// console.log(chef1.cookdinner('fried shrimp','fried rice', 'pudding'));












