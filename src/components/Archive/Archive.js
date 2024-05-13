import styles from "./Archive.module.css";
import { years, blogTitles } from "../../data/blogs";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <section className={styles.archive}>
      <h2>Archive</h2>

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
                        let date = `${day}.${month.month}.${year.year}`;
                        return (
                          <p
                            className={styles.day}
                            key={year.year + month.month + day}
                          >
                            {`${date}: ${blogTitles[date]}`}
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

export default Archive;
