import styles from "./Archive.module.css";
import blogs from "../../data/blogs";
import { years } from "../../data/blogs";

let monthsObj = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

function Archive() {
  return (
    <section className={styles.archive}>
      {years.map((year) => {
        return (
          <div key={year.year}>
            <details className={styles.year}>
              <summary>{year.year}</summary>
              {year.months.map((month) => {
                return (
                  <div key={year.year + month.month}>
                    <details className={styles.month}>
                      <summary>{monthsObj[month.month]}</summary>

                      {month.days.map((day) => {
                        return (
                          <p
                            className={styles.day}
                            key={year.year + month.month + day}
                          >
                            {`${day}.${month.month}.${year.year}`}
                          </p>
                        );
                      })}
                    </details>
                  </div>
                );
              })}
            </details>
          </div>
        );
      })}
    </section>
  );
}

/*function Archive() {
  return (
    <section>
      <div className={styles.archiveDiv}>
        <h3>Archive</h3>
        <details>
          <summary>2024</summary>
          <details>
            <summary>April</summary>
            <p>05.04.24</p>
            <p>01.04.24</p>
          </details>
          <details>
            <summary>March</summary>
            <p>11.03.24</p>
          </details>
        </details>
      </div>
    </section>
  );
}*/

export default Archive;
