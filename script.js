var input = document.getElementById("input");

var buttonz = document.getElementById("buttonz");
var outputcontainer = document.getElementById("outputcontainer");
var drinkoutput = document.getElementById("drinkoutput");

var previouslyEntered = "";

buttonz.addEventListener("Enter", function () {
  drinkchoicegenerator();
});


function drinkchoicegenerator(inputText){
  var year = document.getElementById("input").value;

  if (previouslyEntered == year) {
    return;
  }

  var drinks = [];
  var resultdrink = "";

  if (year =< 2002.1) {
    drinks = ["Pina Colada", "Blody Mary"];
    resultdrink = drinks[Math.floor(Math.random() * drinks.length)];

  } else if (year =< 2004.1) {
    drinks = ["Espresso Martini", "Spicy Margarita"];
    resultdrink = drinks[Math.floor(Math.random() * drinks.length)];

  } else if (year =< 1996.1) {
    drinks = ["Moscow Mule", "Whiskey on the rocks",];
    resultdrink = drinks[Math.floor(Math.random() * drinks.length)];

  } else if (year =< 1999.1) {
    drinks = [ "Scotch", "Dirty Martini"];
    resultdrink = drinks];

  }else {
    drinkoutput = resultdrink;
  }

  if (inputText == ""){


  previouslyEntered = inputText;

}

};
