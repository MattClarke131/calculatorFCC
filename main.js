// main.js

var maxScreenLength = 10;
var screenQueue = "";
var currentOperation = "";
var numberMemory = "";

var updateHTML = function() {
  document.getElementById("screenText").innerHTML = screenQueue;
};

var clearScreen = function() {
  screenQueue = "";
  currentOperation = "";
  numberMemory = "";
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

var operationPress = function(operation) {
  if(screenQueue == "") {
    return;
  }
  if(currentOperation != "") {
    //calculate value, then do stuff
  } else {
    currentOperation = operation;
    numberMemory = screenQueue;
    screenQueue = "";
  }
}
