# Frontend Mentor - Advice generator app solution (React JS + Vite and Tailwind CSS)

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

Desktop 1440px
[![localhost-5173.png](https://i.postimg.cc/5NCSx9JQ/localhost-5173.png)](https://postimg.cc/Whsk8vhs)

Mobile 375px <br>
[![localhost-5173-1.png](https://i.postimg.cc/j5DZPzpZ/localhost-5173-1.png)](https://postimg.cc/2bfQfB8Z)

### Links

- Live Site URL: https://advice-generator-app-frontend-mentor-omega.vercel.app

## My process

### Built with

- HTML5
- React - JS library
- Tailwind CSS - For styles

### What I learned

Set up API, fetching advice and ID.

To see how you can add code snippets, see below:

```js
const [advice, setAdvice] = useState("");
const [adviceId, setAdviceId] = useState("");

useEffect(() => {
  fetchAdvice();
}, []);

const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    })
    .catch((error) => console.error("Error fetching advice:", error));
};

const getRandomAdvice = () => {
  fetchAdvice();
};
```

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->
- Frontend Mentor - [@ncece11](https://www.frontendmentor.io/profile/ncece11)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
