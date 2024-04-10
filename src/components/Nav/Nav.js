import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/"
          >
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/about"
          >
            About
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/courses"
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
