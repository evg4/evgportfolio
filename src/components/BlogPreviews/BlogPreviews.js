import styles from "./BlogPreviews.module.css";
import blogs from "../../data/blogs";

function BlogPreviews() {
  return (
    <section>
      {blogs.map((blog) => {
        return (
          <div key={blog.title} className={styles.blogPreview}>
            <h3>{blog.title}</h3>
            <p>{`${blog.day}.${blog.month}.${blog.year}`}</p>
            <img></img>
            <p>{blog.summaryText}</p>
          </div>
        );
      })}
    </section>
  );
}

export default BlogPreviews;
