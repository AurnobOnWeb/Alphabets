document.addEventListener("keyup", handleKeyboard);
function continueGame() {
  const randomCharacter = getRandomAlphabet();
  const alphabet = (document.getElementById("Alphabet").innerHTML =
    randomCharacter);
  addBgClass(randomCharacter);
}
function handleKeyboard(event) {
  const playerPressed = event.key;
  const randomCharacter = document.getElementById("Alphabet").innerText;
  if (playerPressed == randomCharacter) {
    console.log("You Got Some Point");
  } else {
    console.log("You have Lost A Life");
  }
}

function playNow() {
  hideElement("home");
  showElement("gameArea");
  continueGame();
}
