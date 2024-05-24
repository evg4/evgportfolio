import styles from "./BlogPost.module.css";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import BackButton from "../BackButton/BackButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import NextButton from "../NextButton/NextButton";

function BlogPost() {
  let { title } = useParams();
  let blog = blogs.find((object) => object.title === title);
  return (
    <div className={styles.blogPost}>
      <section>
        <h2>{title}</h2>
        <p>{`${blog.day}.${blog.month}.${blog.year}`}</p>
        <img src={blog.img}></img>
        <p>{blog.fullText}</p>
      </section>
      <BackButton />
      <PreviousButton />
      <NextButton />
    </div>
  );
}

export default BlogPost;
