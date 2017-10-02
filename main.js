// main.js

var updateHTML = function(newContents) {
  document.getElementById("screenText").innerHTML = newContents;
};

var clearScreen = function() {
  updateHTML('');
};
