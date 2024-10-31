# cribsingle

## Instructions to Run the App

1. Clone the repository:
   ```
   git clone https://github.com/adamga/cribsingle.git
   ```
2. Navigate to the project directory:
   ```
   cd cribsingle
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to play the game.

## How to Play the Game

1. The game starts with each player (you and the AI opponent) being dealt six cards.
2. You and the AI opponent will each choose two cards to place in the crib.
3. A starter card is selected from the remaining deck.
4. The game proceeds with each player taking turns to play a card, aiming to reach a total of 31 or to create combinations that score points.
5. After all cards are played, the hands and the crib are scored.
6. The game continues until one player reaches a score of 121 points.

## AI Opponent

The AI opponent is designed to simulate a real player by making strategic decisions based on the current state of the game. It evaluates its hand, chooses cards for the crib, and makes moves during the play phase.

## Card Game Library

This project uses the `PixiJS` library for rendering the graphical crib board and cards. PixiJS is a fast and flexible 2D rendering library that provides a range of features for creating interactive and visually appealing games.
