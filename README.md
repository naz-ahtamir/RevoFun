# RevoFun - Mandarin Learning Game Platform

RevoFun is a static website that offers an interactive gaming platform for learning Mandarin Chinese vocabulary and numbers. The site features four browser-based games designed to make language practice engaging and accessible.

## Live Demo

A live version of the project can be accessed at:  
[https://naz-ahtamir.github.io/RevoFun/](https://naz-ahtamir.github.io/RevoFun/)

## Overview

The website presents a responsive landing page with a hero section, game cards, an about section, and a footer. Each game card links to a dedicated game rules page, which then leads to the actual game. The design uses a custom font (Bobby Jones) and Tailwind CSS for styling, with smooth animations and responsive layout.

### Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Landscape Mode**: All game pages force landscape orientation on mobile devices
- **Mobile Menu**: Hamburger menu for mobile devices with smooth transitions
- **Custom Animations**: Floating animations for cards and logos
- **Touch-Friendly**: Optimized touch interactions for mobile devices

### Games

1. **Memory Match**: Match Hanzi characters with their meanings and pinyin
2. **Vocabulary Quiz**: Multiple-choice vocabulary test with HSK levels
3. **Number Guess**: Guess numbers 1-100 using Mandarin hints
4. **Mandarin Catcher**: Catch falling Mandarin words in a basket

### Technologies

- HTML5
- Tailwind CSS v4 (via CDN)
- Font Awesome 6 (icons)
- Custom web font (Bobby Jones)
- CSS keyframe animations
- Vanilla JavaScript

## Project Structure

```
project-root/
├── index.html                      (Landing page with hero, games, about, footer)
├── pages/
│   ├── GameRules.html              (Game rules/instructions page)
│   ├── GameRules.js                (Game rules logic)
│   ├── MandarinCatcher.html        (Mandarin Catcher game page)
│   ├── MandarinCatcher.js          (Mandarin Catcher game logic)
│   ├── MemoryMatch.html            (Memory Match game page)
│   ├── MemoryMatch.js              (Memory Match game logic)
│   ├── NumberGuess.html            (Number Guess game page)
│   └── NumberGuess.js              (Number Guess game logic)
│   ├── VocabularyQuiz.html         (Vocabulary Quiz game page)
│   └── VocabularyQuiz.js           (Vocabulary Quiz game logic)
├── images/
│   ├── bg-index.webp               (Landing page background)
│   ├── bg-mandarin-catcher.webp    (Mandarin Catcher background)
│   ├── bg-memory-match.webp        (Memory Match background)
│   ├── bg-number-guess.webp        (Number Guess background)
│   ├── bg-vocabulary-quiz.webp     (Vocabulary Quiz background)
│   ├── favicon-new.webp            (Favicon)
│   ├── logo-revofun.webp           (Logo for game pages)
│   ├── name-logo-revofun.webp      (Navbar logo)
│   └── name-revofun.webp           (Hero and about section logo)
├── fonts/
│   └── BobbyJones.woff2            (Custom font)
└── README.md
```

## Setup and Usage

1. Clone or download the repository.
2. Ensure all asset paths match the structure above.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
4. Click on any game card to navigate to the game rules page.
5. Click "Mulai Bermain" to start the game.
6. No build step or server required – the site runs entirely on the client side.

## Responsive Features

### Mobile Devices (≤768px)
- Hamburger menu for navigation
- Smaller font sizes and spacing
- Touch-friendly button sizes
- Landscape mode forced for all games

### Tablet Devices (769px-1024px)
- Responsive grid layout for game cards
- Adjusted font sizes and spacing
- Landscape mode forced for all games

### Desktop Devices (>1024px)
- Full navigation menu
- Optimized layout with larger elements
- Landscape mode forced for all games

## Customization

- **Colors**: Modify the Tailwind classes directly in HTML files (e.g., `bg-[#042165]`, `text-[#F59231]`)
- **Game links**: Update the `href` attributes in game cards to point to your actual game page URLs
- **Font**: Replace `BobbyJones.woff2` with your own font or adjust the `@font-face` rule
- **Content**: Edit text in the hero, about, or game card descriptions as needed

## Browser Compatibility

The website is compatible with all modern browsers that support CSS Grid, Flexbox, `@font-face`, and Tailwind CSS (baseline: Chrome 49+, Firefox 52+, Safari 10+, Edge 16+). Internet Explorer is not supported.

## License

This project is proprietary. All rights reserved.

---

Created by naz-ahtamir | 2026 RevoFun
