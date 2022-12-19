import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import BackgroundHomeDesktop from "./assets/img/background-home-desktop.jpg";
import BackgroundHomeTablet from "./assets/img/background-home-tablet.jpg";
import BackgroundHomeMobile from "./assets/img/background-home-mobile.jpg";

import styles from "./assets/css/Home.module.css";
import { changeBackgroundAction } from "../../store/backgroundImageReducer";
import { useResizeObserver } from "../../hooks/useResizeObserver";

function Home() {
  const clientWidth = useResizeObserver();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBackgroundAction({
        desktop: BackgroundHomeDesktop,
        tablet: BackgroundHomeTablet,
        mobile: BackgroundHomeMobile,
        clientWidth,
      })
    );
  }, [clientWidth]);

  return (
    <main className={styles["home"]}>
      <section className={styles["content"]}>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className={styles["explore"]}>
        <div className={styles["explore-btn"]}>
          <div className={styles["bubble"]}></div>
          <span>EXPLORE</span>
        </div>
      </div>
    </main>
  );
}

export default Home;
