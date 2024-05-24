import styles from "./NextButton.module.css";
import { useNavigate, useParams } from "react-router-dom";
import blogs from "../../data/blogs";

function NextButton() {
  function handleClick() {
    navigate(`/blog/${nextBlog}`);
  }
  const navigate = useNavigate();
  let { title } = useParams();
  let blog = blogs.find((object) => object.title === title);
  let nextBlog;
  let disabled;
  if (blogs.indexOf(blog) === 0) {
    nextBlog = "";
    disabled = true;
  } else {
    nextBlog = blogs[blogs.indexOf(blog) - 1].title;
  }

  return disabled ? (
    <button disabled onClick={handleClick}>
      Next
    </button>
  ) : (
    <button onClick={handleClick}>Next</button>
  );
}

export default NextButton;
