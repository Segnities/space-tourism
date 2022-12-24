import React, { useState } from "react";

import { nanoid } from "nanoid";

import crewData from "./data/data.json";

import { useBackgroundChange } from "../../hooks/useBackgroundChange";
import { useFindPageIndex } from "../../hooks/useFindPageIndex";

import CrewDesktopBackground from "./assets/img/background-crew-desktop.jpg";
import CrewTabletBackground from "./assets/img/background-crew-tablet.jpg";
import CrewMobileBackground from "./assets/img/background-crew-mobile.jpg";

import styles from "./assets/css/Crew.module.css";

function Crew() {
  const pageIndex = useFindPageIndex();
  const [crewMember, setCrewMember] = useState(crewData.crew[0]);

  useBackgroundChange({
    backgroundHomeDesktop: CrewDesktopBackground,
    backgroundHomeTablet: CrewTabletBackground,
    backgroundHomeMobile: CrewMobileBackground,
  });
  return (
    <main className={styles["crew"]}>
      <section className={styles["member-info"]}>
        <h2>
          <b>0{pageIndex}</b> MEET YOUR CREW
        </h2>
        <div className={styles["member-bio"]}>
          <p className={styles["role"]}>{crewMember.role.toUpperCase()}</p>
          <h3 className={styles["name"]}>{crewMember.name.toUpperCase()}</h3>
          <p className={styles["bio"]}>{crewMember.bio}</p>
        </div>
        <div className={styles["caurosel"]}>
          {crewData.crew.map((member) => (
            <div
              className={
                crewMember.name === member.name
                  ? `${styles["slide"]} ${styles["active-slide"]}`
                  : styles["slide"]
              }
              key={nanoid()}
              onClick={() => {
                setCrewMember(member);
              }}
            ></div>
          ))}
        </div>
      </section>
      <div className={styles["crew-member-img"]}>
        <img
          src={crewMember.images.png}
          alt=""
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </main>
  );
}

export default Crew;
