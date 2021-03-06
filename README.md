# Guardian of The Galaxy
Game Description
A game that has pop up aliens that require you to kill them by clicking on it to gain points. Has a duration of 30 seconds that takes in a score and stores a high score. The game is inspired from a Japanese arcade game known as "Whac a mole".


## Game Link
<a href="https://faithchan.github.io/guardianofthegalaxy/">Guardian of The Galaxy</a>


## Technologies
* **HTML**
* **CSS**
* **Javascript**
* **Vanilla JS** is used to manage DOM manipulation 
* **Illustrator** is used for part of UI

## Asset Credits
Audio - YouTube & ZapSplat <br>
Sprite Sheets - Game Developer Studio

## Accomplishments
* Aliens pop out randomly at a random time with an animation.
* Include sound effects on clicks to notify of a successful click
* Allow storage of highscore.
* Instruction and gameover UI was created with modal pop up.
* Allows player to on/off audio as and when.
* For players that score highscore, they will be notified through the modal that they have achieved highscore.

## Difficulties 
* Getting the modal to pop up when timer hits zero, my placement of the function was not in desired sequence so the modal kept popping up at when the timer is at 1 second.
* Getting the css to display all the elements nicely, had to wrap many elements in a div and style the divs first. The position: absolute & display: flex attribute was crucial in the css.
* The codes in my js were getting a little hard to find. It is better to have stored all the variables in 1 file.
* Getting the alien to log the score when killed. Realise holes overlapped the alien in z-index so some of the aliens were not clickable. After that, had to consider pushing the alien down after a click but after clearing and rerun of function, alien might pop up from same hole.

## Game Instructions
* Kill as many Aliens within 30 seconds
* Each kill is 5 points added to scoreboard. Kill as many to reach highscore.

## UI Design and Game flow
1. The landing page has 3 functions for player to interact with - to view instructions of game, turn on audio and prepare for the game start. <br>
<br>
<img src="images/UI1.png" width="650px"/><br>
<img src="images/UI2.png" width="650px"/><br>

2. When the player clicks on the start button, he/she will be directed to the game page and the countdown timer will start counting down from 30 seconds. At the same time, aliens will be activated and player must click on the aliens to gain points. <br>
<br>
<img src="images/UI3.png" width="650px"/><br>

3. Once the player ends the game, header of the modal will either pop up "Great Job" (This means player did not achieve highscore) and "Highscore" (This means player has achieved highscore). Then player can choose to replay or return to main page.<br>
<br>
<img src="images/UI4.png" width="650px"/><br>

## Additional Features Considered
* Enter Name and get instructions to display msg directed to name entered.
* Have different aliens, alien bosses killed can have more points added to scoreboard.
* Have more levels, including guardians as the pop up where if player accidentally shoots them, they will have score deducted from scoreboard.










