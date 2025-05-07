import styles from "./Projects.module.css";
import projects from "../../data/projects";
import Project from "../Project/Project";

function Projects() {
  return (
    <section className={styles.tiles}>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </section>
  );
}

export default Projects;
