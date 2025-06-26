# 🚶‍♂️ Passenger Counter App

A simple web application to count the number of people entering a location and log previous entries. This project demonstrates fundamental JavaScript concepts interacting with the Document Object Model (DOM) to create a dynamic user interface.

## ✨ Features

- **Increment Button**: Increases the passenger count by one with each click.
- **Save Button**: Records the current count and resets the counter to zero.
- **Previous Entries Display**: Shows a history of saved counts, separated by dashes.
- **Dynamic Content Updates**: The passenger count and previous entries are updated in real-time on the page using JavaScript.

## 🧠 Technologies

- **HTML5**: Provides the basic structure of the web page, including headings, buttons, and display areas.
- **CSS3**: Styles the page to be visually appealing, including a background image, button styles, and text formatting.
- **JavaScript**: Implements the core logic for counting, saving, and updating the DOM.

## 📁 File Structure

passenger-counter/
├── index.html         # Main page structure
├── index.css          # Styling for the web page
└── index.js           # JavaScript logic for the counter
└── station.jpg        # Background image

## 🚀 JavaScript Concepts Applied

- **`script` tag**: The `index.js` file is linked to `index.html` using a `<script src="index.js"></script>` tag, ensuring the JavaScript code runs in the browser.
- **Variables**: `let saveEl`, `let countEl`, and `let count` are used to store references to DOM elements and the current passenger count, respectively.
- **Numbers**: The `count` variable stores numerical values that are incremented and reset.
- **Strings**: String concatenation is used in the `save()` function to format the `countDash` string for display (e.g., `count + " - "`).
- **`console.log()` (Implicitly Used for Debugging)**: While not explicitly visible in the final `index.js` provided, `console.log()` would typically be used during development to inspect variable values and debug the application's flow.
- **Functions**: `increment()` and `save()` are defined to encapsulate the logic for increasing the count and saving entries, promoting modularity and reusability.
- **The DOM (Document Object Model)**: JavaScript interacts with the HTML structure through the DOM to read and manipulate elements.
- **`getElementById()`**: This method is used to get references to specific HTML elements by their `id` attributes (e.g., `count-el`, `save-el`, `increment-btn`, `save-btn`).
- **`textContent`**: Used to update the text content of HTML elements. For example, `countEl.textContent = count` updates the displayed count, and `saveEl.textContent += countDash` appends new entries to the previous entries paragraph. Note: `innerText` could also be used, but `textContent` is generally preferred for its broader browser support and performance.