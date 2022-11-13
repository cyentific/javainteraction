var input = document.getElementById("input");
var buttonz = document.getElementById("buttonz");
var outputcontainer = document.getElementById("outputContainer");
var drinkoutput = document.getElementById("drinkoutput");
var drinks = [];
var resultdrink = "";
var year = document.getElementById("input").value

buttonz.addEventListener("Enter", function() {
  drinkchoicegenerator();
});

function drinkchoicegenerator(year){

if (year <= 2004.1) {
    drinks = ["Pina Colada", "Blody Mary"];
    resultdrink = drinks[2* Math.floor(Math.random())];


} else if (year <= 2002.1) {
    drinks = ["Espresso Martini", "Spicy Margarita"];
    resultdrink = drinks[2* Math.floor(Math.random())];


} else if (year <= 1999.1) {
    drinks = ["Moscow Mule", "Whiskey on the rocks",];
    resultdrink = drinks[ 2* Math.floor(Math.random())];


} else if (year <= 1996.1) {
    drinks = [ "Scotch", "Dirty Martini"];
    resultdrink = drinks[ 2* Math.floor(Math.random())];

};
