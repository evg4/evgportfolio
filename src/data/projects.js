import evgtrans from "../assets/EVGTranslations.JPG";
import reddit from "../assets/reddit-mini.JPG";
import recipe from "../assets/recipe-blog.JPG";
import jammming from "../assets/Jammming.PNG";
import portfolio from "../assets/portfolio.PNG";

import jammmingVid from "../assets/jammming.mp4";

const projects = [
  {
    title: "EVG Translations",
    date: "28.12.23",
    languages: "HTML, CSS, JavaScript, React",
    description: "Website for my translation business.",
    details:
      "When I was still learning to code, and before I’d got my first tech job, I was working as a freelance translator. I had a website that I’d created with Squarespace, but decided to build my own. It was the first website I created that actually had a purpose other than practising, so it felt really exciting when it went live! <br> I built <a target=_blank href='https://evg-translations.netlify.app/'>EVG Translations</a> using React, with React Routing for navigation. <br> I only needed the website to act as a landing page to inform clients of my services, so there is no interactivity. I would have liked to include a form on the contact page which automatically sent a message to my email inbox, though that was beyond my capabilities.<br> The website is fully responsive and can be viewed on a desktop or mobile device; this proved the most challenging part as there were a lot of breakpoints.<br> I already had a domain name which I'd purchased previously, so after deploying with Netlify, I changed the DNS settings to point the domain to this new website, which is in place until January 2025. Thereafter it will be accessible only via the netlify address. That was another learning curve as I'd never dealt with a custom domain before, but with the help of people on Twitter and the Squarespace help pages, I managed to do it.<br>I am no longer working as a translator, but I wanted to keep the website live for my coding portfolio. I added a yellow banner at the top to inform visitors of this; other than that, the site is exactly how it was when I first built it.",
    image: evgtrans,
    link: "https://evg-translations.netlify.app/",
    video: "",
  },
  {
    title: "Redditmini",
    date: "07.11.23",
    languages: "HTML, CSS, JavaScript, React, Redux",
    description: "Reddit clone using the Reddit API.",
    details:
      "I created this React-Redux app to practise all skills learned so far, including async thunks and a store to manage state. I use CSS animations during the loading states. It connects to the Reddit API; users can click on pre-defined categories (subreddits) or enter a search term.",
    image: reddit,
    link: "https://evg-redditmini.netlify.app/",
    video: "",
  },
  {
    title: "Recipe blog",
    date: "21.09.23",
    languages: "HTML, CSS, JavaScript, React",
    description: "Recipe blog using React Routing.",
    details:
      "I created this React app to practise using React Routing as well as solidify knowledge on other React concepts.",
    image: recipe,
    link: "https://evg-recipe-blog.netlify.app/",
    video: "",
  },
  {
    title: "Jammming",
    date: "30.08.23",
    languages: "HTML, CSS, JavaScript, React",
    description: "React app which connects to the Spotify API.",
    details:
      "The aim of this project was to combine all skills learned so far in one React app.",
    image: jammming,
    link: "",
    video: jammmingVid,
  },

  {
    title: "Portfolio",
    date: "10.07.23",
    languages: "HTML, CSS, JavaScript",
    description: "My first coding portfolio.",
    details:
      "This was my first portfolio, built using plain HTML, CSS and JavaScript. The first version only had a few things on the Projects page, but as I completed more webpages, I wanted to keep adding them. The page began to look crowded, and I also realised React would be a much more efficient way to build this, so I replaced it with this website. But I was really proud of this when I first created it, as it was one of my first major projects, so I am including it here!",
    image: portfolio,
    link: "https://evg4.github.io/index.html",
    video: "",
  },
];

export default projects;
