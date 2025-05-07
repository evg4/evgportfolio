import styles from "./Project.module.css";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div
      key={props.project.title}
      id={props.project.link}
      className={styles.tile}
    >
      <Link to={props.project.title}>
        <h3>{props.project.title}</h3>
        <p className={styles.description}>{props.project.description}</p>
        <img src={props.project.image} alt={props.project.alt}></img>
        <p>
          <strong>Date:</strong> {props.project.date}
        </p>
        <p>
          <strong>Languages and frameworks:</strong> {props.project.languages}
        </p>
      </Link>
    </div>
  );
}

export default Project;
