# 🏙️ Hometown Homepage: Discover São Paulo

A simple yet engaging homepage showcasing key attractions of São Paulo. This project demonstrates fundamental HTML structure and CSS styling for a responsive and visually appealing web page.

## ✨ Features

- **Header with Background Image**: A prominent header section featuring a captivating background image of the city.
- **Key Attractions Showcase**: Highlights three must-see places in São Paulo with images and descriptions.
- **Circular Images**: Images of the attractions are styled with `border-radius: 100%` for a circular appearance.
- **Responsive Layout**: Utilizes `flexbox` to ensure the layout adapts well to different screen sizes.
- **Consistent Styling**: Global styles are applied using the universal selector (`*`) for consistent `margin`, `padding`, and `box-sizing`.
- **Footer with Personal Touch**: A footer section including a profile image and a concluding message about São Paulo.
- **Text Shadows**: Headings in the header section feature `text-shadow` for improved readability against the background image.

## 🧠 Technologies

- **HTML5**: Used for structuring the content of the web page.
- **CSS3**: Employed for all styling, including layout with flexbox, image styling, text presentation, and background properties.

## 📁 File Structure

hometown-homepage/
├── index.html         # Main page structure and content
├── styles.css         # All styling rules and visual presentation
└── images/            # Directory for all images used on the site
    ├── avenue.jpg
    ├── city.jpg
    ├── market.jpg
    ├── park.jpg
    └── bruno.jpg

## 🚀 CSS Concepts Applied

- `display: flex` and `flex-direction`: Used in the header, places section, and footer for flexible and organized content arrangement.
- `align-items` and `justify-content`: Utilized for precise alignment of items within flex containers, such as centering content in the header and footer.
- `background-image` and `background-size: cover`: Applied to the header to include a full-width background image.
- `border-radius`: Used on images within the `#places` section to create circular shapes.
- `text-shadow`: Added to `h1` and `h2` elements within the header for a visual effect.
- Grouping Selectors: Examples include `h1, h2` in the header for applying common text styles, and `*` for universal box-sizing.