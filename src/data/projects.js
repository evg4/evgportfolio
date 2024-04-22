import evgtrans from "../assets/EVGTranslations.JPG";
import reddit from "../assets/reddit-mini.JPG";
import recipe from "../assets/recipe-blog.JPG";
import jammming from "../assets/Jammming.PNG";
import portfolio from "../assets/portfolio.PNG";

const projects = [
  {
    title: "EVG Translations",
    date: "28.12.23",
    languages: "HTML, CSS, JavaScript, React",
    description: "Website for my translation business.",
    details:
      "I built this React website to use for my translation business. I already had a domain name which I'd purchased previously, so after deploying with Netlify, I changed the DNS settings to point the domain to this new website, which is in place until January 2025. Thereafter it will be accessible only via the netflify address.",
    image: evgtrans,
    link: "https://evg-translations.netlify.app/",
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
  },

  {
    title: "Portfolio",
    date: "10.07.23",
    languages: "HTML, CSS, JavaScript",
    description: "Coding portfolio.",
    details:
      "This was my first portfolio, built using plain HTML, CSS and JavaScript. The first version only had a few things on the Projects page, but as I completed more webpages, I wanted to keep adding them. The page began to look crowded, and I also realised React would be a much more efficient way to build this, so I replaced it with this website. But I was really proud of this when I first created it, as it was one of my first major projects, so I am including it here!",
    image: portfolio,
    link: "https://evg-redditmini.netlify.app/",
  },
];

export default projects;
