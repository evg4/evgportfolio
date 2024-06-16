import BlogPreviews from "../BlogPreviews/BlogPreviews";
import Archive from "../Archive/Archive";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <section>
      <div className={styles.blogPage}>
        <div className={styles.preview}>
          <BlogPreviews />
        </div>
        <div className={styles.archive}>
          <Archive />
        </div>
      </div>
    </section>
  );
}

export default Blog;
