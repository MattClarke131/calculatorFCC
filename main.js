// main.js

var screenQueue = "";
var maxScreenLength = 100;

var updateHTML = function() {
  document.getElementById("screenText").innerHTML = screenQueue;
};

var clearScreen = function() {
  screenQueue = "";
  updateHTML();
};

var numberPress = function(number) {
  if(screenQueue.length <= maxScreenLength) {
    screenQueue = screenQueue.concat(number.toString());
    updateHTML();
  }
}

var decimalPress = function() {
  if(screenQueue.indexOf('.') == -1) {
    screenQueue = screenQueue.concat('.');
    updateHTML();
  }
}
