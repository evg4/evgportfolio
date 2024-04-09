import { NavLink } from "react-router-dom";

function Nav() {
    return <nav>
        <ul>
            <li> <NavLink to="/">About</NavLink> </li>
            <li>Courses</li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </nav>
}

export default Nav;