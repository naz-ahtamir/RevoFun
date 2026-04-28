# RevoFun - Mandarin Learning Game Platform

RevoFun is a static website that offers an interactive gaming platform for learning Mandarin Chinese vocabulary and numbers. The site features four browser-based games designed to make language practice engaging and accessible.

## Live Demo

A live version of the project can be accessed at:  
[https://naz-ahtamir.github.io/RevoFun/](https://naz-ahtamir.github.io/RevoFun/)  

## Overview

The website presents a landing page with a hero section, game cards, an about section, and a footer. Each game card links to a dedicated game page where users can play and improve their Mandarin skills. The design uses a custom font (Bobby Jones) and Tailwind CSS for styling, with smooth animations and responsive layout.

## Features

- Hero section with branding and call-to-action buttons
- Four game cards:
  - Memory Match: Match Hanzi with their meanings
  - Vocabulary Quiz: Multiple-choice vocabulary test
  - Number Guess: Guess numbers 1-100 with hints in Mandarin
  - Mandarin Catcher: Catch falling Mandarin words
- Responsive grid layout for game cards
- Custom floating animations for each card
- About section describing the studio's mission
- Footer with social media links and copyright notice

## Technologies

- HTML5
- Tailwind CSS (via CDN)
- Font Awesome 6 (icons)
- Custom web font (Bobby Jones)
- CSS keyframe animations

## Project Structure

```
project-root/
├── index.html
├── pages/
│   ├── AturanMC.html               (Mandarin Catcher Game Instruction)
│   ├── Mandarin Catcher.html       (Mandarin Catcher game page)
│   ├── AturanMM.html               (Memory Match Game Instruction)
│   ├── MemoryMatch.html            (Memory Match game page)
│   ├── AturanNG.html               (Number Guess Game Instruction)
│   ├── NumberGuess.html            (Number Guess game page)
│   ├── AturanVQ.html               (Vocabulary Quiz Game Instruction)
│   └── VocabularyQuiz.html         (Vocabulary Quiz game page)
├── images/
│   ├── bg-index.png         (background image)
│   ├── favicon-new.png      (favicon)
│   ├── name-logo-revofun.png (navbar logo)
│   └── name-revofun.png     (hero and about logo)
├── fonts/
│   └── BobbyJones.woff2     (custom font)
└── README.md
```

## Setup and Usage

1. Clone or download the repository.
2. Ensure all asset paths match the structure above.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
4. Click on any game card to navigate to the corresponding game page.
5. No build step or server required – the site runs entirely on the client side.

## Customization

- Colors: Modify the Tailwind classes directly in `index.html` (e.g., `bg-[#042165]`, `text-[#F59231]`).
- Game links: Update the `href` attributes in each game card to point to your actual game page URLs.
- Font: Replace `BobbyJones.woff2` with your own font or adjust the `@font-face` rule.
- Content: Edit text in the hero, about, or game card descriptions as needed.

## Compatibility

The website is compatible with all modern browsers that support CSS Grid, Flexbox, `@font-face`, and Tailwind CSS (baseline: Chrome 49+, Firefox 52+, Safari 10+, Edge 16+). Internet Explorer is not supported.

## License

This project is proprietary. All rights reserved.

---

Created by naz-ahtamir | 2026 RevoFun