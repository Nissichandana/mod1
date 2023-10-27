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

// class Person{
//     constructor(name){
//         this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamster = []
//         this.bankAccount = 0
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
//     getWeight(){
//         return this.weight
//     }
//     greet(){
// console.log(`I am ${this.name} hello`)
//     }
//     eat(){
//         this.weight++
//         this.mood++
//     }
//     exercise(){
//         this.weight--
//     }
//     ageUp(){
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount+=10

//     }
//     buyHamster(hamster){
//         this.hamster.push(hamster)
//         this.mood+=10
//         this.bankAccount -= hamster.getPrice()

//     }
// }

// const p = new Person ('Timmy')
// console.log(p);
// // console.log(p.name);
// // p.age = 5
// // console.log(p.age)
// // eat()= eat()*5
// // eat()
// // exercise()=exercise()*5
// // p.age = p.age + 9

// // const gus = new hamster('Gus')

class Dinner{
constructor(appetizer, entree, dessert){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert
}

}

// class Chef{
//     constructor(menu){
//         this.menu = menu
//     cook(appetizer, maincourse, dessert);{
//         return New Dinner;
//     }
// }
// }


const d1 = new di







