import styles from "./Projects.module.css";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  function handleClick(e) {
    window.open(e.currentTarget.id);
  }

  return (
    <section className={styles.projectsSection}>
      <h2>Projects</h2>
      <p>
        Here is a selection of my favourite projects. Click on a tile to visit
        the page and see it in action! These are the ones I'm most proud of, but
        if you want to see more you can visit my <Link to="/blog">blog</Link>.
      </p>
      <div className={styles.tiles}>
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              id={project.link}
              onClick={handleClick}
              className={styles.tile}
            >
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <img src={project.image}></img>
              <p>
                <strong>Date:</strong> {project.date}
              </p>
              <p>
                <strong>Languages and frameworks:</strong> {project.languages}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
