import BlogPreviews from "../BlogPreviews/BlogPreviews";
import Archive from "../Archive/Archive";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <section>
      <div className={styles.blogPage}>
        <div className={styles.archive}>
          <Archive />
        </div>
        <div className={styles.preview}>
          <BlogPreviews />
        </div>
      </div>
    </section>
  );
}

export default Blog;
