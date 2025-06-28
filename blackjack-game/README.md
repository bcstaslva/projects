# ♠️ Blackjack Game

A classic Blackjack game implemented in the browser using HTML, CSS, and JavaScript. This project allows a single player to play a basic version of Blackjack, drawing cards and aiming for a sum of 21 without going over.

## ✨ Features

- **Game Logic**: Implements core Blackjack rules, including drawing new cards, calculating the sum, and determining win/loss conditions.
- **Dynamic Card Drawing**: Generates random card values (1-10, with face cards as 10 and Aces as 11).
- **Player Status Display**: Provides real-time feedback on the game state (e.g., "Do you want to draw a new card?", "You've got Blackjack!", "You're out of the game!").
- **Score and Card Display**: Shows the current cards drawn and their sum.
- **Player Chips**: Tracks a player's name and chip count.
- **Interactive Buttons**: "START GAME" and "NEW CARD" buttons control the game flow.
- **Themed Styling**: Features a casino-like background image and themed colors.

## 🧠 Technologies

- **HTML5**: Structures the game interface, including headings, paragraphs for messages and scores, and buttons.
- **CSS3**: Styles the game's appearance, providing a blackjack table background, custom fonts, and button styling.
- **JavaScript**: Contains the complete game logic, from generating cards and calculating sums to managing game state and updating the DOM.

## 📁 File Structure

blackjack-game/
├── index.html         # Main game page structure
├── style.css          # Styling for the game
├── script.js          # JavaScript logic for the game
└── images/            # Directory for game assets
    └── table.png      # Background image for the game table

## 🚀 JavaScript Concepts Applied

- **`script` tag**: The `script.js` file is linked to `index.html` via `<script src="script.js"></script>` at the end of the `<body>`, ensuring that HTML elements are loaded before JavaScript attempts to access them.
- **Variables**:
    - `player` (Object): Stores the player's `name` (string) and `chips` (number).
    - `cards` (Array): An array to hold the numerical values of the cards currently in hand.
    - `sum` (Number): Stores the total value of the `cards`.
    - `hasBlackjack` (Boolean): A flag indicating if the player has achieved Blackjack (sum of 21).
    - `isAlive` (Boolean): A flag indicating if the player is still in the game (sum <= 21).
    - `message` (String): Stores the message displayed to the player.
    - DOM element variables (e.g., `cardsEl`, `sumEl`, `messageEl`, `playerEl`): Store references to specific HTML elements for manipulation.
- **Numbers**: Card values and sums are handled as numerical data types, enabling arithmetic operations. `Math.random()` and `Math.floor()` are used to generate random numbers for card values.
- **Strings**: Used for messages displayed to the player and for constructing the player's name and chip count (e.g., `player.name + ": $" + player.chips`).
- **`console.log()` (Implicitly Used for Debugging)**: While not directly in the provided `script.js`, `console.log()` would be crucial during development to inspect variable states (e.g., `console.log(cards)`, `console.log(sum)`) and debug game logic.
- **Functions**:
    - `getRandomCard()`: Generates a random card value, handling Ace (1 becomes 11) and face cards (11-13 become 10).
    - `startGame()`: Initializes a new game round, drawing two cards and setting the initial `sum` and game state (`isAlive`).
    - `renderGame()`: Updates the display with current cards, sum, and game messages based on the current game state (`sum`, `hasBlackjack`, `isAlive`).
    - `newCard()`: Handles drawing an additional card if the player is still in the game and hasn't yet achieved Blackjack.
- **The DOM (Document Object Model)**: JavaScript interacts with HTML elements through the DOM to read their content or modify their appearance and text.
- **`getElementById()`**: Although `querySelector` is used in `script.js` (e.g., `document.querySelector("#cards-el")`), `getElementById()` serves the same purpose of selecting a specific HTML element by its ID attribute. Both methods are fundamental for DOM manipulation.
- **`textContent`**: This property is used extensively to set and update the text content of HTML elements, such as displaying the cards, sum, and game messages (e.g., `cardsEl.textContent = "Cards: "`, `sumEl.textContent = "Sum: " + sum`).