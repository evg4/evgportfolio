import styles from "./ProjectPage.module.css";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";

function ProjectPage() {
  let { title } = useParams();
  return (
    <section>
      <p>Project page</p>
      <BackButton newLink="/projects" newLinkText="Back to all projects" />
    </section>
  );
}

export default ProjectPage;
