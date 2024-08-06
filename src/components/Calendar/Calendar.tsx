import classNames from "classnames/bind";
import styles from "./Calendar.module.css";
import { CiBowlNoodles } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";

const cn = classNames.bind(styles);

export default function Calendar() {
  return (
    <div>
      <div>2024년 8월</div>
      <ul className={cn("dates")}>
        {new Array(31).fill(0).map((_, index) => (
          <li className={cn("date")}>
            {index === 0 && (
              <div className={cn("foodBox")}>
                <CiBowlNoodles size={20} />
                <FaHamburger />
                <FaHamburger />
                <FaHamburger />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
