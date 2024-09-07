import styles from "./ProjectPage.module.css";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import NextButton from "../NextButton/NextButton";

function ProjectPage() {
  let { title } = useParams();
  let project = projects.find((object) => object.title === title);

  return (
    <section className={styles.projectPage}>
      <h2>{title}</h2>
      <p
        className={project.link !== "" ? styles.liveLink : styles.inactiveLink}
      >
        <Link target="_blank" to={project.link}>
          Visit live site here
        </Link>
      </p>
      <p>
        <strong>Date:</strong> {project.date}
      </p>
      <p>
        <strong>Languages and frameworks:</strong> {project.languages}
      </p>
      <video src={project.video} width="80%" controls>
        Video not supported
      </video>
      <p>{project.details}</p>
      <div className={styles.buttons}>
        {" "}
        <BackButton newLink="/projects" newLinkText="Back to all projects" />
        <div>
          <PreviousButton mainPath="/projects/" arrayToSearch={projects} />
          <NextButton mainPath="/projects/" arrayToSearch={projects} />
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
