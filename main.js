// main.js

var screenQueue = "";
var maxScreenLength = 100;

var updateHTML = function(newContents) {
  document.getElementById("screenText").innerHTML = newContents;
};

var clearScreen = function() {
  screenQueue = "";
  updateHTML('');
};

var numberPress = function(number) {
  if(screenQueue.length <= maxScreenLength) {
    screenQueue = screenQueue.concat(number.toString());
    updateHTML(screenQueue);
  }
}
