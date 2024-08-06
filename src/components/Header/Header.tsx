import classNames from "classnames/bind";
import styles from "./Header.module.css";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <div className="layout_wrapper">
        <div className="headings">Header</div>
      </div>
    </header>
  );
}
