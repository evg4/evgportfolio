import socials from "../../data/socials";
import styles from "./Contact.module.css";
import journey from "../../assets/stepping-stones2.jpg";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact2}>
        {" "}
        <p>Let's keep in touch.</p>
        <div className={styles.socials}>
          {socials.map((social) => {
            return (
              <a href={social.link} target="blank">
                <img src={social.logo}></img>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
