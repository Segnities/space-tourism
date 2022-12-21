import React from "react";

import { Link, useLocation } from "react-router-dom";

import { headerLinks } from "../../../router";

import styles from "./assets/css/Navbar.module.css";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
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
  );
}

export default Navbar;
