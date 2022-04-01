# rock-paper-scissors
Rock Paper Scissors game

To start the game, clone repository and open the index.html file in a browser.

The game is developed with JavaScript, HTML and CSS.
The functionalities of the game are clearly seperated into functions for a better overview.
The scores can be save into a localstorage by clicking the corresponding button (Save Game).
A button "Load Game" is provided to load the saved scores and players names to coninue the game as last saved.
If a backend is provided, the scores and names could also be saved in a database (e.g. MongoDB)

Missing feature:
Selecting "Computer" is not implemented. A possible approach would be to disable the input field if "Computer" is selected and assign "Computer" as a name for the corresponding player. This would indicate the opponent that it is going to play against a Computer. After starting the game, the Computer choses randomly between the three options (rock, paper, scissors). For this, a number between the range 1-3 could be randomly selected (e.g. using Math.random() functions), which would represent one of the options (1=rock, 2=paper, 3=scissors). After that, the game would continue as usual.
