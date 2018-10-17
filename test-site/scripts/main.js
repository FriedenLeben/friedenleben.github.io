var myHeading = document.querySelector('h1');	// Seleziono tutti i tag h1
myHeading.textContent = 'Hello world!';			// Cambio il testo

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/index.png') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/index.png');	// firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla2 is cool, ' + storedName;
}

function setUserName() {
  var myName = prompt('Inserisci il tuo nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla1 is cool, ' + myName;
}

myButton.onclick = function() {
	setUserName();
}
