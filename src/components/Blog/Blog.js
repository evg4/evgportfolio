import BlogPreviews from "../BlogPreviews/BlogPreviews";
import Archive from "../Archive/Archive";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <section className={styles.blogPage}>
      <div className={styles.preview}>
        <BlogPreviews />
      </div>
      <div className={styles.archive}>
        <Archive />
      </div>
    </section>
  );
}

export default Blog;
