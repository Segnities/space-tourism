import React, { useState } from "react";

import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

import BurgerMenu from "./assets/img/icon-hamburger.svg";
import CloseBurgerMenu from "./assets/img/icon-close.svg";

import styles from "./assets/css/Header.module.css";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={styles["header"]}>
        <Logo />
        <img
          src={isOpen === false ? BurgerMenu : CloseBurgerMenu}
          alt=""
          onClick={() => setIsOpen(!isOpen)}
        />
      </header>
      {isOpen && (
        <div className={styles["wrapper"]}>
          <div className={styles["menu"]}>
            <Navbar />
          </div>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
