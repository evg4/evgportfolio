import styles from "./Archive.module.css";
import { years, blogTitles } from "../../data/blogs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
                      <ul>
                        {month.days.map((day) => {
                          let date = `${day}.${month.month}.${year.year}`;
                          return (
                            <li
                              className={styles.day}
                              key={year.year + month.month + day}
                            >
                              <Link
                                to={blogTitles[date]}
                              >{`${blogTitles[date]}`}</Link>
                            </li>
                          );
                        })}
                      </ul>
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
