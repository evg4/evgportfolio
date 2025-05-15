import styles from "./BlogPreviews.module.css";
import blogs from "../../data/blogs";
import BlogPreview from "./../BlogPreview/BlogPreview";

function BlogPreviews() {
  return (
    <section className={styles.previewSection}>
      {blogs.map((blog) => {
        return <BlogPreview blog={blog} />;
      })}
    </section>
  );
}

export default BlogPreviews;
