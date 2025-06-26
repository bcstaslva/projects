# 🏀 Basketball Scoreboard

A dynamic and interactive basketball scoreboard application built with HTML, CSS, and JavaScript. This project allows users to track scores for two teams (Home and Guess) with increment buttons for 1, 2, and 3 points.

## ✨ Features

- **Two Teams Score Tracking**: Separate scoreboards for "Home" and "Guess" teams.
- **Score Increment Buttons**: Each team has three buttons to add +1, +2, or +3 points to their respective scores.
- **Real-time Score Update**: Scores are updated instantly on the display as buttons are clicked.
- **Custom Typography**: Utilizes Google Fonts for a distinct scoreboard aesthetic.
- **Gradient Background**: Features a `linear-gradient` background to enhance the visual appeal.
- **Interactive Buttons**: Buttons have hover effects for a better user experience.
- **Responsive Layout**: Designed with `flexbox` for an adaptive and clean layout across different screen sizes.

## 🧠 Technologies

- **HTML5**: Provides the fundamental structure of the scoreboard, including score displays and buttons.
- **CSS3**: Styles the entire application, handling layout, colors, typography, and button interactions.
- **JavaScript**: Powers the core functionality, managing score updates and handling button click events.

## 📁 File Structure

basketball-scoreboard/
├── index.html         # Main page structure
├── style.css          # Styling for the scoreboard
└── script.js          # JavaScript logic for score tracking and updates

## 🚀 JavaScript Concepts Applied

- **`script` tag**: The `script.js` file is linked at the end of the `<body>` in `index.html` using `<script src="script.js"></script>`, ensuring the DOM is fully loaded before the script executes.
- **Variables**:
    - `scoreHome` and `scoreGuess`: Store the current scores for the Home and Guess teams as numbers.
    - `textScoreHome` and `textScoreGuess`: Store references to the HTML `<p>` elements displaying the scores, obtained using `document.getElementById()`.
    - `buttonIncrementOneHome`, `buttonIncrementTwoHome`, `buttonIncrementThreeHome`, and their "Guess" counterparts: Store references to the HTML `<button>` elements, also obtained using `document.getElementById()`.
- **Numbers**: Scores are handled as numerical values, allowing for arithmetic operations (e.g., `scoreHome += 1`).
- **Strings**: While not explicitly creating new strings for display (as `textContent` automatically converts numbers to strings), the concept of string representation is implicit when a number is assigned to `textContent`.
- **`console.log()` (Implicitly Used for Debugging)**: Although not present in the provided `script.js`, `console.log()` would typically be used during development to debug and verify the values of `scoreHome`, `scoreGuess`, or other variables.
- **Functions (Implicitly via Arrow Functions)**: The event listeners use arrow functions (`() => { ... }`) to define the code that runs when a button is clicked. This is a concise way to create anonymous functions.
- **The DOM (Document Object Model)**: JavaScript interacts with the HTML page's structure, content, and style via the DOM.
- **`getElementById()`**: This method is used extensively to retrieve specific HTML elements by their unique `id` attributes, allowing JavaScript to manipulate them.
- **`textContent`**: This property is used to get or set the text content of selected HTML elements. For example, `textScoreHome.textContent = scoreHome` updates the displayed score on the webpage.
- **`addEventListener()`**: Used to attach event handlers to the buttons. When a button is "clicked", the associated arrow function is executed, updating the score.