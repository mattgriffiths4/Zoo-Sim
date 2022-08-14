// ANIMALS
// created object class with different values to store animal information.
class Animal {
  constructor(type, health, amount) {
    this.type = type; // allows me to define which type of animal
    this.health = health; // js doesn't do percentages, floating point value needs to be a decimal value for health (100.00)
    this.amount = amount; // how many of each animal type
  }
};

// created a new object for each type of animal and stored them in seperate variables. I am using 'var' because I don't fully understand 'let' and 'const'. I know 'let' has something to do with scope and 'const' is more permanent, cannot be redefined.
var a = new Animal('monkey', 100.00, 5);
var b = new Animal('giraffe', 100.00, 5);
var c = new Animal('elephant', 100.00, 5);


/*
need to work out the best way of getting 5 of each. Maybe using 'value' isn't the best option? Not sure creating 5 variables for each animal is the best way either? Seems a lot of repeating code (see below). More googling needed!

var monkey1 = new Animal('monkey', 100.00)
var monkey2 = new Animal('monkey', 100.00)
var monkey3 = new Animal('monkey', 100.00)
var monkey4 = new Animal('monkey', 100.00)
var monkey5 = new Animal('monkey', 100.00)
*/



/* ------------------------------------------------------------- */



// ANIMALS LOSE HEALTH
// from Googling, I found that using setInterval would possibly work well to trigger a new value every 20 seconds. Need to work out how I get this working with a clock/timer that is sped up to 20 seconds per hour and displayed in the simulator.

setInterval(newHealthValue, 20000); // this isn't currently working but I think the code is on the right lines. More googling needed on how to get this working with the below.

// RANDOM VALUE BETWEEN 0 AND 20
var newHealthValue = getRandomNumber(); // this variable contains the random value (0-20)

function getRandomNumber(min, max) { // function to return a random value between 0-20, inclusive of 0 and 20.
  min = 0; // understood how function parameters work in this simple example.
  max = 20;
  return Math.floor(Math.random() * (max - min + 1)); // both min and max values are inclusive. Math.floor returns whole numbers.
}

console.log(a.health - newHealthValue); //testing it returns a value between 80 and 100 everytime I refresh. Need to work out how I use this function to reduce the animals individual health values...



/* ------------------------------------------------------------- */



// FEED ANIMALS
// my thought process would be when a user clicks on a button a function generates 3 random values. Similar code to the above, I need to work out how I generate multiple of something from a function and then how I can get that data and move/manipulate it to do what I need.

document.getElementById('#').addEventListener('click', addHealthValue()); // This throws an error becuase of the # symbol.

function addHealthValue(min, max) {
  min = 10;
  max = 25;
  return Math.floor(Math.random() * (max - min + 1));
}



// ANIMAL HEALTH STATUS
// if/else statement perhaps? I haven't learned about these yet but from looking over examples perhaps something like below

if(a.health < 30.00, b.health < 50.00) {
  // animal dead, game ends
} else {
  // return a.health + addHealthValue (the new value created between 10 & 25 above)
}