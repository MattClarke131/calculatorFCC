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
    screenQueue = calculate(Number(numberMemory), Number(screenQueue),currentOperation).toString();
    updateHTML();
    numberMemory = screenQueue;
    screenQueue = "";
    currentOperation = operation;

  } else {
    currentOperation = operation;
    numberMemory = screenQueue;
    screenQueue = "";
  }
}

var calculate = function(arg1, arg2, operation) {
  var result = 0;
  switch(operation) {
    case "addition":
      result =  arg1 + arg2;
      break;
    case 'multiplication':
      result = arg1 * arg2;
      break;
    case 'subtraction':
      result = arg1 - arg2;
      break;
    case 'division':
      if(arg2 == 0) {
        result = "Stop That";
      } else {
        result = arg1 / arg2;
        result = result.toString().slice(0,maxScreenLength);
      }
      break;
  }
  return result;
}

var equalsPress = function() {
  if(currentOperation == "" || screenQueue == "" || numberMemory == "") {
    return;
  } else {

    screenQueue = calculate(Number(numberMemory), Number(screenQueue), currentOperation)
    screenQueue = screenQueue.toString();

    numberMemory = "";
    currentOperation == "";
    updateHTML();
    screenQueue = "";
  }
}
