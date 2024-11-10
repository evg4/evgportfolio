import styles from "./Footer.module.css";
import socials from "../../data/socials";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.footerDiv}>
        <h3>Lizzie Codes</h3>
        <div className={styles.socials}>
          {socials.map((social) => {
            return (
              <a
                key={social.site}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={social.logo} alt="logo"></img>
              </a>
            );
          })}
        </div>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
