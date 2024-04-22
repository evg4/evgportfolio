const blogs = [
  {
    title: "EVG Translations",
    day: "28",
    month: "12",
    year: "2023",
    img: "img",
    summaryText:
      "This is the first website I've built to be used in the real world! Featured on the Projects page.",
    fullText: "",
  },
  {
    title: "Redditmini",
    day: "07",
    month: "11",
    year: "2023",
    img: "img",
    summaryText:
      "This React app uses Redux and connects to the Reddit API. Featured on the Projects page.",
    fullText: "",
  },
  {
    title: "Flashcards",
    day: "12",
    month: "10",
    year: "2023",
    img: "img",
    summaryText: "This Codecademy project was to practise Redux.",
    fullText: "",
  },
  {
    title: "Packing list",
    day: "09",
    month: "10",
    year: "2023",
    img: "img",
    summaryText: "I created this app to help me understand the Redux toolkit.",
    fullText: "",
  },
  {
    title: "Appointment planner",
    day: "27",
    month: "09",
    year: "2023",
    img: "img",
    summaryText:
      "This Codecademy project combines React Routing, HTML forms, and React hooks.",
    fullText: "",
  },
  {
    title: "Recipe blog",
    day: "21",
    month: "09",
    year: "2023",
    img: "img",
    summaryText:
      "A React app using React Routing. Featured on the Projects page.",
    fullText: "",
  },
  {
    title: "Jammming",
    day: "30",
    month: "08",
    year: "2023",
    img: "img",
    summaryText:
      "This webapp connects to the Spotify API. Featured on the Projects page.",
    fullText: "",
  },
  {
    title: "Timer",
    day: "21",
    month: "08",
    year: "2023",
    img: "img",
    summaryText: "My attempt at using the useEffect() hook.",
    fullText: "",
  },
  {
    title: "Quiz team registration",
    day: "21",
    month: "08",
    year: "2023",
    img: "img",
    summaryText: "This form uses the useState() hook with a JavaScript object.",
    fullText: "",
  },
  {
    title: "Library rentals",
    day: "18",
    month: "08",
    year: "2023",
    img: "img",
    summaryText:
      "More React practise - this time with a focus on useState() with an array.",
    fullText: "",
  },
  {
    title: "Friend Frenzy",
    day: "17",
    month: "08",
    year: "2023",
    img: "img",
    summaryText:
      "My second React app makes use of props and the useState() hook.",
    fullText: "",
  },
  {
    title: "Food facts",
    day: "15",
    month: "08",
    year: "2023",
    img: "img",
    summaryText: "This is a basic webpage built using React.",
    fullText: "",
  },
  {
    title: "Rhyme finder",
    day: "10",
    month: "08",
    year: "2023",
    img: "img",
    summaryText: "My first API call!",
    fullText: "",
  },
  {
    title: "Quizzes",
    day: "27",
    month: "07",
    year: "2023",
    img: "img",
    summaryText:
      "I created a bank of questions and answers to export for different quizzes.",
    fullText: "",
  },
  {
    title: "Shapes",
    day: "25",
    month: "07",
    year: "2023",
    img: "img",
    summaryText:
      "The main purpose of this was to practice importing and exporting JavaScript modules.",
    fullText: "",
  },
  {
    title: "Find my hat",
    day: "25",
    month: "07",
    year: "2023",
    img: "img",
    summaryText:
      "This started out as a JavaScript-only Codecademy challenge, but I made a webpage too. ",
    fullText: "",
  },
  {
    title: "Portfolio",
    day: "10",
    month: "07",
    year: "2023",
    img: "img",
    summaryText: "Here is my first portfolio! Featured on the Projects page.",
    fullText: "",
  },
  {
    title: "Sweets and chocolate survey",
    day: "30",
    month: "06",
    year: "2023",
    img: "img",
    summaryText: "I made this form to practise HTML forms. ",
    fullText: "",
  },
  {
    title: "Colour changer",
    day: "28",
    month: "06",
    year: "2023",
    img: "img",
    summaryText:
      "It's finally time to incorporate JavaScript into my webpages! ",
    fullText: "",
  },
  {
    title: "Belle's Bakery",
    day: "26",
    month: "06",
    year: "2023",
    img: "img",
    summaryText:
      "This website focuses on transitions, transformations and animations using CSS.",
    fullText: "",
  },
  {
    title: "Stammtisch Sundays",
    day: "25",
    month: "05",
    year: "2023",
    img: "img",
    summaryText: "This site uses @media rulesets to make a webpage responsive.",
    fullText: "",
  },
  {
    title: "Meet the team",
    day: "17",
    month: "05",
    year: "2023",
    img: "img",
    summaryText:
      "I wanted to work out how to get a caption that appears on hover.",
    fullText: "",
  },
  {
    title: "Green Consulting",
    day: "17",
    month: "05",
    year: "2023",
    img: "img",
    summaryText:
      "My largest project so far - putting everything together into one webpage.",
    fullText: "",
  },
  {
    title: "Superfoods 2",
    day: "16",
    month: "05",
    year: "2023",
    img: "img",
    summaryText:
      "Here is my second attempt at using the grid layout, based heavily on the previous design.",
    fullText: "",
  },
  {
    title: "Superfoods 1",
    day: "15",
    month: "05",
    year: "2023",
    img: "img",
    summaryText:
      "This simple page was my first attempt at using the grid layout.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Spanish",
    day: "14",
    month: "05",
    year: "2023",
    img: "img",
    summaryText:
      "This webpage was for me to try out flexbox... with an interesting colour choice!",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Website style guide",
    day: "12",
    month: "05",
    year: "2023",
    img: "img",
    summaryText: "A project to get used to different style elements.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "CSS colours cheatsheet",
    day: "08",
    month: "05",
    year: "2023",
    img: "img",
    summaryText:
      "This Codecademy exercise was designed to practise tables in HTML.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Salsa dancing",
    day: "24",
    month: "04",
    year: "2023",
    img: "img",
    summaryText:
      "My first project! I completed this as part of the SheCodes Basics course.",
    fullText:
      "This was my first project, completed as part of the SheCodes Basics course. It only uses basic skills but was a great first project to inspire me to continue.",
  },
];

let years = [];
blogs.forEach((blog) => {
  let year = blog.year;
  let month = blog.month;
  let day = blog.day;
  let yearCount = 0;
  let monthCount = 0;
  for (let i = 0; i < years.length; i++) {
    if (years[i].year === year) {
      yearCount++;
    }
  }
  if (yearCount === 0) {
    years.push({ year: year, months: [{ month: month, days: [day] }] });
  } else {
    let thisYear = years.find((obj) => obj.year === year);
    for (let i = 0; i < thisYear.months.length; i++) {
      if (thisYear.months[i].month === month) {
        monthCount++;
      }
    }
    if (monthCount === 0) {
      thisYear.months.push({ month: month, days: [day] });
    } else {
      let thisMonth = thisYear.months.find((obj) => obj.month === month);
      thisMonth.days.push(day);
    }
  }
});

// [{year: 2024, months: [{month: march, days: [01, 12]}, {month: april, days: [08, 15]}]

export default blogs;
export { years };
