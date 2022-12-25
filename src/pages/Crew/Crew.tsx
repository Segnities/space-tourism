import React, { useState } from "react";

import { nanoid } from "nanoid";

import crewData from "./data/data.json";

import { useBackgroundChange } from "../../hooks/useBackgroundChange";
import { useFindPageIndex } from "../../hooks/useFindPageIndex";
import { useResizeObserver } from "../../hooks/useResizeObserver";

import CrewDesktopBackground from "./assets/img/background-crew-desktop.jpg";
import CrewTabletBackground from "./assets/img/background-crew-tablet.jpg";
import CrewMobileBackground from "./assets/img/background-crew-mobile.jpg";

import styles from "./assets/css/Crew.module.css";

type crewMember = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

interface crewDeviceProps {
  pageIndex: number;
  crewMember: crewMember;
  setCrewMember: (member: crewMember) => void;
}
interface cauroselProps {
  crewMember: crewMember;
  setCrewMember: (member: crewMember) => void;
}

function Caurosel(props: cauroselProps) {
  return (
    <div className={styles["caurosel"]}>
      {crewData.crew.map((member) => (
        <div
          className={
            props.crewMember.name === member.name
              ? `${styles["slide"]} ${styles["active-slide"]}`
              : styles["slide"]
          }
          key={nanoid()}
          onClick={() => {
            props.setCrewMember(member);
          }}
        ></div>
      ))}
    </div>
  );
}

function CrewMobile(props: crewDeviceProps) {
  return (
    <section className={styles["memberInfo"]}>
      <h2>
        <b>0{props.pageIndex}</b> MEET YOUR CREW
      </h2>
      <div className={styles["member-bio"]}>
        <img src={props.crewMember.images.png} alt="" />
        <Caurosel
          crewMember={props.crewMember}
          setCrewMember={props.setCrewMember}
        />
      </div>
    </section>
  );
}

function CrewDesktop(props: crewDeviceProps) {
  return (
    <>
      <section className={styles["member-info"]}>
        <h2>
          <b>0{props.pageIndex}</b> MEET YOUR CREW
        </h2>
        <div className={styles["member-bio"]}>
          <p className={styles["role"]}>
            {props.crewMember.role.toUpperCase()}
          </p>
          <h3 className={styles["name"]}>
            {props.crewMember.name.toUpperCase()}
          </h3>
          <p className={styles["bio"]}>{props.crewMember.bio}</p>
        </div>
        <Caurosel
          crewMember={props.crewMember}
          setCrewMember={props.setCrewMember}
        />
      </section>
      <div className={styles["crew-member-img"]}>
        <img
          src={props.crewMember.images.png}
          alt=""
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </>
  );
}

function Crew() {
  const pageIndex = useFindPageIndex();
  const [crewMember, setCrewMember] = useState(crewData.crew[0]);
  const resizeObserver = useResizeObserver();

  const deviceProps = { pageIndex, crewMember, setCrewMember };

  useBackgroundChange({
    backgroundHomeDesktop: CrewDesktopBackground,
    backgroundHomeTablet: CrewTabletBackground,
    backgroundHomeMobile: CrewMobileBackground,
  });

  return (
    <main className={styles["crew"]}>
      {resizeObserver.isDesktop ? (
        <CrewDesktop {...deviceProps} />
      ) : (
        <CrewMobile {...deviceProps} />
      )}
    </main>
  );
}

export default Crew;
