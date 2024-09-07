import styles from "./ProjectPage.module.css";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProjectPage() {
  let { title } = useParams();
  return <p>Project page</p>;
}

export default ProjectPage;
