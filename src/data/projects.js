import evgtrans from "../assets/EVGTranslations.JPG";
import reddit from "../assets/reddit-mini.JPG";
import recipe from "../assets/recipe-blog.JPG";

const projects = [
    {
        title: "EVG Translations", 
        date: "28.12.23",
        languages: "HTML, CSS, JavaScript, React", 
        description: "Website for my translation business.", 
        details: "I built this React website to use for my translation business. I already had a domain name which I'd purchased previously, so after deploying with Netlify, I changed the DNS settings to point the domain to this new website, which is in place until January 2025. Thereafter it will be accessible only via the netflify address.", 
        image: evgtrans, 
        link: "https://evg-translations.netlify.app/"
    },
    {
        title: "Redditmini", 
        date: "07.11.23",
        languages: "HTML, CSS, JavaScript, React, Redux", 
        description: "Reddit clone using the Reddit API.", 
        details: "I created this React-Redux app to practise all skills learned so far, including async thunks and a store to manage state. I use CSS animations during the loading states. It connects to the Reddit API; users can click on pre-defined categories (subreddits) or enter a search term.", 
        image: reddit, 
        link: "https://evg-redditmini.netlify.app/"
    },
    {
        title: "Recipe blog", 
        date: "21.09.23",
        languages: "HTML, CSS, JavaScript, React", 
        description: "Recipe blog using React Routing.", 
        details: "I created this React app to practise using React Routing as well as solidify knowledge on other React concepts.", 
        image: recipe, 
        link: "https://evg-recipe-blog.netlify.app/"
    }
]

export default projects;