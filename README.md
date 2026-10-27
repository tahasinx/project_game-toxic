# TOXIC

### Can you survive 30 days in the apocalypse?

**TOXIC** is a browser-based survival game about managing scarce supplies, building a capable survivor, and making it to rescue. Every day is a trade-off: spend resources to stay healthy, or take risks to scavenge and improve your chances.

> **Optimized by TAHASINX**

## Play locally

No build step or package installation is required. Serve the project folder with any static HTTP server. For example, with Python:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## How to play

1. Click the intro screen to begin.
2. Create a survivor. Randomize their name, age, appearance, career, and traits, or reroll individual details.
3. Manage health, hunger, thirst, fatigue, food, water, medicine, and experience.
4. Choose when to eat, drink, heal, rest, or scavenge. Scavenging can bring supplies and experience, but costs energy and exposes you to danger.
5. Spend experience in Training to improve skills.
6. Survive until rescue arrives on day 30.

Running out of health—or letting hunger or thirst go unchecked—can end a run early.

## Project layout

```text
.
├── index.html
└── assets/
    ├── audio/       # Sound effects and music
    ├── css/         # Game styles
    ├── fonts/       # Local typefaces
    ├── icons/       # Favicon and UI icons
    ├── images/      # Backgrounds, characters, and game artwork
    └── js/          # Game logic, game data, and jQuery
```

All game resources are served locally; the game does not need external CDNs to run.

## Built with

- HTML, CSS, and vanilla JavaScript
- jQuery for DOM interactions
- Canvas-based atmospheric grain effect

## Credits

**OPTIMIZED BY TAHASINX**
