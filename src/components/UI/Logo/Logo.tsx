import React from "react";

import { Link } from "react-router-dom";

import Logotype from "./assets/img/logo.svg";

import styles from "./assets/css/Logo.module.css";

const Logo = () => {
    return (
      <div className={styles["logo"]}>
        <Link to={"/"}>
          <img src={Logotype} alt="" />
        </Link>
      </div>
    );
}

export default Logo;