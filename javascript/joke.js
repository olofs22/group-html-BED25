const jokeElement = document.getElementById("joke");

  // Funktion som hämtar ett nytt skämt
  function loadJoke() {
    // Visa laddningstext medan vi väntar
    jokeElement.textContent = "Laddar skämt...";

    // Anropa API:et för att få ett slumpmässigt skämt
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(function (response) {
        // Gör om svaret till JSON
        return response.json();
      })
      .then(function (joke) {
        // Visa skämtet på sidan
        jokeElement.textContent =
          joke.setup + " — " + joke.punchline;
      })
      .catch(function () {
        // Om något går fel, visa ett felmeddelande
        jokeElement.textContent =
          "Kunde inte ladda skämt 😢";
      });
  }

  // Ladda ett skämt automatiskt när sidan öppnas
  loadJoke();