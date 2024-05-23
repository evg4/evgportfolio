import styles from "./BlogPreviews.module.css";
import blogs from "../../data/blogs";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

function BlogPreviews() {
  const [selected, setSelected] = useState(blogs);

  //I started setting up the below but have decided to leave it for now
  //I will need to think carefully how to do this
  //if state is involved in more than one module I'll need Redux

  function filterByYear(year) {
    console.log(selected);
    let filteredArray = selected.filter((item) => item.year === year);
    console.log(filteredArray);
    setSelected(filteredArray);
  }
  function filterByMonth(month) {}
  function filterByDay(day) {}

  function handleClick(e) {
    let yearToShow = e.target.value;
    console.log(yearToShow);
    filterByYear(yearToShow);
  }

  // end of unfinished section //

  return (
    <section>
      {selected.map((blog) => {
        return (
          <div key={blog.title} className={styles.blogPreview}>
            <h3>
              <Link to={blog.title}>{blog.title}</Link>
            </h3>
            <p>{`${blog.day}.${blog.month}.${blog.year}`}</p>
            <img src={blog.img}></img>
            <p>{blog.summaryText}</p>
          </div>
        );
      })}
    </section>
  );
}

export default BlogPreviews;
