var Mimimum = 15;
var Maximum = 25;
var Quantity = 5;

var Output = "";
Output += generateNumber(Mimimum, Maximum);
for (i = 0; i < Quantity - 1; i++) {
Output += " " + generateNumber(Mimimum, Maximum);
}

document.getElementById("Output").innerHTML = Output;

//Generates Random Number within Bounds
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }