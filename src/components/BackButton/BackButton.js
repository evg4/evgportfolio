import styles from "./BackButton.module.css";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to="/blog">
      <button>Back to all posts</button>
    </Link>
  );
}

export default BackButton;
