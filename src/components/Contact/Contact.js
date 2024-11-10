import socials from "../../data/socials";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section>
      <div className={styles.contact}>
        <div>
          {" "}
          <p>Let's keep in touch.</p>
          <div className={styles.socials}>
            {socials.map((social) => {
              return (
                <a href={social.link} target="_blank" rel="noreferrer">
                  <img alt="logo" src={social.logo}></img>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
