import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import photo from "../../assets/sunflowers.jpg";
import TwitterTimeline from "../TwitterTimeline/TwitterTimeline";
import InNumbers from "../InNumbers/InNumbers";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.homeTop}>
        <p>
          Hi, I’m Lizzie (she/her) – a linguist-turned-coder currently working
          as a Pega Apprentice.
          <br />
          <br />
          I started teaching myself to code in April 2023 when I was working as
          a freelance translator. I quickly became obsessed and started spending
          less and less time translating in favour of writing more lines of
          code.
          <br />
          <br />
          After completing a course in front-end engineering in December 2023, I
          started applying for tech roles, and was lucky enough to land a job at
          Jetty Technologies as a Pega Apprentice, where I’m learning the
          low-code system of Pega.
          <br />
          <br />I built this portfolio to document my learning and keep all my
          projects in one place. If you want to go right back to the beginning
          and see how much I’ve progressed, head over to the{" "}
          <Link to="/blog">blog</Link>. If you just want to see the highlights,
          check out the <Link to="/projects">projects</Link> page.
          <br />
          <br />
          And if you’re interested in my background and how I ended up career
          switching from languages to tech, have a read of the{" "}
          <Link to="/about">about</Link> page.
          <br />
          <br />
          Thanks for visiting!
        </p>
        <div className={styles.imgDiv}>
          <img src={photo}></img>
        </div>
      </div>
      <div className={styles.numbers}>
        <InNumbers />
      </div>
      <TwitterTimeline />
    </section>
  );
}

export default Home;
