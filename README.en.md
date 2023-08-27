
# LaslesVPN
[Leer esto en español](https://github.com/OrnellaGrigolato/LaslesVPN/blob/master/README.md)

LaslesVPN is a landing page that promotes a company's product.




## Working App

![Working App](https://github.com/OrnellaGrigolato/LaslesVPN/blob/master/LaslesVPN.gif)


## Sections & Features

- Navigation Bar.
    - Mobile animated hamburger menu.
- Plans section.
    - Content obtained from API.
    - Button to update plans, with feedback message.
    - Hover effect.
- Carousel.
    - Content obtained from an API.
    - Navigation buttons that toggle on and off.
    - Navigation through the dots.
    - Possibility to move by dragging.
- Contact form.
    - Form validation.
    - Feedback messages to the user.
    - Sending information to an API.

- And more.
    - Page adaptable to mobile devices.
    - Button hover animation.
    - Favicon with company logo.
    - Error page for invalid urls.
    - Links to the company's social networks.
    - Date of copyrigth notice is updated automatically.
    - Twitter logo updated.


## Libraries

LaslesVPN is built with [Typescript](https://www.typescriptlang.org/), [React](https://es.react.dev/) y [TailwindCSS](https://tailwindcss.com/), but also uses some libraries:

- [Embla Carousel](https://www.embla-carousel.com/), to create a carousel component
- [React Hook Form](https://www.react-hook-form.com/) and [Yup](https://www.npmjs.com/package/yup), to validate the form
- [Classnames](https://www.npmjs.com/package/classnames), to place dynamic classes at the points of the carousel
- [React Router Dom](https://reactrouter.com/en/main), to create the navigation of the page
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction), to provide feedback messages to the user.

## How I worked on this project

My goal was to simulate a professional working environment 👩🏻‍💻.

I based it on a [Figma design](https://www.figma.com/proto/IbAF9epoUByHcZ2GpV8QSU?type=design&node-id=0-1&mode=design&t=IWCweJbHxXzSZ94B-6), trying to comply with the 'pixel perfect' concept.

I separated each requirement into subtasks.

I wrote tidy and reusable code, separated components into folders and followed the DRY (Don't Repeat Yourself) principle.



## How to navigate this project: its most interesting parts


- API calls: [Code 1](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/Plan%20Section/PlanSection.tsx#L20) and [Code 2](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/CarruselSection/Carrusel.tsx#L52)

- Form validation: [Code](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/Form%20Section/FormSection.tsx#L10)

- Dynamic carousel point styles: [Code](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/CarruselSection/Dots.tsx#L15)

## What else would I add to this project? 🚀

In the future I would like to work on the missing pages, creating a design from scratch and integrating them into the site. I would add the function to start section and register, the possibility to buy, etc.


## Installation

1. Fork and clone the repository.

2. Standing at the root of the project run the command
   ```
   npm install
   ```

    to install all project dependencies.

3. Use

   ```
   npm run dev
   ```

    to run the project.



    