function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function addBgClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-700");
}

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvxwyz";
  const alphabetArray = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const randomIndex = Math.round(randomNumber);

  const randomCharacter = alphabetArray[randomIndex];
  return randomCharacter;
}
