import messageGenerator from "../assets/messageGenerator.png";
import eduTaskHub from "../assets/eduTaskHub.PNG";
import evgtrans from "../assets/EVGTranslations.JPG";
import reddit from "../assets/reddit-mini.JPG";
import flashcards from "../assets/flashcards.PNG";
import packingList from "../assets/packingList.PNG";
import planner from "../assets/planner.PNG";
import recipe from "../assets/recipe-blog.JPG";
import jammming from "../assets/Jammming.PNG";
import timer from "../assets/timer.PNG";
import quizTeam from "../assets/quizTeam.PNG";
import libraryRentals from "../assets/LibraryRentals.PNG";
import friendFrenzy from "../assets/friendFrenzy.PNG";
import foodFacts from "../assets/foodFacts.PNG";
import rhymes from "../assets/rhymes.PNG";
import quizzes from "../assets/quizzes.jpeg";
import shapes from "../assets/shapes.jpeg";
import findYourHat from "../assets/findYourHat.jpeg";
import portfolio from "../assets/portfolio.PNG";
import survey from "../assets/survey.jpeg";
import colourChanger from "../assets/colourChanger.jpeg";
import bakery from "../assets/bakery.jpeg";
import stammtisch from "../assets/stammtisch.jpeg";
import meetTheTeam from "../assets/meetTheTeam.PNG";
import greenConsulting from "../assets/greenConsulting.jpeg";
import superfoods2 from "../assets/superfoods2.jpeg";
import superfoods1 from "../assets/superfoods1.jpeg";
import spanish from "../assets/spanish.jpeg";
import styleGuide from "../assets/styleGuide.jpeg";
import cheatsheet from "../assets/cheatsheet.jpeg";
import salsa from "../assets/salsa.jpeg";

const blogs = [
  {
    title: "Message Generator",
    link: "",
    day: "28",
    month: "10",
    year: "2024",
    img: messageGenerator,
    summaryText: "A quick refresher on using JavaScript in Node.",
    fullText:
      "After a bit of a break from Codecademy due to starting my new job, I've now started on the Full-Stack Engineer career path. There was one challenge relating to JavaScript that I did in the name of completeness, even though it was going back to basics a bit. It was useful to have a refresher, though! <br><br> The concept is simple: upon running the programme, a random piece of advice is displayed to the user. The message changes each time it is run. I use arrays to hold adjectives and verb phrases, then use the Math.random() method to access a random index of each array and insert the value into a sentence. You can see the code on my <a target=_blank href='https://github.com/evg4/Message-generator'>Github profile</a>. ",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Message Generator project.",
  },
  {
    title: "EduTaskHub",
    link: "https://edutaskhub.netlify.app/",
    day: "01",
    month: "02",
    year: "2024",
    img: eduTaskHub,
    summaryText: "I worked on this with my mentor Jade Wilson.",
    fullText:
      "During my job search I’ve been working with my mentor Jade Wilson to prepare for interviews. She set me the task of putting together an app called <a target=_blank href='https://edutaskhub.netlify.app/'>EduTaskHub</a>, with the aim of simplifying the assignment of homework for teachers and students. <br><br>It was a great learning process: Jade explained to me what interviewers are looking for with these types of take-home tasks, and helped me find areas for improvement in my implementation. I used Redux to manage the state in this app, though I now realise it would be better to use local state, except when changes in one component affects another. This was also the first project where I implemented testing, and I’ve discovered the value of writing tests early! <br><br>The project is unfinished, because I realised there is a lot that could be done better, and if I were to continue working on it I’d rather start from scratch to implement everything I learnt from Jade, but I’m proud of the work I did so still wanted to share it in my blog. The 'Add new coursework' button works - try it out!",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's EduTaskHub project.",
  },
  {
    title: "EVG Translations",
    link: "https://evg-translations.netlify.app/",
    day: "28",
    month: "12",
    year: "2023",
    img: evgtrans,
    summaryText:
      "This is the first website I've built to be used in the real world! Featured on the Projects page.",
    fullText:
      "I really enjoyed making this 'real-life' project for my <a target=_blank href='https://evg-translations.netlify.app/'>translation business</a>. At the time, I was still working as a self-employed translator while learning how to code, and my annual payment for my Squarespace website was due for renewal. So I decided to kill two birds with one stone and build a website myself. Not only was it good for advertising my translation services, it was also good for my coding portfolio!",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's EVG Translations website.",
  },
  {
    title: "Redditmini",
    link: "https://evg-redditmini.netlify.app/",
    day: "07",
    month: "11",
    year: "2023",
    img: reddit,
    summaryText:
      "This React app uses Redux and connects to the Reddit API. Featured on the Projects page.",
    fullText:
      "This project, <a target=_blank href='https://evg-redditmini.netlify.app/'>Redditmini</a>, was bootstrapped with Create React App. It is an app which connects to the Reddit API (undocumented JSON API) to present a subset of the Reddit data. On first loading, the page view defaults to show posts from the r/popular subreddit. Users can then view that data, or change it by clicking on some predefined subreddits, or entering a search term. Users can click on an item from the list of results and it will take them to a more detailed view of the post, including comments. <br>This project was created using React and Redux as a way to practise key skills, including async thunks to fetch data and a store to manage state. CSS is used for styling, including animations during the loading state. <br><br>Challenges involved working out the best way to consistently display data, especially considering some posts had thumbnails only, some had better quality pictures, some had videos, and some had no images at all. I decided on using if/else statements to render something different depending on what the data was, but this may not be the best approach. Another challenge was that the sound does not play in the videos. This problem was also faced by other learners completing the same project. This is something I would like to come back to at a later date if I learn how to do it.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Redditmini project.",
  },
  {
    title: "Flashcards",
    link: "https://evg-flashcards.netlify.app/",
    day: "12",
    month: "10",
    year: "2023",
    img: flashcards,
    summaryText: "This Codecademy project was to practise Redux.",
    fullText:
      "This <a target=_blank href='https://evg-flashcards.netlify.app/'>Flashcards</a> project was completed as part of the Codecademy Front-End Engineer path. Routing was already implemented, as were components; the task was to create three new slices for different parts of the state and use other features of RTK to make the app functional. <br><br>On the Topics page, users can add topics they would like to study. On the New Quiz page, users can select from their topics and make flashcards to create a quiz. The quizzes can then be seen on the Quizzes page. Clicking on a quiz takes you to the flashcards within that quiz. You can click on the flashcard to swap between sides.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Flashcards project.",
  },
  {
    title: "Packing list",
    link: "https://evg-packing-list.netlify.app/",
    day: "09",
    month: "10",
    year: "2023",
    img: packingList,
    summaryText: "I created this app to help me understand the Redux toolkit.",
    fullText:
      "I created this <a target=_blank href='https://evg-packing-list.netlify.app/'>packing list</a> to practise using the Redux Toolkit. I started off with very basic Redux syntax, with one state (no slices) and all action creators and a single reducer in one file. Then I split it into slices, with a separate file for each. Finally, I refactored again to make use of createSlice() and configureStore(). This process really helped me understand the concepts and it meant I could make sure the basics were working as expected before I moved on to using the RTK. In some files I left the previous code, commented out, so I can refer back to it if needed. <br><br>Users are not able to add the same item twice. They can toggle each item between ticked/unticked, and remove an item from the list. They can also hide the packed (ticked) items, or show all. <br>The styling is only basic; the focus here was practising Redux, not creating a polished final product.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Packing List project.",
  },
  {
    title: "Appointment planner",
    link: "https://evg-appointment-planner.netlify.app/contacts",
    day: "27",
    month: "09",
    year: "2023",
    img: planner,
    summaryText:
      "This Codecademy project combines React Routing, HTML forms, and React hooks.",
    fullText:
      "This <a target=_blank href='https://evg-appointment-planner.netlify.app/'>appointment planner</a> was part of the Codecademy Front-End Engineer path. The routing was already implemented, and the task involved following instructions to complete the rest of the components and make them interact with each other. It puts into practice the following skills: useEffect() hook; useState() hook; props; and HTML forms. <br><br> The app allows a user to add contacts on the /contacts page, and then create new appointments on the /appointments page, choosing from a drop-down list of the contacts they added.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Appointment Planner project.",
  },
  {
    title: "Recipe blog",
    link: "https://evg-recipe-blog.netlify.app/",
    day: "21",
    month: "09",
    year: "2023",
    img: recipe,
    summaryText:
      "A React app using React Routing. Featured on the Projects page.",
    fullText:
      "I’m really proud of this <a target=_blank href='https://evg-recipe-blog.netlify.app/'>recipe blog</a>, which I built to practise React Routing. <br> On the 'Recipes' page, there's a list of recipes which can be sorted in different ways. This was achieved with searchParams. There is also a search field which filters the recipes according to the user's search term and uses createSearchParams. You can then click into each recipe and the relevant info is displayed. There is a 'back' button which uses useNavigate() to move through the history stack.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Recipe Blog project.",
  },
  {
    title: "Jammming",
    link: "",
    day: "30",
    month: "08",
    year: "2023",
    img: jammming,
    summaryText:
      "This webapp connects to the Spotify API. Featured on the Projects page.",
    fullText:
      "One of the projects in Codecademy’s Front-End Engineer path was Jammming - an app which connects to the Spotify API to allow users to search for songs, add them to a playlist then save it to their own Spotify account. I personalised it by adding the ability to play a sample of the song, and ‘previous’ and ‘next’ buttons to display more pages of results. <br><br> I have not been able to deploy this as the Spotify API only allows apps that are in development mode to be authorised by 10 users. However, visit the Projects page for <Link to='/projects'> a video of how it works</Link>.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Jammming project.",
  },
  {
    title: "Timer",
    link: "https://evg4.github.io/timer/",
    day: "22",
    month: "08",
    year: "2023",
    img: timer,
    summaryText: "My attempt at using the useEffect() hook.",
    fullText:
      "I built this <a target=_blank href='https://evg4.github.io/timer/'>timer</a> to practise using the useState() hook together with the useEffect() hook. There are two effects: the number updates in line with the setTimer, and the background changes to a random colour at the same time. However, there is an undesired effect in that the button can be clicked multiple times and the timer speeds up. I tried adding a removeEventListener but was unable to get this working. This is another project that I hope to come back to at a later date to see if I can get it working, but until then, here it is.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Timer project.",
  },
  {
    title: "Quiz team registration",
    link: "https://evg4.github.io/quizmember/",
    day: "21",
    month: "08",
    year: "2023",
    img: quizTeam,
    summaryText: "This form uses the useState() hook with a JavaScript object.",
    fullText:
      "This is <a target=_blank href='https://evg4.github.io/quizmember/'>a simple form to register a quiz team member</a>. I built it to continue getting familiar with React, in particular the useState() hook with an object. It was also a good opportunity to practise using HTML forms again. The data entered doesn’t actually go anywhere.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Quiz team registration website.",
  },
  {
    title: "Library rentals",
    link: "https://evg4.github.io/libraryrentals/",
    day: "18",
    month: "08",
    year: "2023",
    img: libraryRentals,
    summaryText:
      "More React practise - this time with a focus on useState() with an array.",
    fullText:
      "<a target=_blank href='https://evg4.github.io/libraryrentals/'>Library rentals</a> is a webpage I built with React to practise using the useState() hook, this time with an array. Users are presented with tiles that represent books that are available in the library. Clicking on a book adds it to your personal reading list. Clicking on a book in your list will remove it. This is a front-end app only so the books added to the list are not stored anywhere.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Library rentals project.",
  },
  {
    title: "Friend Frenzy",
    link: "https://evg4.github.io/friendfrenzy/",
    day: "17",
    month: "08",
    year: "2023",
    img: friendFrenzy,
    summaryText:
      "My second React app makes use of props and the useState() hook.",
    fullText:
      "This webpage, <a target=_blank href='https://evg4.github.io/friendfrenzy/'>Friend Frenzy social media</a>, is another React practice project. I wanted to create a simple page to get to grips with props, so the actual functionality of the site is basic; if you click the button on a user’s card, their “Love received” value will increase. <br> Despite the site being basic, it was a useful exercise for learning about props, and I’m pleased with the appearance of the tiles, too. <br>Fun fact: I originally used names of my friends from my salsa class, but decided to change them before I published in case anyone took offence to the animal I’d chosen for them!",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Friend Frenzy project.",
  },
  {
    title: "Food facts",
    link: "https://evg4.github.io/food-facts/",
    day: "15",
    month: "08",
    year: "2023",
    img: foodFacts,
    summaryText: "This is a basic webpage built using React.",
    fullText:
      "<a target=_blank href='https://evg4.github.io/food-facts/'>Food facts</a> is the first webpage I created with React and JSX. The site is very basic; you can click on one of the images, and the box below displays some text relating to it. It took me a while to correctly render the images but in the process I learnt a few different ways to do it, so it was a great learning experience!",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Food Facts project.",
  },
  {
    title: "Rhyme finder",
    link: "https://evg4.github.io/Rhyme-finder/",
    day: "10",
    month: "08",
    year: "2023",
    img: rhymes,
    summaryText: "My first API call!",
    fullText:
      "This is the first project I made that makes use of an API call! It’s called <a target=_blank href='https://evg4.github.io/Rhyme-finder/'>Rhyme finder</a> and, as the name suggests, a user can type in a word and see other words or phrases that rhyme with it. They can also choose how many search results should be displayed. <br> I used async await syntax for the HTTP request and it retrieves data from the Datamuse API. There is also validation which triggers a pop up alert if the user presses the button without typing anything in the boxes.<br>I would have liked to have the results display in multiple columns to save the user needing to scroll down, though I wasn’t able to achieve that functionality at the time.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Rhyme Finder project.",
  },
  {
    title: "Quizzes",
    link: "",
    day: "27",
    month: "07",
    year: "2023",
    img: quizzes,
    summaryText:
      "I created a bank of questions and answers to export for different quizzes.",
    fullText:
      "I made a bank of quiz questions with three different quizzes as a way to practise importing and exporting modules in the Node environment. <br> In the first quiz, the player loses as soon as they get a question wrong. In the second, players have three lives. In the third quiz, a player can attempt all questions and they’ll see their score at the end. <br>See more details in my <a target=_blank href='https://github.com/evg4/Quizzes'>GitHub repo</a> with instructions on how to play.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Quizzes project.",
  },
  {
    title: "Shapes",
    link: "https://evg4.github.io/Shapes/",
    day: "26",
    month: "07",
    year: "2023",
    img: shapes,
    summaryText:
      "The main purpose of this was to practice importing and exporting JavaScript modules.",
    fullText:
      "I built this website, <a target=_blank href='https://evg4.github.io/Shapes/index.html'>Shapes</a>, to practise exporting and importing functions in JavaScript, so the page itself is very basic and doesn’t do much! This was also the first time I had to spin up a local server to test as I built. <br> It also provided a good opportunity to practise CSS animations and transformations again.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Shapes website.",
  },
  {
    title: "Find my hat",
    link: "https://evg4.github.io/Find-your-hat-web/",
    day: "25",
    month: "07",
    year: "2023",
    img: findYourHat,
    summaryText:
      "This started out as a JavaScript-only Codecademy challenge, but I made a webpage too. ",
    fullText:
      "This project felt like a big step up in skills so it took me a while to get going! It was a challenge on the Codecademy Front-End Engineer path that was originally to practise using classes in node, and after I completed it I decided to repurpose it and create a web version, also called <a target=_blank href='https://evg4.github.io/Find-your-hat-web/'>Find your hat</a>. <br> The functionality is basic – for example I didn’t know how to create logic that would prevent it from landing on a configuration where no solution is available – but I was happy to take the challenge from Codecademy and expand on it, even if only in a simple way.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Find My Hat web page.",
  },
  {
    title: "Portfolio",
    link: "https://evg4.github.io/index.html",
    day: "10",
    month: "07",
    year: "2023",
    img: portfolio,
    summaryText: "Here is my first portfolio! Featured on the Projects page.",
    fullText:
      "This was the first <a target=_blank href='https://evg4.github.io/index.html'> Portfolio</a> that I built. I was really pleased with this; it was another Codecademy project, and the brief was to make a portfolio site with a separate Contacts page, but I decided to take it a bit further and do some other pages.<br>It took me a while to settle on a colour scheme (design isn’t my strong point!) but I’m happy with the minimalistic look.<br>The portfolio worked great when I didn’t have many projects, but as I added more and more, the Projects page started to look crowded, with too many buttons.<br>I also included everything together on one page – from small experiments that weren’t much by themselves, to full websites – so the better projects didn’t really stand out. Finally, it was built with plain JavaScript, HTML and CSS, so every time I wanted to add a new element, I had to copy and paste code then update it.<br>After I learnt React, I decided to rebuild my portfolio using that so I could take advantage of reusable components, and took the opportunity to create this Blogs page to document my learnings, however small, and a separate Projects page for the more substantial things I build.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's first portfolio.",
  },
  {
    title: "Sweets and chocolate survey",
    link: "https://evg4.github.io/Sweets-survey/",
    day: "30",
    month: "06",
    year: "2023",
    img: survey,
    summaryText: "I made this form to practise HTML forms. ",
    fullText:
      "In a Facebook group for beginner coders, it seemed like the first thing anyone built was a HTML form. I added it to my list of ‘things to learn’ so I was pleased when I finally covered it in the Codecademy course! <br>This <a target=_blank href='https://evg4.github.io/Sweets-survey/'>Sweets and Chocolate survey</a> doesn’t actually do anything with the data you submit, but was a great way to practise different form elements and question types.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Sweets and Chocolate Survey.",
  },
  {
    title: "Colour changer",
    link: "https://evg4.github.io/Colour-changer/",
    day: "28",
    month: "06",
    year: "2023",
    img: colourChanger,
    summaryText:
      "It's finally time to incorporate JavaScript into my webpages! ",
    fullText:
      "I was so excited to build this <a target=_blank href='https://evg4.github.io/Colour-changer/'>Colour Changer</a> and finally start making my websites interactive! Of course this is very basic, but it was a great way to get used to using event handlers. I used a switch statement to randomly select one of eight sentences when the Mystery button is clicked. ",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Colour Changer website.",
  },
  {
    title: "Belle's Bakery",
    link: "https://evg4.github.io/Belle-s-bakery/",
    day: "26",
    month: "06",
    year: "2023",
    img: bakery,
    summaryText:
      "This website focuses on transitions, transformations and animations using CSS.",
    fullText:
      "I built this webpage, <a target=_blank href='https://evg4.github.io/Belle-s-bakery/'>Belle’s Bakery</a>, to practice using CSS animations and transitions, so the design leaves a lot to be desired because that wasn’t my priority!<br>I found the information on Codecademy regarding animations and transitions to not be as detailed as some of the other topics, but luckily I found some other good resources to fill the gaps.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Belle's Bakery website.",
  },
  {
    title: "Stammtisch Sundays",
    link: "https://evg4.github.io/Stammtisch-Sundays/",
    day: "25",
    month: "05",
    year: "2023",
    img: stammtisch,
    summaryText: "This site uses @media rulesets to make a webpage responsive.",
    fullText:
      "For this project, I had to create a responsive website that was suitable for different screen sizes. I made <a target=_blank href='https://evg4.github.io/Stammtisch-Sundays/'> Stammtisch Sundays</a>, a website for a made-up group for people to practise speaking German. (In case anyone is wondering about the strange colour scheme, it’s designed to reflect the German flag!)<br>When the size of the browser is adjusted, the header and main text change size, and the layout of the images and map/text at the bottom adjust.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Stammtisch Sundays website.",
  },
  {
    title: "Meet the team",
    link: "https://evg4.github.io/Meet-the-team/",
    day: "18",
    month: "05",
    year: "2023",
    img: meetTheTeam,
    summaryText:
      "I wanted to work out how to get a caption that appears on hover.",
    fullText:
      "After finishing my previous project, <a target=_blank href='https://evg4.github.io/Green-Consulting/'>Green Consulting</a>, I looked at the Codecademy forums to see what other learners had created. I saw one example where the developer had added images with captions that appeared when the mouse hovered over it. I really liked how it looked so wanted to see if I could recreate it.<br>This <a target=_blank href='https://evg4.github.io/Meet-the-team/'>Meet the team</a> page is not a full website, but just a chance to try that. I was pleased that I managed, and it was nice to get inspiration from other people’s learnings!   ",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Meet The Team practice.",
  },
  {
    title: "Green Consulting",
    link: "https://evg4.github.io/Green-Consulting/",
    day: "17",
    month: "05",
    year: "2023",
    img: greenConsulting,
    summaryText:
      "My largest project so far - putting everything together into one webpage.",
    fullText:
      "After learning lots of skills in HMTL and CSS, I built this webpage <a target=_blank href='https://evg4.github.io/Green-Consulting/'>Green Consulting</a> to put everything together in one place.<br>My main focuses were using semantic HTML for better accessibility, a fixed header, and flexbox to resize/wrap the images.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Green Consulting website.",
  },
  {
    title: "Superfoods 2",
    link: "https://evg4.github.io/Superfoods-v2/",
    day: "16",
    month: "05",
    year: "2023",
    img: superfoods2,
    summaryText:
      "Here is my second attempt at using the grid layout, based heavily on the previous design.",
    fullText:
      "After building <a target=_blank href='https://evg4.github.io/Superfoods-v1/'> Superfoods v1</a> to practise using the grid layout, I realised there were ways it could be improved, so I had another go!<br> <a target=_blank href=''>Superfoods v2</a> uses max-width and min-width to change the size of the elements when the browser is resized, which makes it look better. I also changed the images so they don’t repeat within their container.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Superfoods 2 webpage.",
  },
  {
    title: "Superfoods 1",
    link: "https://evg4.github.io/Superfoods-v1/",
    day: "15",
    month: "05",
    year: "2023",
    img: superfoods1,
    summaryText:
      "This simple page was my first attempt at using the grid layout.",
    fullText:
      "I created a basic webpage called <a target=_blank href='https://evg4.github.io/Superfoods-v1/'> Superfoods</a> to practise using the grid layout. I didn’t find this particularly intuitive and it took a few tries to get it working how I wanted, but it was a good way to learn how it works and try a different layout.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Superfoods 1 webpage.",
  },
  {
    title: "Spanish",
    link: "https://evg4.github.io/Spanish/",
    day: "14",
    month: "05",
    year: "2023",
    img: spanish,
    summaryText:
      "This webpage was for me to try out flexbox... with an interesting colour choice!",
    fullText:
      "I wanted to practise using flexbox so created this page, <a target=_blank href='https://evg4.github.io/Spanish/'>Spanish</a>, with boxes of various sizes. I experimented with the properties  flex-shrink, flex-grow and flex-wrap to allow the boxes to resize as the browser changed size. <br>I took colour inspiration from the Spanish flag but am aware it’s not the most aesthetically pleasing website!",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's webpage about Spanish.",
  },
  {
    title: "Website style guide",
    link: "https://evg4.github.io/Website-style-guide/",
    day: "12",
    month: "05",
    year: "2023",
    img: styleGuide,
    summaryText: "A project to get used to different style elements.",
    fullText:
      "I created this <a target=_blank href='https://evg4.github.io/Website-style-guide/'>Website style guide</a> to get used to using different font styles, sizes and colours. I also made use of the id attribute to have links to each section of the page.<br> I wanted to make all the boxes in the Colours section the same size, but I haven’t learnt how to do that yet!",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Website Style Guide webpage.",
  },
  {
    title: "CSS colours cheatsheet",
    link: "https://evg4.github.io/css-colours/",
    day: "08",
    month: "05",
    year: "2023",
    img: cheatsheet,
    summaryText:
      "This Codecademy exercise was designed to practise tables in HTML.",
    fullText:
      "The first project I completed as part of the Codecademy Front-End Engineer path was this <a target=_blank href='https://evg4.github.io/css-colours/'>CSS Colours Cheatsheet</a>. The main purpose was to practise using tables in HTML, but it also serves as a reminder for different ways to set colours in CSS.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's CSS Colours Cheatsheet.",
  },
  {
    title: "Salsa dancing",
    link: "https://evg4.github.io/Salsa-dancing/",
    day: "24",
    month: "04",
    year: "2023",
    img: salsa,
    summaryText:
      "My first project! I completed this as part of the SheCodes Basics course.",
    fullText:
      "This was my first project, completed as the final challenge in the SheCodes Basics course. The task was to create a simple webpage to put into practice everything we had learnt, so I created this site, <a target=_blank href='https://evg4.github.io/Salsa-dancing/'>Salsa dancing</a>. <br>SheCodes covered HTML, CSS and JavaScript, but didn’t go into great depth in any of them; it provides a snapshot of the different languages to demonstrate what can be achieved.<br>For me, it was the perfect introduction to coding and helped confirm that I wanted to learn more.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
    alt: "A screenshot of Lizzie's Salsa Dancing webpage.",
  },
];

let blogTitles = {};
blogs.forEach((blog) => {
  blogTitles[blog.fullDate] = blog.title;
});

let years = [];

blogs.forEach((blog) => {
  let year = blog.year;
  let month = blog.month;
  let day = blog.day;

  let existingYear = years.find((obj) => obj.year === year);

  if (!existingYear) {
    years.push({ year: year, months: [{ month: month, days: [day] }] });
  } else {
    let existingMonth = existingYear.months.find((obj) => obj.month === month);

    if (!existingMonth) {
      existingYear.months.push({ month: month, days: [day] });
    } else {
      existingMonth.days.push(day);
    }
  }
});

// [{year: 2024, months: [{month: march, days: [01, 12]}, {month: april, days: [08, 15]}]

export default blogs;
export { years, blogTitles };
