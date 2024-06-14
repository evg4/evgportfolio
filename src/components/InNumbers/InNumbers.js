import styles from "./InNumbers.module.css";

function InNumbers() {
  let startDate = new Date("January 29, 23");
  let startTime = startDate.getTime();
  let currentTime = new Date();
  let difference = currentTime - startTime;
  let daysCoding = Math.floor(difference / 1000 / 3600 / 24);

  return (
    <section className={styles.numbersDiv}>
      <p>
        Days spent coding:<br></br> {daysCoding}
      </p>
      <p>
        Certificates gained:<br></br> 8
      </p>
      <p>
        Projects completed:<br></br> 27
      </p>
    </section>
  );
}

export default InNumbers;
