import styles from "./BackButton.module.css";
import { Link } from "react-router-dom";

function BackButton(props) {
  return (
    <Link to={props.newLink}>
      <button className={styles.button}>{props.newLinkText}</button>
    </Link>
  );
}

export default BackButton;
