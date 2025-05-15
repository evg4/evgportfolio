import styles from "./BlogPreview.module.css";
import { Link } from "react-router-dom";

function BlogPreview(props) {
  return (
    <div key={props.blog.title} className={styles.blogPreview}>
      <h3>
        <Link to={props.blog.title}>{props.blog.title}</Link>
      </h3>
      <p>{`${props.blog.day}.${props.blog.month}.${props.blog.year}`}</p>
      <img src={props.blog.img} alt={props.blog.alt}></img>
      <p>{props.blog.summaryText}</p>
    </div>
  );
}

export default BlogPreview;
