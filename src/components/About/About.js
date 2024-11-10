import styles from "./About.module.css";
import { Link } from "react-router-dom";
/*import InNumbers from "../InNumbers/InNumbers";*/
import group1 from "../../assets/group1.jpg";
import me2 from "../../assets/me2.jpg";
import group3 from "../../assets/group3.jpg";
import me5 from "../../assets/me5.jpg";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.imgs}>
        <img
          src={group1}
          alt="Around 50 woman, of different ages and races, are standing or sitting on a stage. They are all smiling at the camera."
        ></img>
        <img
          src={me2}
          alt="Lizzie, wearing a grey jumper dress, is chatting to a man wearing a navy suit."
        ></img>
        {/*} <img src={group2} ></img>*/}
        <img
          src={group3}
          alt="Lizzie stands with 4 other people - 3 women and 1 man - in front of posters for Cajigo and Epam. They are all smiling at the camera."
        ></img>
        <img
          src={me5}
          alt="Lizzie is wearing a Girlguiding uniform of white polo shirt and navy jacket. She has several metal badges. She is standing outside with grass and a building in the background, and smiling at the camera."
        ></img>
      </div>
      <div className={styles.text}>
        <p>
          The short version of my story is this: I’m a career-switcher, having
          started my career in the languages industry before landing my current
          role as a Pega Apprentice. I loved learning languages (and still do!)
          because I’m a big fan of grammar rules (the first clue that maybe I’d
          enjoy coding), but I struggled to find a job in the languages industry
          that was the right fit for me.<br></br>
          <br></br>
          After discovering that I enjoyed coding, I taught myself HTML, CSS and
          JavaScript using Codecademy and worked hard at networking. I went to
          in-person events, arranged shadowing in a tech team, joined an online
          programme for women in tech and worked with a mentor to improve my CV
          and prepare for interviews.<br></br>
          <br></br>I applied for mainly apprenticeships and grad schemes, as
          well as a few junior roles. I had mixed results but eventually, in
          January 2024, I accepted an offer as a Pega Apprentice. I started the
          role in February along with seven others and we embarked upon the
          journey of learning the low-code system of Pega!<br></br>
          <br></br>
          Outside of work, I still think of myself as a linguist. I keep up with
          German, Spanish and Italian through Netflix/books/chatting to friends,
          and I’ve recently started Norwegian on Duolingo! I’m also a keen salsa
          and bachata dancer and spend many a weekend travelling to different
          cities to go to dance classes. Last but not least I volunteer with
          Girlguiding, working towards their mission “helping all girls know
          they can do anything”.<br></br>
          <br></br>
          If you want to see more of my coding work, check out the{" "}
          <Link to="/projects">Projects</Link> page and{" "}
          <Link to="/blog">Blog</Link>. And if you’re interested in more about
          my background,{" "}
          <Link to="/about/story">
            read the longer version of my story here!
          </Link>
        </p>
      </div>
    </section>
  );
}

export default About;
