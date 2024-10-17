import styles from "./About.module.css";
import { Link } from "react-router-dom";
import InNumbers from "../InNumbers/InNumbers";
import group1 from "../../assets/group1.jpg"

function About() {
  return (
    <section className={styles.about}>
      
      <div className={styles.left}>
      <p>
          The short version of my story is this: I’m a career-switcher, having
          started my career in the languages industry before landing my current
          role as a Pega Apprentice. I loved learning languages (and still do!)
          because I’m a big fan of grammar rules (the first clue that maybe I’d
          enjoy coding), but I struggled to find a job in the languages industry
          that was the right fit for me.<br></br>
          <br></br> After discovering that I enjoyed coding, I taught myself
          HTML, CSS and JavaScript using Codecademy and worked hard at
          networking. I went to in-person events, arranged shadowing in a tech
          team, joined an online programme for women in tech and worked with a
          mentor to improve my CV and prepare for interviews.<br></br>
          <br></br> I applied for mainly apprenticeships and grad schemes, as
          well as a few junior roles. I had mixed results but eventually, in
          January 2024, I accepted an offer as a Pega Apprentice. I started the
          role in February along with seven others and we embarked upon the
          journey of learning the low-code system of Pega!<br></br>
          <br></br> Outside of work, I still think of myself as a linguist. As
          well as keeping up with German, Spanish and Italian through
          Netflix/books/chatting to friends, I’m learning Norwegian on
          Duolingo since my friend got married there in August!<br></br>
          <br></br> I’m also a keen salsa and bachata dancer and spend many a
          weekend travelling to different cities to go to dance classes.
          <br></br>
          <br></br> Last but not least I’m a volunteer with Girlguiding, working
          towards their mission “helping all girls know they can do anything”.
          If you want to see more of my coding work, check out the <Link to="/projects">Projects</Link> page
          and <Link to="/blog">Blog</Link>. And if you’re interested in more about my background, <Link to="/about/story">read the longer version of my story here!</Link><br></br>
          <br></br>
        </p>
      </div>
      <div className={styles.right}>
      <img src={group1}></img>
      </div>
    </section>
  );
}

export default About;
