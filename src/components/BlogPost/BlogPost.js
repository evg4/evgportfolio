import styles from "./BlogPost.module.css";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import BackButton from "../BackButton/BackButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import NextButton from "../NextButton/NextButton";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function BlogPost() {
  let { title } = useParams();
  let blog = blogs.find((object) => object.title === title);
  return (
    <section className={styles.blogPostPage}>
      <div className={styles.blogPost}>
        <h2>{title}</h2>
        <p>{`${blog.day}.${blog.month}.${blog.year}`}</p>
        <img src={blog.img}></img>
        <p>{parse(blog.fullText)}</p>
      </div>
      <div className={styles.buttons}>
        <BackButton newLink="/blog" newLinkText="Back to all blogs" />
        <div>
          <PreviousButton mainPath="/blog/" arrayToSearch={blogs} />
          <NextButton mainPath="/blog/" arrayToSearch={blogs} />
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
