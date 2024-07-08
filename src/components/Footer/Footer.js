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
              <a key={social.site} href={social.link} target="_blank">
                <img src={social.logo}></img>
              </a>
            );
          })}
        </div>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/*
      
      <div className={styles.footerDiv}>
        <p>Site map</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/*<li>
            <Link to="/courses">Courses</Link>
          </li>*/}
      {/*
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerDiv}>
        <p>Get in touch</p>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>*/}
    </footer>
  );
}

export default Footer;
