import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : undefined
            }
            to="/"
          >
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : undefined
            }
            to="/about"
          >
            About
          </NavLink>{" "}
        </li>
        {/*<li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : undefined
            }
            to="/courses"
          >
            Courses
          </NavLink>
          </li>*/}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : undefined
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : undefined
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : undefined
            }
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
