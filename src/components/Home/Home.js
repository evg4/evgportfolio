import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import InNumbers from "../InNumbers/InNumbers";
import heroPhoto from "../../assets/me1-hero.jpg";

function Home() {
  return (
    <section className={styles.home}>
      <div
        className={styles.homeTop}
        role="group"
        aria-label="Introduction with a photo of Lizzie"
      >
        <img
          className={styles.portrait}
          src={heroPhoto}
          alt="Lizzie smiling in front of a pale curtain with fairy lights."
        />
        <div className={styles.intro}>
          <p>
            Hi, I’m Lizzie (she/her) – a linguist-turned-coder currently working
            as a Software Developer at Deloitte.
            <br />
            <br />
            I started teaching myself to code in April 2023 when I was working
            as a freelance translator. I quickly became obsessed and started
            spending less and less time translating in favour of writing more
            lines of code.
            <br />
            <br />
            After completing a course in front-end engineering in December 2023,
            I started my first tech role as a Pega Apprentice at Jetty
            Technologies, learning the low-code system of Pega. I was later
            promoted to Pega Developer and passed my Pega System Architect exam.
            I then did a 12-week bootcamp with Makers where I learnt Python, SQL
            and Java, and then started my role at Deloitte.
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
        </div>
      </div>
      <div className={styles.numbers}>
        <InNumbers />
      </div>
    </section>
  );
}

export default Home;
