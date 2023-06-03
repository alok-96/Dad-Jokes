const jokeElement = document.getElementById("joke-element");
const refreshButton = document.getElementById("refresh-btn");

async function findJoke() {
  const response = await fetch("https://icanhazdadjoke.com/slack");
  const jokeData = await response.json();
  const jokeText = jokeData.attachments[0].text;
  jokeElement.innerHTML = jokeText;
}

findJoke();

refreshButton.addEventListener("click", () => {
  findJoke();
});