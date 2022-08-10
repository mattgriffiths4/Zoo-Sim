// ANIMALS
// created object class to store animal information so not to repeat myself
class Animal {
  constructor(type, health, value) {
    this.type = type;
    this.health = health;
    this.value = value;
  }
};

// created a new object for each type of animal under new variables
var a = new Animal('monkey', 100.00);
var b = new Animal('giraffe', 100.00);
var c = new Animal('elephant', 100.00);



// START BUTTON
document.getElementById('button').addEventListener('click', function() {
  alert('hello'); // just so something works for now
});




// ANIMAL LOSES HEALTH
// from Googling, I found that setInterval would possibly work best here...


var newHealthValue = getRandomNumber(); // this variable contains the random value (0-20)

function getRandomNumber(min, max) { // function to return a random value between 0-20
  min = Math.ceil(0.00);
  max = Math.floor(20.00);
  return Math.floor(Math.random() * (max - min + 1) + min); // both min and max values are inclusive (0 and 20 are included aswell)
}



console.log(a.health - newHealthValue);
document.getElementById('health-bar').innerHTML = a.health - newHealthValue; // returns the new health value to html


  // need to write a random value 
  // document.getElementById("#").innerHTML = // returns the value to the html tag