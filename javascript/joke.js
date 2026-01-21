const popupOverlay = document.getElementById("popup-overlay");
const jokeText = document.getElementById("joke-text");

function loadJoke() {
    jokeText.textContent = "Laddar skämt...";
    popupOverlay.style.display = "flex";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (response) {
            return response.json();
        })
        .then(function (joke) {
            jokeText.textContent = joke.setup + " — " + joke.punchline;
        })
        .catch(function () {
            jokeText.textContent = "Kunde inte ladda skämt 😢";
        });
}

function closePopup() {
    popupOverlay.style.display = "none";
}