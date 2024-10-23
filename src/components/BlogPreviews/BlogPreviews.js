import styles from "./BlogPreviews.module.css";
import blogs from "../../data/blogs";
import { Link } from "react-router-dom";
import { useState } from "react";

function BlogPreviews() {
  const [selected, setSelected] = useState(blogs);

  return (
    <section className={styles.previewSection}>
      {selected.map((blog) => {
        return (
          <div key={blog.title} className={styles.blogPreview}>
            <h3>
              <Link to={blog.title}>{blog.title}</Link>
            </h3>
            <p>{`${blog.day}.${blog.month}.${blog.year}`}</p>
            <img src={blog.img} alt={blog.alt}></img>
            <p>{blog.summaryText}</p>
          </div>
        );
      })}
    </section>
  );
}

export default BlogPreviews;
