import styles from "./ProjectsPage.module.css";
import Projects from "../Projects/Projects";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <section>
      <div className={styles.projectsSection}>
        <p>
          Here is a selection of my favourite projects. Click on a tile to visit
          the page and see it in action! These are the ones I'm most proud of,
          but if you want to see more you can{" "}
          <Link to="/blog">visit my blog</Link>.
        </p>
      </div>
      <Projects />
    </section>
  );
}

export default ProjectsPage;
