import styles from "./Projects.module.css" 
import projects from "../../data/projects";

function Projects() {
    return <section>
    <h2>Projects</h2>
        <div className={styles.tiles}>
            {projects.map((project) => {
                return(<div className={styles.tile}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <img src={project.image}>{/*add image source!*/}</img>
                <p><strong>Date:</strong> {project.date}</p>
                <p><strong>Languages and frameworks:</strong> {project.languages}</p>
                
                
        </div>)
    })}
    </div>
    </section>
}

export default Projects;