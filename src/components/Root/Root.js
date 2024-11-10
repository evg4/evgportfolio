import styles from "./Root.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function Root() {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
