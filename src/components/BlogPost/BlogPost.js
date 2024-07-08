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
    <div className={styles.blogPost}>
      <section>
        <h2>{title}</h2>
        <Link target="_blank" to={blog.link}>
          Visit live site here
        </Link>
        <p>{`${blog.day}.${blog.month}.${blog.year}`}</p>
        <img src={blog.img}></img>
        <p>{parse(blog.fullText)}</p>
      </section>
      <div className={styles.buttons}>
        <BackButton />
        <div>
          <PreviousButton />
          <NextButton />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
