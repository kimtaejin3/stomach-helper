import classNames from "classnames/bind";
import styles from "./Calendar.module.css";

const cn = classNames.bind(styles);

export default function Calendar() {
  return (
    <div>
      <div>2024년 8월</div>
      <ul className={cn("dates")}>
        {new Array(31).fill(0).map((_, index) => (
          <li className={cn("date")}>{index + 1}</li>
        ))}
      </ul>
    </div>
  );
}
