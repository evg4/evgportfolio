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
      "When I was still learning to code, and before I'd got my first tech job, I was working as a freelance translator. I had a website that I'd created with Squarespace, but decided to build my own. It was the first website I created that actually had a purpose other than practising, so it felt really exciting when it went live! <br> I built <a target=_blank href='https://evg-translations.netlify.app/'>EVG Translations</a> using React, with React Routing for navigation. <br><br><strong>How it works:</strong> <br>I only needed the website to act as a landing page to inform clients of my services, so there is no interactivity. Users can simply click the different pages to read more about me and my services. It is fully responsive and can be viewed on mobile devices as well as larger screens.<br> I am no longer working as a translator, but I wanted to keep the website live for my coding portfolio, so I added a yellow banner at the top to inform visitors of this. Other than that, the site is exactly how it was when I first built it.<br>I would have liked to include a form on the contact page which automatically sent a message to my email inbox, though that was beyond my capabilities.<br><br><strong>Challenges:</strong> <br>The website had a lot of breakpoints so making it fully responsive was a challenge and took a little while, but I’m pleased with how it turned out as I managed to get everything fairly consistent.<br>Another learning curve came when I deployed the finished site. I already had a domain name which I'd purchased previously, so after deploying with Netlify, I changed the DNS settings to point the domain to this new website. I'd never dealt with a custom domain before, but with the help of people on Twitter and the Squarespace help pages, I managed to do it. The custom domain is in place until January 2025. Thereafter it will be accessible only via the Netlify address.<br><br><strong>Learnings:</strong><br>Once again, I was reminded of the importance of planning. I realised whilst slogging away with the breakpoints that it would have been easier if I’d decided on the fonts and sizes beforehand.<br> I also learnt how to use the details and summary HTML elements to create an accordion menu.",
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
      "I created <a target=_blank href='https://evg-redditmini.netlify.app/'>Redditmini</a> as part of the Codecademy Front-End Engineer path. The brief was to connect to the Reddit API (an undocumented JSON API) to present a subset of Reddit data, using Redux to manage state and async thunks to handle the API call. I also made use of CSS animations for the loading states. <br>I started this project twice; the first time, I hadn’t planned very well and got confused with what I was doing, so made the decision to scrap everything and start from scratch. It was the first time I did that in a project but I’m glad it did as it gave me a fresh perspective.<br><br><strong>How it works:</strong> <br>On first loading, the page view defaults to show posts from the r/popular subreddit. Users can click on a subreddit from the left panel to view those posts, or type a search term. Clicking on a post from a list will show a more detailed view of the post, including comments.<br><br><strong>Challenges:</strong> <br>Challenges involved working out the best way to consistently display data, especially considering some posts had thumbnails only, some had better quality pictures, some had videos, and some had no images at all. I decided on using if/else statements to render something different depending on what the data was, but this may not be the best approach. Another challenge was that the sound does not play in the videos. This problem was also faced by other learners completing the same project. This is one thing I would like to come back to because, although sound isn’t essential to the functioning of the website, it would be better if it worked.<br><br><strong>Learnings:</strong><br>This was a great reminder in the importance of planning. If I’d done a more thorough plan I wouldn’t have had to restart. I also learnt some new skills such as .getAttribute(), which I was able to use in an event handler, and how to use markdown in React. This was necessary as some of the Reddit posts were written in markdown so I had to ensure they rendered correctly.",
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
