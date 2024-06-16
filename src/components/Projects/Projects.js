import styles from "./Projects.module.css";
import projects from "../../data/projects";
import Project from "../Project/Project";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2>Projects</h2>
      <p>
        Here is a selection of my favourite projects. Click on a tile to visit
        the page and see it in action! These are the ones I'm most proud of, but
        if you want to see more you can <Link to="/blog">visit my blog</Link>.
      </p>
      <Project />
    </section>
  );
}

export default Projects;
