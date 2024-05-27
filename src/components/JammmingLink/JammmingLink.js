import styles from "./JammmingLink.module.css";
import jammming from "../../assets/jammming.mp4";
import { Link } from "react-router-dom";

function JammmingLink() {
  return (
    <section className={styles.jammming}>
      <video src={jammming} controls>
        Video not supoorted.
      </video>
      <p>
        Due to restrictions with the Spotify API, I am not able to deploy this
        project. However, here is a video where I demonstrate how it works.{" "}
        <br></br>
        <br></br>
        The app allows the user to connect to their Spotify account. They are
        then able to search for a song or artist and browse the results. They
        can add items to a new playlist, give it a name, then save it directly
        to their Spotify account. I learnt so much whilst building this - you
        can read more on my <Link to="/blog/Jammming">blogs</Link> page.
      </p>
    </section>
  );
}

export default JammmingLink;
