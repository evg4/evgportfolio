import styles from "./Archive.module.css";
import blogs from "../../data/blogs";
import { years } from "../../data/blogs";

function Archive() {
  return years.map((year) => {
    return (
      <div>
        <p>Year: {year.year}</p>
        {year.months.map((month) => {
          return (
            <div>
              <p>Month: {month.month}</p>
              {month.days.map((day) => {
                return <p>Day: {day}</p>;
              })}
            </div>
          );
        })}
      </div>
    );
  });
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
