//A list of all games media, their sources, and their buttons
//0 = Deck Thrower, 1 = Fruity Catcher
const games = [document.getElementById("deck-thrower"), document.getElementById("fruity-catcher")];
const gamesSrc = [games[0].src, games[1].src];
const gamesButtons = [[document.getElementById("deck-thrower-image"), document.getElementById("deck-thrower-restart"), document.getElementById("deck-thrower-quit")], [document.getElementById("fruity-catcher-image"), document.getElementById("fruity-catcher-restart"), document.getElementById("fruity-catcher-quit")]];

//Every audio element on the page
const audios = document.getElementsByTagName("audio");

//Has each audio element detect if it is started or stopped
for (const audio of audios) {
    audio.addEventListener("playing", audioPlay); 
    audio.addEventListener("ended", audioStop);
    audio.addEventListener("pause", audioStop);

    //Also, sets the sway animation time to its tempo so the music box "dances" to the song
    //The id of the audio stores how long two beats last
    audio.style.animationDuration = audio.id;
    audio.parentElement.style.animationDuration = audio.id;
}

//Every button element on the page
const buttons = document.getElementsByTagName("button");

//Has each button become hoverable and expandable
for (const button of buttons) {
    button.classList.add("hoverable");
    button.classList.add("expandable");
}

//Every a element on the page
const links = document.getElementsByTagName("a");

//Has each button become hoverable
for (const link of links) {
    link.classList.add("hoverable");
}

//Deload every game on start
for (let x = 0; x < games.length; x++) {
    //When the game loads, have it detect the mouse entering and leaving it.
    //If entering, hide the custom cursor. If leaving, show the custom cursor.
    games[x].addEventListener('load', function() {
        let iframeDoc = games[x].contentDocument || games[x].contentWindow.document;
        iframeDoc.addEventListener('mouseenter', function () {
            alert();
        });
        iframeDoc.addEventListener('mouseleave', function() {
            console.log('Mouse entered the iframe');
        });
    });

    deloadGame(x);
}

//Has the audio sway when playing
function audioPlay (e) {
    e.target.classList.add("sway");
    e.target.parentElement.classList.add("disco");

    deloadAllOthers(e.target);
}
//Has the audio not sway when stopped
function audioStop (e) {
    e.target.classList.remove("sway");
    e.target.parentElement.classList.remove("disco");
}

//Unloads all other media when a new media is loaded
function deloadAllOthers (newMedia) {
    for (let x = 0; x < games.length; x++) {
        if (newMedia != games[x]) deloadGame(x);
    }

    for (const audio of audios) {
        if (newMedia != audio) {
            audio.pause();

            audio.currentTime = 0;
        }
    }
}

//Loads a given game
function loadGame (gameIndex) {
    deloadAllOthers(games[gameIndex]);

    //Load the content of the game and display it
    games[gameIndex].src = gamesSrc[gameIndex];
    games[gameIndex].style.display = "inline-block";

    //Show the active game buttons and hides the preview image
    gamesButtons[gameIndex][0].style.display = "none";
    gamesButtons[gameIndex][1].style.display = "inline-block";
    gamesButtons[gameIndex][2].style.display = "inline-block";
}

//Unloads and hides a given game
function deloadGame (gameIndex) {
    games[gameIndex].src = "";
    games[gameIndex].style.display = "none";

    //Only show the preview image
    gamesButtons[gameIndex][0].style.display = "inline-block";
    gamesButtons[gameIndex][1].style.display = "none";
    gamesButtons[gameIndex][2].style.display = "none";
}

function makeClickable (elements) {
    for (const element in elements) {
        element.classList.add("hoverable");
        element.classList.add("expandable");
    }
}