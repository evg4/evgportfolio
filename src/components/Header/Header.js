import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Lizzie Codes</h1>
      </Link>

      <Nav />
    </header>
  );
}

export default Header;
