# 😎 Bruno's Fun Profile Page

A playful, dynamic profile page styled with custom fonts, themes, and interactive visual preferences.  
Built with HTML, CSS variables, and JavaScript for light customization.

## ✨ Features

- 🎨 **CSS Variables**: Font themes, color modes, and border styles are all controlled via CSS custom properties (`:root`)
- 🖼️ **Image Styling**: Avatar uses `border-radius` with JavaScript-driven variation (sharp, soft, round)
- 🕶️ **Dark & Light Mode**: Dynamically updates theme colors through `favouriteMode()`
- 🍓 **Fruit-Themed Palettes**: Fun color modes like "avocado", "watermelon", "tomato" affect the look
- 🎬 **Genre-Based Fonts**: Change the vibe by setting a font style (e.g. `superhero`, `scary`, `romantic`)
- 📬 **Newsletter Input**: Simple text field + button combo for interaction

## 🧠 Technologies

- **HTML5**
- **CSS3** (with variables & fallback fonts)
- **JavaScript** (for styling logic and theme switching)

## 🎯 Example JS Preferences

```js
favouriteMovieGenre("space")
favouriteFruit("avocado")
favouriteMode("dark")
favouriteEdgeStyle("soft")
```

## 📁 File Structure

fun-profile/
├── index.html       # Page structure and links
├── styles.css       # All visuals, responsive styling, and theming
├── index.js         # Theme logic using JavaScript functions
└── bruno.png        # Profile image