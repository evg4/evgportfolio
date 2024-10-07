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
      "When I was still learning to code, and before I'd got my first tech job, I was working as a freelance translator. I had a website that I'd created with Squarespace, but decided to build my own. It was the first website I created that actually had a purpose other than practising, so it felt really exciting when it went live! <br> I built <a target=_blank href='https://evg-translations.netlify.app/'>EVG Translations</a> using React, with React Routing for navigation. <br><br><strong>How it works:</strong> <br>I only needed the website to act as a landing page to inform clients of my services, so there is no interactivity. Users can simply click the different pages to read more about me and my services. It is fully responsive and can be viewed on mobile devices as well as larger screens.<br> I am no longer working as a translator, but I wanted to keep the website live for my coding portfolio, so I added a yellow banner at the top to inform visitors of this. Other than that, the site is exactly how it was when I first built it.<br>I would have liked to include a form on the contact page which automatically sent a message to my email inbox, though that was beyond my capabilities at the time.<br><br><strong>Challenges:</strong> <br>The website had a lot of breakpoints so making it fully responsive was a challenge and took a little while, but I’m pleased with how it turned out as I managed to get everything fairly consistent.<br>Another learning curve came when I deployed the finished site. I already had a domain name which I'd purchased previously, so after deploying with Netlify, I changed the DNS settings to point the domain to this new website. I'd never dealt with a custom domain before, but with the help of people on Twitter and the Squarespace help pages, I managed to do it. The custom domain is in place until January 2025. Thereafter it will be accessible only via the Netlify address.<br><br><strong>Learnings:</strong><br>Once again, I was reminded of the importance of planning. I realised whilst slogging away with the breakpoints that it would have been easier if I’d decided on the fonts and sizes beforehand.<br> I also learnt how to use the details and summary HTML elements to create an accordion menu.",
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
      "A big part of the Codecademy Front End Engineering path was learning React. As it’s such a broad topic, I tried to build as many projects as I could to practise key concepts. I created this <a target=_blank href='https://evg-recipe-blog.netlify.app/'>recipe blog</a> to get to grips with React Routing. I included four different pages, a header with navigation bar, and a footer to give it the feel of a full website, but the majority of the work is on the Recipes page.<br> I used searchParams to sort the list of recipes in different ways, and createSearchParams to filter the list. I also made use of useNavigate to create a Back button.<br><br><strong>How it works:</strong> <br>On the Recipes page, the user can click on a recipe from the list to navigate to a new page with that recipe. A Back button takes them back to the main page. They can sort the list alphabetically or reverse alphabetically, or reset it to the original order. They can also enter a search term and then they press Search, the list will be filtered to bring back only relevant results. There is also error handling to display a message to the user if no results are returned. <br><br><strong>Challenges:</strong> <br> As expected, the main challenge with this project was setting up the logic for the recipe list correctly. By this point, I was comfortable with the basic setup of a React app and how to handle headers, footers and nav bars, but getting used to useParams and learning how to implement the functionality for the search took a bit of concentration!<br><br>I also had some issues deploying to Netlify; if I clicked the links from my site everything worked fine, but if I manually typed into the address bar I was getting an error. I did some googling and discovered there was an easy fix to this by adding a _redirects file to my repo.<br><br> <strong>Learnings:</strong><br> As well as learning how to handle the issues when deploying to Netlify as mentioned above, this was the first project where I used a custom favicon for the browser tab. I realised everything I created with createreactapp had a default image, so I worked out how to update it to reflect my own project.",
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
      "Jammming was a really fun project to work on that uses the Spotify API to allow users to create a new playlist and save it to their Spotify account. Unfortunately it’s not possible to deploy it due to limitations on how many people can use the authorisation, but the video above shows it in action.<br><br><strong>How it works:</strong> <br>Upon first accessing the site, a user must log in using their Spotify credentials. They then see a header with instructions and a search bar. They can type in a search term and press Search, and this brings up a list of songs that match the search term. By clicking the + on each song, they are added to the playlist on the right. Users can then rename the playlist, remove songs, and finally save it to their Spotify account. There is also appropriate error handling to display messages to the user if they are trying to do something that won’t work (e.g. press Search without entering a search term).<br><br><strong>Challenges:</strong> <br>This was the largest project I’d worked on so far and the first that involved an API call, so there were plenty of challenges along the way, but I really enjoyed it. Although the Codecademy course had covered GET requests, I found that there were some gaps in my knowledge so I had to do additional research to work out the exact syntax. A typo in the header also had me stumped for far too long! <br>I tried to add the functionality to add the same song to a playlist twice, and got that bit working, but because the duplicates didn’t have unique IDs, deleting one deleted them all. In the end I reluctantly removed that feature but I enjoyed trying it out!<br><br><strong>Learnings:</strong><br> I realised a bit too late that I should have looked at the format of the data in more details before starting, so that it would have been easier to mock up data at the beginning when I was checking that my components worked.<br>I learnt the importance of committing regularly so that it’s easier to revert if everything goes wrong.<br>I also learnt some specific code such as Object.keys() and window.confirm.",
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
      "This was my first <a target=_blank href=' https://evg4.github.io/index.html '> portfolio</a>, built using plain HTML, CSS and JavaScript. Eventually I realised React would be a much more efficient way to build this, so I replaced it with this website. But I was really proud of this when I first created it, as it was one of my first major projects, so I am including it here!   <br><br><strong>How it works:</strong> <br>The site is self-explanatory. The Projects page features completed projects, but also small experiments and unfinished projects. There’s also information on the courses I’ve completed on the Courses page, and an About and Contact page.<br><br><strong>Challenges:</strong> <br>I struggled to decide on a colour scheme for this as I don’t have the best eye for design! However, I do like minimalist themes, so am happy with how it turned out. I spent a long time trying to work out why my Event Listeners weren’t working then eventually realised I’d forgotten to link the JavaScript file to the HTML file.<br>The final challenge became apparent once I started updating my site. I added all my new builds to the Projects page, but eventually this started to look crowded with so many buttons, and on smaller screens required scrolling to be able to see anything. <br><br><strong>Learnings:</strong><br>My main take away from this came as I started to update the portfolio. Each time I added a new project I copied and pasted the code for the preview and the button, which meant a lot of duplicated code. Once I started to learn React, I realised how powerful it is to be able to build one component and just map over a data source to display multiple elements of the same type.",
    image: portfolio,
    link: "https://evg4.github.io/index.html",
    video: "",
  },
];

export default projects;
