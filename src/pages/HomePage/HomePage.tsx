import classNames from "classnames/bind";
import Calendar from "../../components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.css";

const cx = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={cx("main")}>
        <div className="layout_wrapper">
          <Calendar />

          <ul className={cx("categories")}>
            <li className={cx("category")}>대쉬보드</li>
            <li className={cx("category")}>식사 기록</li>
          </ul>
        </div>
      </main>
    </>
  );
}
