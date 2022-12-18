import React from "react";

import { Link } from "react-router-dom";
import { headerLinks } from "../../../router";

import Logotype from "./assets/img/logo.svg";

import styles from "./assets/css/Header.module.css";


function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <Link to={"/"}><img src={Logotype} alt="" /></Link>
      </div>
      <div className={styles["line"]}>
        <hr />
      </div>
      <nav className={styles["navbar"]}>
        <ul>
          {headerLinks.map((link, idx) => (
            <li key={link.id}>
              <Link key={link.id} to={link.to}>
                <b>0{idx}</b> {link.title.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
