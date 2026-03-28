//images
import officeGames from "../assets/officeGames.png"
import evgtrans from "../assets/EVGTranslations.JPG";
import reddit from "../assets/reddit-mini.JPG";
import recipe from "../assets/recipe-blog.JPG";
import jammming from "../assets/Jammming.PNG";
import portfolio from "../assets/portfolio.PNG";

//videos
import officeGamesVid from "../assets/officeGamesVideo.mov";
import evgVid from "../assets/evgtranslations.mp4";
import redditVid from "../assets/redditmini.mp4";
import recipeVid from "../assets/recipeblog.mp4";
import jammmingVid from "../assets/jammming.mp4";
import portfolioVid from "../assets/portfolio.mp4";

const projects = [
  {
    title: "Office Games",
    date: "26.03.26",
    languages: "Java Spring Boot, Tailwind, PostgreSQL",
    description: "App to keep track of games played in office.",
    details:"My 12-week Makers bootcamp ended with a group project where we were free to decide what we wanted to build. Our cohort had already proved itself to be competitive, with many of us regularly challenging each other to table tennis, pool, darts or chess. So our team - <a target='blank' href='https://github.com/AliceeeSixes'>Alice</a>, <a target='blank' href='https://github.com/JackHurstie'>Jack</a>, <a target='blank' href='https://github.com/markrshaw99'>Mark</a>, <a target='blank' href='https://github.com/PAW1995'>Paddy</a> and myself - decided to build an app to keep track of these games and our rankings.<br>This is deployed to a live site with a connected database, however I'm not sharing it here as we are still working on it and not ready to share it yet!<br><br><strong>How it works:</strong> <br>Users must sign up before being able to use the account. Non-registered users can see a simplified view of the home page without any data, but are prompted to log in if they try to navigate to any other page.<br>The main purpose of this app is for users to log details of any games they play, so the 'Log match' button is available in the navbar from every page. This takes the user to a form, where their name is prepopulated as player 1 and they must choose their opponent from a drop down list. They then enter who won and the scores if necessary. <br>Upon submission, lots of calculations are done to work out how this latest match affects the player's ranking. We used the <a href='https://en.wikipedia.org/wiki/Elo_rating_system' target='_blank'>Elo rating system</a>, whereby a player gains more points if they beat someone who started out with a higher rating. The latest match is added to the Match History page, and the updated rankings are reflected in the Leaderboards page.<br>A user can also update their name, bio and profile picture by visiting the Profile page. There is frontend and backend validation in place to ensure that the player name is unique, and that the uploaded image is the right file type and size. Relevant error messages are displayed to the user if the data they tried to submit was invalid. <br>Anywhere that a player's name appears on the site is a direct link to their profile. The endpoint for another player's profile is /profile/{playerName}. To account for the fact that users might try to access a profile by typing in the URL directly without knowing that a player updated their name, we set up redirects for any player who changed their name, and display a message to the user to tell them they were redirected. <br>As the intention is for this to be used on mobile, we made the app fully responsive down to 400px.<br><br><strong>Challenges:</strong> <br>We had a few merge conflicts to contend with, as we were frequently working on the same files even though we were developing different features. Although this can be annoying to deal with, we had a good system in place for managing this so it never caused big issues.<br>Another slight headache was working with the BigDecimal data type in Java. When doing the maths required for the Elo calculations, we kept having to convert things to and from BigDecimal, which was something we hadn't anticipated. IT took a bit of googling but we managed to implement it correctly in the end.<br>Finally, testing proved tricky. We'd only been learning Java for a weeks at this point and, although we eventually managed to write some good feature tests in Selenium, we ran into problems when trying to write unit tests. This is definitely something we'll be coming back to!<br><br><strong>Learnings:</strong><br>Collectively we learnt a lot of new skills while building this! For me the most satisfying was the use of dto classes and a service layer, to extract business logic into another file and keep the controllers for the endpoints small. Although it took a while for the concepts to click, once they did I enjoyed breaking the code down into modular pieces.<br>We also learnt how to use flash attributes to display temporary messages; how to deal with Spring's inbuilt maximum file size for image uploads; how to use query joins in repository classes; how to ensure privacy with local .env files; how to test endpoints in Postman without just relying on the frontend; and how to use Tailwind for styling.<br><br><strong>Future development:</strong><br>We have lots of plans for where we'd like to take the app in the future! We want player B to have to verify a match before it's added to the match history, to prevent people inputting fake data to improve their rankings. We'd also like the ability to challenge another player to a match, with notifications to update players accordingly. <br>More distant plans include adding friends and allowing for team games, e.g. doubles table tennis.",
 image: officeGames,
    link: null,
    video: officeGamesVid,
    alt: "XXX",
  }, 
  {
    title: "EVG Translations",
    date: "28.12.23",
    languages: "HTML, CSS, JavaScript, React",
    description: "Website for my translation business.",
    details:
      "When I was still learning to code, and before I'd got my first tech job, I was working as a freelance translator. I had a website that I'd created with Squarespace, but decided to build my own. It was the first website I created that actually had a purpose other than practising, so it felt really exciting when it went live! <br> I built <a target=_blank href='https://evg-translations.netlify.app/'>EVG Translations</a> using React, with React Routing for navigation. <br><br><strong>How it works:</strong> <br>I only needed the website to act as a landing page to inform clients of my services, so there is no interactivity. Users can simply click the different pages to read more about me and my services. It is fully responsive and can be viewed on mobile devices as well as larger screens.<br> I am no longer working as a translator, but I wanted to keep the website live for my coding portfolio, so I added a yellow banner at the top to inform visitors of this. Other than that, the site is exactly how it was when I first built it.<br>I would have liked to include a form on the contact page which automatically sent a message to my email inbox, though that was beyond my capabilities at the time.<br><br><strong>Challenges:</strong> <br>The website had a lot of breakpoints so making it fully responsive was a challenge and took a little while, but I'm pleased with how it turned out as I managed to get everything fairly consistent.<br>Another learning curve came when I deployed the finished site. I already had a domain name which I'd purchased previously, so after deploying with Netlify, I changed the DNS settings to point the domain to this new website. I'd never dealt with a custom domain before, but with the help of people on Twitter and the Squarespace help pages, I managed to do it. The custom domain is in place until January 2025. Thereafter it will be accessible only via the Netlify address.<br><br><strong>Learnings:</strong><br>Once again, I was reminded of the importance of planning. I realised whilst slogging away with the breakpoints that it would have been easier if I'd decided on the fonts and sizes beforehand.<br> I also learnt how to use the details and summary HTML elements to create an accordion menu.",
    image: evgtrans,
    link: "https://evg-translations.netlify.app/",
    video: evgVid,
    alt: "A screenshot of the 'Get in touch' page of Lizzie's EVG Translations website",
  },
  {
    title: "Redditmini",
    date: "07.11.23",
    languages: "HTML, CSS, JavaScript, React, Redux",
    description: "Reddit clone using the Reddit API.",
    details:
      "I created <a target=_blank href='https://evg-redditmini.netlify.app/'>Redditmini</a> as part of the Codecademy Front-End Engineer path. The brief was to connect to the Reddit API (an undocumented JSON API) to present a subset of Reddit data, using Redux to manage state and async thunks to handle the API call. I also made use of CSS animations for the loading states. <br>I started this project twice; the first time, I hadn't planned very well and got confused with what I was doing, so made the decision to scrap everything and start from scratch. It was the first time I did that in a project but I'm glad it did as it gave me a fresh perspective.<br><br><strong>How it works:</strong> <br>On first loading, the page view defaults to show posts from the r/popular subreddit. Users can click on a subreddit from the left panel to view those posts, or type a search term. Clicking on a post from a list will show a more detailed view of the post, including comments.<br><br><strong>Challenges:</strong> <br>Challenges involved working out the best way to consistently display data, especially considering some posts had thumbnails only, some had better quality pictures, some had videos, and some had no images at all. I decided on using if/else statements to render something different depending on what the data was, but this may not be the best approach. Another challenge was that the sound does not play in the videos. This problem was also faced by other learners completing the same project. This is one thing I would like to come back to because, although sound isn't essential to the functioning of the website, it would be better if it worked.<br><br><strong>Learnings:</strong><br>This was a great reminder in the importance of planning. If I'd done a more thorough plan I wouldn't have had to restart. I also learnt some new skills such as .getAttribute(), which I was able to use in an event handler, and how to use markdown in React. This was necessary as some of the Reddit posts were written in markdown so I had to ensure they rendered correctly.",
    image: reddit,
    link: "https://evg-redditmini.netlify.app/",
    video: redditVid,
    alt: "A screenshot of the homepage of Lizzie's Redditmini site, showing some reddit posts and a menu of subreddits on the left.",
  },
  {
    title: "Recipe blog",
    date: "21.09.23",
    languages: "HTML, CSS, JavaScript, React",
    description: "Recipe blog using React Routing.",
    details:
      "A big part of the Codecademy Front End Engineering path was learning React. As it's such a broad topic, I tried to build as many projects as I could to practise key concepts. I created this <a target=_blank href='https://evg-recipe-blog.netlify.app/'>recipe blog</a> to get to grips with React Routing. I included four different pages, a header with navigation bar, and a footer to give it the feel of a full website, but the majority of the work is on the Recipes page.<br> I used searchParams to sort the list of recipes in different ways, and createSearchParams to filter the list. I also made use of useNavigate to create a Back button.<br><br><strong>How it works:</strong> <br>On the Recipes page, the user can click on a recipe from the list to navigate to a new page with that recipe. A Back button takes them back to the main page. They can sort the list alphabetically or reverse alphabetically, or reset it to the original order. They can also enter a search term and then they press Search, the list will be filtered to bring back only relevant results. There is also error handling to display a message to the user if no results are returned. <br><br><strong>Challenges:</strong> <br> As expected, the main challenge with this project was setting up the logic for the recipe list correctly. By this point, I was comfortable with the basic setup of a React app and how to handle headers, footers and nav bars, but getting used to useParams and learning how to implement the functionality for the search took a bit of concentration!<br><br>I also had some issues deploying to Netlify; if I clicked the links from my site everything worked fine, but if I manually typed into the address bar I was getting an error. I did some googling and discovered there was an easy fix to this by adding a _redirects file to my repo.<br><br> <strong>Learnings:</strong><br> As well as learning how to handle the issues when deploying to Netlify as mentioned above, this was the first project where I used a custom favicon for the browser tab. I realised everything I created with createreactapp had a default image, so I worked out how to update it to reflect my own project.",
    image: recipe,
    link: "https://evg-recipe-blog.netlify.app/",
    video: recipeVid,
    alt: "A screenshot of Lizzie's Recipe Blog site, showing a recipe for Greek Salad with an image.",
  },
  {
    title: "Jammming",
    date: "30.08.23",
    languages: "HTML, CSS, JavaScript, React",
    description: "React app which connects to the Spotify API.",
    details:
      "Jammming was a really fun project to work on that uses the Spotify API to allow users to create a new playlist and save it to their Spotify account. Unfortunately it's not possible to deploy it due to limitations on how many people can use the authorisation, but the video above shows it in action.<br><br><strong>How it works:</strong> <br>Upon first accessing the site, a user must log in using their Spotify credentials. They then see a header with instructions and a search bar. They can type in a search term and press Search, and this brings up a list of songs that match the search term. By clicking the + on each song, they are added to the playlist on the right. Users can then rename the playlist, remove songs, and finally save it to their Spotify account. There is also appropriate error handling to display messages to the user if they are trying to do something that won't work (e.g. press Search without entering a search term).<br><br><strong>Challenges:</strong> <br>This was the largest project I'd worked on so far and the first that involved an API call, so there were plenty of challenges along the way, but I really enjoyed it. Although the Codecademy course had covered GET requests, I found that there were some gaps in my knowledge so I had to do additional research to work out the exact syntax. A typo in the header also had me stumped for far too long! <br>I tried to add the functionality to add the same song to a playlist twice, and got that bit working, but because the duplicates didn't have unique IDs, deleting one deleted them all. In the end I reluctantly removed that feature but I enjoyed trying it out!<br><br><strong>Learnings:</strong><br> I realised a bit too late that I should have looked at the format of the data in more details before starting, so that it would have been easier to mock up data at the beginning when I was checking that my components worked.<br>I learnt the importance of committing regularly so that it's easier to revert if everything goes wrong.<br>I also learnt some specific code such as Object.keys() and window.confirm.",
    image: jammming,
    link: "",
    video: jammmingVid,
    alt: "A screenshot of Lizzie's Jammming project. There are two columns: the left-hand column has a list a songs brought back by the search result, and the right-hand column is titled 'My new playlist' and contains songs underneath it.",
  },

  {
    title: "Portfolio",
    date: "10.07.23",
    languages: "HTML, CSS, JavaScript",
    description: "My first coding portfolio.",
    details:
      "This was my first <a target=_blank href=' https://evg4.github.io/old-portfolio/ '> portfolio</a>, built using plain HTML, CSS and JavaScript. Eventually I realised React would be a much more efficient way to build this, so I replaced it with this website. But I was really proud of this when I first created it, as it was one of my first major projects, so I am including it here!   <br><br><strong>How it works:</strong> <br>The site is self-explanatory. The Projects page features completed projects, but also small experiments and unfinished projects. There's also information on the courses I've completed on the Courses page, and an About and Contact page.<br><br><strong>Challenges:</strong> <br>I struggled to decide on a colour scheme for this as I don't have the best eye for design! However, I do like minimalist themes, so am happy with how it turned out. I spent a long time trying to work out why my Event Listeners weren't working then eventually realised I'd forgotten to link the JavaScript file to the HTML file.<br>The final challenge became apparent once I started updating my site. I added all my new builds to the Projects page, but eventually this started to look crowded with so many buttons, and on smaller screens required scrolling to be able to see anything. <br><br><strong>Learnings:</strong><br>My main take away from this came as I started to update the portfolio. Each time I added a new project I copied and pasted the code for the preview and the button, which meant a lot of duplicated code. Once I started to learn React, I realised how powerful it is to be able to build one component and just map over a data source to display multiple elements of the same type.",
    image: portfolio,
    link: "https://evg4.github.io/old-portfolio/",
    video: portfolioVid,
    alt: "A screenshot of Lizzie's old Portfolio. The screen has buttons on the left corresponding to different projects, and a viewing window on the right to display the selected one.",
  },
];

export default projects;
