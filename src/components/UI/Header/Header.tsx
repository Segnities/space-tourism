import React from "react";

import { Link, useLocation } from "react-router-dom";
import { headerLinks } from "../../../router";

import Logotype from "./assets/img/logo.svg";
import BurgerMenu from "./assets/img/icon-hamburger.svg";
import CloseBurgerMenu from "./assets/img/icon-close.svg";

import styles from "./assets/css/Header.module.css";
import { useResizeObserver } from "../../../hooks/useResizeObserver";

function Header() {
  const clientWidth = useResizeObserver();
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <Link to={"/"}>
          <img src={Logotype} alt="" />
        </Link>
      </div>
      <div className={styles["line"]}>
        <hr />
      </div>
      <nav className={styles["navbar"]}>
        <ul>
          {headerLinks.map((link, idx) => (
            <li key={link.id}>
              <Link
                key={link.id}
                to={link.to}
                className={path === link.to ? styles["active"] : ""}
              >
                <b>0{idx}</b> <span>{link.title.toUpperCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
