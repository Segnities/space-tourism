import React from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./assets/css/Header.module.css";
import { useResizeObserver } from "../../../hooks/useResizeObserver";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

function Header() {
  const clientWidth = useResizeObserver();
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className={styles["header"]}>
      <Logo />
      <div className={styles["line"]}>
        <hr />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
