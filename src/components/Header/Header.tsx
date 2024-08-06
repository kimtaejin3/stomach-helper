import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { GiStomach } from "react-icons/gi";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <div className="layout_wrapper">
        <div className="headings">
          <Link to="#">
            <GiStomach size={30} color="A9A4EE" />
          </Link>
        </div>
      </div>
    </header>
  );
}
