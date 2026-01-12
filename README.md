![Readme banniere (1)](https://github.com/user-attachments/assets/32ca5569-774b-4a2f-a292-74a593d16c8a)

<br><br>


# 🎮 Guess My Number — Retro Edition

Petit jeu rétro développé en JavaScript vanilla, conçu comme un terrain d'expérimentation autour des fondamentaux du web : logique métier, manipulation du DOM, accessibilité, animations CSS et structuration du code sans framework.

## ✨ Présentation

Le principe est simple : deviner un nombre compris entre 1 et 20 avec un nombre limité de tentatives.

Ce projet est volontairement sobre côté fonctionnalités, afin de mettre l'accent sur :

- la qualité du code
- l'expérience utilisateur
- l'accessibilité
- et la cohérence visuelle

L'interface s'inspire de l'esthétique retro-gaming / pixel art, avec des animations glitch et une ambiance volontairement minimaliste.

## 🧠 Pourquoi du JavaScript vanilla ?

Ce projet a été développé sans framework volontairement.

L'idée est née d'une réflexion personnelle autour des performances et de la maîtrise des fondamentaux. Netflix a notamment fait le choix de re-coder entièrement sa plateforme en JavaScript vanilla pour des raisons de performance et de contrôle fin du rendu.

Sans aucune comparaison, ce projet s'inscrit dans la même logique à une autre échelle : 👉 revenir aux bases pour mieux comprendre ce que font les frameworks.

C'est aussi une manière de réviser et consolider :

- la gestion du DOM
- les événements
- l'état de l'application
- le focus et le clavier
- les animations CSS

## 🛠️ Stack technique

- HTML5 sémantique
- CSS3
  - animations (steps, glitch, transitions)
  - design pixel-art
  - architecture BEM
- JavaScript ES6+
  - modules ES
  - fonctions pures pour la logique métier
  - séparation logique / UI
- Aucune dépendance externe

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
│  ├─ bye.js           → orchestration page "Bye"
│  ├─ game.js          → logique métier
│  ├─ main.js          → point d'entrée et orchestration
│  ├─ modal.js         → gestion de la modale de fin de jeu
│  ├─ transition.js    → transition entre les pages
│  ├─ ui.js            → manipulation du DOM et affichage
│  └─ utils.js         → logique réutilisable
├─ bye.html
├─ index.html
└─ README.md
```

Cette organisation permet :

- une meilleure lisibilité
- une séparation claire des responsabilités
- une évolution possible sans refactor massif

## ♿ Accessibilité

Une attention particulière a été portée à l'accessibilité :

- navigation clavier complète
- gestion du focus (modale incluse)
- utilisation de `aria-live` pour les messages dynamiques
- usage de l'attribut `inert` pour éviter les pièges de focus
- contrastes lisibles et tailles de texte adaptées

## 🎬 Expérience utilisateur

- feedback visuel immédiat (glitch, couleurs, animations)
- gestion claire des erreurs
- modale de fin de jeu accessible
- page "Bye" dédiée pour une sortie volontaire du jeu
- transitions douces entre les états et les pages

## 🚀 Lancer le projet

Aucune installation requise.

```
# ouvrir simplement index.html dans un navigateur
```

## 🎯 Objectifs du projet

- Revoir les bases du JavaScript moderne
- Travailler sans framework
- Mettre en pratique l'accessibilité web
- Construire une petite application cohérente de bout en bout
- Explorer une direction artistique personnelle

## 📝 À propos

Ce projet fait partie de mon portfolio de développeuse web. Il ne cherche pas à démontrer une complexité technique excessive, mais plutôt une approche réfléchie, propre et maîtrisée du développement.


## 📷 Visuel
<img width="1512" height="827" alt="Guess-My-Number" src="https://github.com/user-attachments/assets/f15db3a1-8bef-42ca-a845-b4356a3426b1" />


