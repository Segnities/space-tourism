import React from "react";

import styles from "./assets/css/Header.module.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

function Header() {
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
