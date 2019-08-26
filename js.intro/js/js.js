/**
 * file: js.js
 * purpose: interactivity
 **/

//Dato
var date = new Date();

console.log(date);


// hvilken er størst
var a = 7;
var b = 8;

if (a < b) {
  document.querySelector("#content").innerHTML = "<p> b er sgu størst</p>";
  console.log("b er sgu størst");
} else {
  console.log("Damn, a var sgu størst");
  document.querySelector("#content").innerHTML = "<p> Damn, a var sgu størst</p>";
  document.querySelector("#content p").style.color = "green";
}

let tal = 1234
console.log(tal);


// BMI måler med billede og tekst
function bmi(height, weight) {
  yourbmi = Math.floor(weight / (height * height));
  document.querySelector("#bmi").innerHTML += "<h1> Din BMI er: " + yourbmi + " </h1>";

  if (yourbmi<18.5) {
    document.querySelector("#bmi").innerHTML += '<img src="images/George.png">';
    document.querySelector("#bmi").innerHTML += '<h2> Du er undervægtig</h2>';
  }

  if ((yourbmi<25.) == (yourbmi>=18.5)) {
    document.querySelector("#bmi").innerHTML += '<img src="images/peppa.png">';
    document.querySelector("#bmi").innerHTML += '<h2> Du er normalvægtig</h2>';
  }

  if((yourbmi<30) == (yourbmi>=25)){
    document.querySelector("#bmi").innerHTML += '<img src="images/mama.png">';
    document.querySelector("#bmi").innerHTML += '<h2> Du er overvægtig</h2>';
  }

  if (yourbmi>=30) {
    document.querySelector("#bmi").innerHTML += '<img src="images/papa.png">';
    document.querySelector("#bmi").innerHTML += '<h2> Du er svært overvægtig</h2>';
  }
}

bmi(1.4, 70);


//billede liste

function visBillede(billede) {
  document.querySelector("#billeder").innerHTML += '<img src="images/' + billede +'">'

}

var billeder = [
  "George.png",
  "peppa.png",
  "mama.png",
  "papa.png"

];

for (var i = 0; i <billeder.length; i++){
  console.log(billeder[i]);
  visBillede(billeder[i]);
}
