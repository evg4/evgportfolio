import styles from "./Project.module.css";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
  const navigate = useNavigate();

  function handleClick(e) {
    window.open(e.currentTarget.id);
  }

  return (
    <section className={styles.projectsSection}>
      <div className={styles.tiles}>
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              id={project.link}
              //onClick={handleClick}
              className={styles.tile}
            >
              <Link to={project.title}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <img src={project.image}></img>
                <p>
                  <strong>Date:</strong> {project.date}
                </p>
                <p>
                  <strong>Languages and frameworks:</strong> {project.languages}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
