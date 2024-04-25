# Mmeory with cards

[View live project here on Github Pages]()

Memory with cards is a matching card game built with HTML, CSS, and JavaScript. The aim of the game is to enjoy playing with a deck of playing cards in a non-competitive, relaxed environment where goal is to match as many pairs as you can withinn a specified time-frame with the same value and colour in RED or BLACK. Hence _Diamonds_ and _Hearts_ are considered matching pairs, as well as _Clover_ and _Spades_. This is my first JavaScript project built for the Code Institute's Full Stack Software Development course.

<br>

![screenshot of webpage on various media devices]()

* [UXD (User Experience Design)](#user-experience-ux)
  * [User Stories](#user-stories) 
  * [Wireframes](#wireframes)
* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Accessibility](#accessibility)
* [Page Features](#page-features)
* [Future Features](#future-features)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Technologies & Programs Used](#technologies--programs-used)
* [Deployment](#deployment)
* [Testing](#testing)  
  * [Bugs](#bugs)
* [Credits](#credits) 


## User Experience (UX)

### **User Stories**

### **Primary Goal**

Memory with cards is an online memory card game styled with a clean and user friendly design. It is suitable for all ages. The game aims to provide a relaxed, memory-enhancing experience.

### **User/Visitor Goals**

Memory with cards has been designed to be easily accessible and fun for all ages. It is a grid-style card game where the user is expected to flip matching cards and keep them locked before the tie is up. This is testing the users memory skills. Design and styling will be responsive to different media screen sizes. A preset timer iniates a counter as the user press the start button. When the time is up a message of "Time up" is displayed for the user.

### **First-Time User/Visitor**

  - As a first-time user, I want to know the rules of the game.
  - As a first-time user, I want to choose when to start the game.
  - As a first-time user, I want to test my ability and improve my progress.
  - As a first-time user, I want positive feedback when I complete the game.

### **Returning User/Visitor**

  - As a returning user, I want to be able to set up the gameboard in diferent levels; _Easy_, _Medium_ or _Hard_.
  - As a returning user, I want to be able to configure my game with at least three different amount of cards; 16, 36 and 52.
  - As a returning visitor, I want to be able to play the game on different devices.
  - As a returning visitor, I want to be able to reset the game screen quickly if I share it with another user for their try.
  
<br>  

---  

## Creation Process

### **1. Strategy**

My goal was to build an interactive, memory game suitable for all ages. I wished to use a deck of cards to set up an easy and familiar styling of the game. The theme is also to some extent a follow-up to my previous PP1 project in mind, where created website for a poker club. I was happy to see this as continuation and learn how to create various games adapted for such a website.

  - The user will are able to familiarise themselves with the game rules before setting up the gameboard with various levels and time frames. 
  - The user can develop their memory skills by advancing in levels and shorter time intervalls. 

### **2. Scope**

The game must be responsive and playable on mobile, tablet, and desktop-sized devices.

### **3. Structural** 

  - The player is informed of the rules via a modal window accessible via a _Game Info_ button in the Header.
  - Buttons gives the player options with various levels of the game.
  - The layout and design of the gameboard does not change much between screen sizes to keep the experience consistent.

### **4. Skeleton**

The game site will have a clean layout with every feature identifiable and interactive.

  - On loading, the page display the easiest level of the gameboard with 16 cards already shuffled. A preset timer will automatically begin to count as the tsart game button is clicked. A responisve modal or menu will also offer optional settings. 
  - The gameboard is situated in the center of the screen with the size of 4x4 gamecards displayed.
  - _Timer/counter_ are located above the gameboard to the right for larger screens and on top for smaller screens.
  - A _Reset_ button is located to the left, nest to the modal and and _Game Info_ button.
  - A message of "TIME UP" is displayed where the Timer is also displayed. 

  ### **Wireframes**  
  
The wireframes were created in Figma.

<details open>
<summary>Wireframe - Desktop main window</summary>

![main desktop window wireframe]()
</details>
<details open>
<summary>Wireframe - Desktop Start modal window</summary>

![desktop start modal wireframe](docs/images/)
</details>
<details>
<summary>Wireframe - Desktop Win modal window</summary>

![desktop win modal wireframe](docs/images/)
</details>
<details>
<summary>Wireframe - Desktop Gameboard</summary>

![gameboard wireframe](docs/images/)
</details>

<details open>
<summary>Wireframe - Mobile main window</summary>

![main mobile window wireframe](docs/images)
</details>
<details >
<summary>Wireframe - Mobile Start window</summary>

![main desktop window wireframe](docs/images/)
</details>
<details >
<summary>Wireframe - Mobile Win window</summary>

![main desktop window wireframe](docs/images/)
</details>  

<br>  

## Design

### **Colour Scheme**

I used my own preferences to to select colours with clean and distinctive colours in order to to create the gameboard palette with clear contrasts and a user friendly experience.

![gameboard colour palette swatch](docs/images)
_Colour palette for the gameboard_

<br>

### **Typography**  

I chose the serif font 'Rubik' from [Google Fonts](https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap) i find the the font clean and easy to read, therefore it is used throughout the project.

![screenshot of google font inknut example](docs/images/)

### **Imagery**

I wished to use a wellknown and a familiar card style and gathered a selection of copyright-free images used in a previous PP2 project by ........XXXXXXXXXX

![selection of cards front and back](docs/images/)

<br>
































![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome Tell Aulin,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **September 1, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------





#

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
