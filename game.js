
var playerOneName, playerTwoName;
var playerOneMove = "", playerTwoMove = "";
var scoreCouterPlayerOne = 0, scoreCounterPlayerTwo = 0;
function getValues() {
    playerOneName = document.getElementById("playerOneName").value;
    playerTwoName = document.getElementById("playerTwoName").value;
}
function startGame() {
    getValues();
    let elements = document.querySelectorAll(".disabled");
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove("disabled");
    }
    document.getElementById("savebtn").hidden = false;
    document.getElementById("restartbtn").hidden = false;
    document.getElementById("gamebtn").hidden = true;
    document.getElementById("playerInputSection").classList.add("disabled");

    if (playerOneName.length === 0)
        playerOneName = "Player 1";
    if (playerTwoName.length === 0)
        playerTwoName = "Player 2";
    document.getElementById("playersTurnText").innerText = playerOneName + "'s turn";

}

function restartGame() {
    document.querySelector(".disabled").classList.remove("disabled");
    document.querySelector(".scoreboard").classList.add("disabled");
    document.querySelector(".gameboard").classList.add("disabled");
    document.getElementById("savebtn").hidden = true;
    document.getElementById("restartbtn").hidden = true;
    document.getElementById("gamebtn").hidden = false;
    document.getElementById("loadbtn").hidden = false;
    document.getElementById("playerOneScore").innerText = "0";
    document.getElementById("playerTwoScore").innerText = "0"
    document.getElementById("playersTurnText").innerText = "Press Start Game to play!";
}

function gamePlay(move) {
    if (playerOneMove === "") {
        playerOneMove = move;
        console.log(playerOneName + " chose " + move)
        document.getElementById("playersTurnText").innerText = playerTwoName + "'s turn";
    }
    else if (playerTwoMove === "") {
        playerTwoMove = move;
        console.log(playerTwoName + " chose " + move)
        document.getElementById("playersTurnText").innerText = playerOneName + "'s turn";
    }

    if (playerOneMove === "rock" && playerTwoMove === "paper") {
        alert(playerTwoName + " won this round!")
        scoreCounterPlayerTwo++;
        setScores();
    }
    else if (playerOneMove === "rock" && playerTwoMove === "scissors") {
        alert(playerOneName + " won this round!")
        scoreCouterPlayerOne++;
        setScores();
    }
    else if (playerOneMove === "paper" && playerTwoMove === "rock") {
        alert(playerOneName + " won this round!")
        scoreCouterPlayerOne++;
        setScores();
    }
    else if (playerOneMove === "paper" && playerTwoMove === "scissors") {
        alert(playerTwoName + " won this round!")
        scoreCounterPlayerTwo++;
        setScores();
    }
    else if (playerOneMove === "scissors" && playerTwoMove === "rock") {
        alert(playerTwoName + " won this round!")
        scoreCounterPlayerTwo++;
        setScores();
    }
    else if (playerOneMove === "scissors" && playerTwoMove === "paper") {
        alert(playerOneName + " won this round!")
        scoreCouterPlayerOne++;
        setScores();
    }
    else if (playerOneMove === playerTwoMove) {
        alert("That's a tie!");
        resetGame();
    }
}

function resetGame() {
    playerOneMove = "";
    playerTwoMove = "";
}

function setScores() {
    document.getElementById("playerOneScore").innerText = scoreCouterPlayerOne;
    document.getElementById("playerTwoScore").innerText = scoreCounterPlayerTwo;
    resetGame();
}

function saveGame() {
    let scores = {
        playerOne: {
            name: playerOneName,
            score: scoreCouterPlayerOne
        },
        playerTwo: {
            name: playerTwoName,
            score: scoreCounterPlayerTwo
        }
    }
    localStorage.setItem('scores', JSON.stringify(scores));
    console.log("Scores saved");
    alert("Game Saved successfully")
}

function loadGame(){
    var scores = JSON.parse(localStorage.getItem('scores'));
    if(scores != null){
        console.log("Saved game found");
        scoreCouterPlayerOne = scores.playerOne.score;
        scoreCouterPlayerTwo = scores.playerTwo.score;
        playerOneName = scores.playerOne.name;
        playerTwoName = scores.playerTwo.name;
        document.getElementById("playerOneName").value = playerOneName;
        document.getElementById("playerTwoName").value = playerTwoName;
        document.getElementById("playerOneScore").innerText = scoreCouterPlayerOne;
        document.getElementById("playerTwoScore").innerText = scoreCouterPlayerTwo;
        document.getElementById("loadbtn").hidden = true;
        startGame();
    }
    else{
        alert("No saved game found!")
    }

}