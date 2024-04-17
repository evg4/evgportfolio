import styles from "./Footer.module.css";
import socials from "../../data/socials";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.footer1}>
        <p>Lizzie Codes</p>
        <div className={styles.socials}>
          {socials.map((social) => {
            return (
              <a href={social.link} target="blank">
                <img src={social.logo}></img>
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.footer2}>
        <p>Useful links</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className={styles.footer3}>
        <p>Get in touch</p>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
