import React, { useState } from "react";

import technologyData from "./data/data.json";

import { useBackgroundChange } from "../../hooks/useBackgroundChange";
import { useFindPageIndex } from "../../hooks/useFindPageIndex";

import DesktopBackground from "./assets/img/background-technology-desktop.jpg";
import TabletBackground from "./assets/img/background-technology-tablet.jpg";
import MobileBackground from "./assets/img/background-technology-mobile.jpg";

import styles from "./assets/css/Technology.module.css";
import { useResizeObserver } from "../../hooks/useResizeObserver";

function Technology() {
  const pageIndex = useFindPageIndex();
  const [technology, setTechnology] = useState(technologyData.technology[0]);
  const resizeObserver = useResizeObserver();

  useBackgroundChange({
    backgroundDesktop: DesktopBackground,
    backgroundTablet: TabletBackground,
    backgroundMobile: MobileBackground,
  });

  return (
    <main className={styles["technology"]}>
      <h2>
        <b>0{pageIndex}</b> SPACE LAUNCH 101
      </h2>
      <div className={styles["container"]}>
        <div className={styles["caurosel"]}>
          {technologyData.technology.map((tech, idx) => (
            <div className={`${styles["slide"]} ${tech.name === technology.name ? styles["active"] : ""}`} key={tech.name} onClick={() => setTechnology(tech)}>{idx + 1}</div>
          ))}
        </div>
        <div className={styles["technology-description"]}>
          <p>THE TECHNOLOGY ...</p>
          <h1 className="name">{technology.name}</h1>
          <p>{technology.description}</p>
        </div>
        <div className="img">
          <img
            src={
              resizeObserver.isDesktop
                ? technology.images.portrait
                : technology.images.landscape
            }
            alt=""
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </main>
  );
}

export default Technology;
