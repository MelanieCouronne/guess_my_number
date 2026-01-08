![Readme banniere (1)](https://github.com/user-attachments/assets/32ca5569-774b-4a2f-a292-74a593d16c8a)

<br><br>


# 🎮 Guess My Number — Vanilla JS Edition

Petit jeu rétro où il faut deviner un nombre entre 1 et 20.
Simple en apparence, mais volontairement écrit en JavaScript vanilla, sans framework, sans build, sans dépendances.

## 📑 Sommaire

- [✨ Pourquoi du JavaScript vanilla ?](#-pourquoi-du-javascript-vanilla-)
- [🕹️ Règles du jeu](#️-règles-du-jeu)
- [🧱 Stack](#-stack)
- [📁 Architecture](#-architecture)
- [🚀 Lancer le projet](#-lancer-le-projet)
- [🧠 Objectifs personnels](#-objectifs-personnels)

## ✨ Pourquoi du JavaScript vanilla ?

J'ai lu récemment [un article sur Medium](https://blog.stackademic.com/why-netflix-shifted-part-of-its-frontend-from-react-to-vanilla-javascript-905cf9688498) qui explique pourquoi Netflix a migré une partie de son frontend de React vers du JavaScript vanilla, notamment pour améliorer les performances et réduire la complexité.

⚠️ **Évidemment, aucune comparaison possible entre Netflix et ce petit jeu.**

Mais ça m'a rappelé une chose essentielle :
👉 **maîtriser le JavaScript "pur" reste fondamental.**

Ce projet est donc un exercice volontaire de révision et de structuration du JS, sans béquille.

## 🕹️ Règles du jeu

- Un nombre secret est généré entre **1 et 20**
- Tu disposes de **5 essais**
- À chaque tentative :
  - ⬆️ Too high!
  - ⬇️ Too low!
- Trouve le bon nombre avant d'épuiser ton score
- Le **highscore** est conservé pendant la session

## 🧱 Stack

- **HTML5**
- **CSS3** (style rétro / pixel-art)
- **JavaScript Vanilla ES Modules**

Aucune dépendance externe.
Aucun framework.
Aucun build.

## 📁 Architecture

```
GUESS_MY_NUMBER/
├─ assets/
├─ css/
│  ├─ base.js
│  ├─ bye.js
│  ├─ index.js
│  └─ variables.js
├─ js/
│  ├─ bye.js
│  ├─ game.js
│  ├─ main.js
│  ├─ modal.js
│  ├─ transition.js
│  ├─ ui.js
│  └─ utils.js
├─ bye.html
├─ index.html
└─ README.md
```

**Organisation du code :**

- `game.js` → logique métier
- `ui.js` → gestion du DOM
- `main.js` → orchestration
- séparation claire des responsabilités


## 🚀 Lancer le projet

Il suffit d'ouvrir `index.html` dans un navigateur moderne.
**(Aucun serveur requis.)**

Ou via un serveur local :

```bash
# Avec Node.js (si npx est installé)
npx serve
```

Puis ouvrir : `http://localhost:8000`

## 🧠 Objectifs personnels

- revoir les bases du JS moderne
- structurer un projet sans framework
- travailler les animations CSS rétro
- garder le code lisible et maintenable
