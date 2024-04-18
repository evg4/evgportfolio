const blogs = [
  {
    title: "title",
    day: "03",
    month: "04",
    year: "2024",
    img: "img",
    summaryText: "One sentence to display.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "title",
    day: "01",
    month: "04",
    year: "2024",
    img: "img",
    summaryText: "One sentence to display.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "another title",
    day: "23",
    month: "05",
    year: "2024",
    img: "img",
    summaryText: "An even better sentence to display.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "another title",
    day: "18",
    month: "06",
    year: "2023",
    img: "img",
    summaryText: "An even better sentence to display.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "another title",
    day: "31",
    month: "08",
    year: "2022",
    img: "img",
    summaryText: "An even better sentence to display.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    console.log(`year added: ${year}`);
    console.log(years);
  } else {
    let thisYear = years.find((obj) => obj.year === year);
    console.log(`year already present: ${thisYear}`);
    console.log(`Months array: ${thisYear.months[0].month}`);
    for (let i = 0; i < thisYear.months.length; i++) {
      if (thisYear.months[i].month === month) {
        monthCount++;
      }
    }
    if (monthCount === 0) {
      thisYear.months.push({ month: month, days: [day] });
    } else {
      console.log(`month already present`);
      let thisMonth = thisYear.months.find((obj) => obj.month === month);
      thisMonth.days.push(day);
    }
  }
});

// [{year: 2024, months: [{month: march, days: [01, 12]}, {month: april, days: [08, 15]}]

export default blogs;
export { years };
