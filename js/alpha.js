function continueGame() {
  const randomCharacter = getRandomAlphabet();
  const alphabet = (document.getElementById("Alphabet").innerHTML =
    randomCharacter);
  addBgClass(randomCharacter);
}

function playNow() {
  hideElement("home");
  showElement("gameArea");
  continueGame();
}
