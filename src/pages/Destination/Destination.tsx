import React, { useState } from "react";

import destinationData from "./data/data.json";

import { useBackgroundChange } from "../../hooks/useBackgroundChange";
import { useFindPageIndex } from "../../hooks/useFindPageIndex";

import DestinationDesktop from "./assets/img/background-destination-desktop.jpg";
import DestinationTablet from "./assets/img/background-destination-tablet.jpg";
import DestinationMobile from "./assets/img/background-destination-mobile.jpg";

import styles from "./assets/css/Destination.module.css";

function Destination() {
  const pageIndex = useFindPageIndex();
  const [slide, setSlide] = useState(destinationData.destinations[0]);
  useBackgroundChange({
    backgroundHomeDesktop: DestinationDesktop,
    backgroundHomeTablet: DestinationTablet,
    backgroundHomeMobile: DestinationMobile,
  });

  return (
    <main className={styles["destination"]}>
      <section className={styles["pick-destination"]}>
        <h2>
          <b>0{pageIndex}</b> PICK YOUR DESTINATION
        </h2>
        <img
          src={slide.images.png}
          alt=""
          className={styles["destination-image"]}
          onDragStart={(e) => e.preventDefault()}
        />
      </section>
      <article className={styles["content-desctiption"]}>
        <ul>
          {destinationData.destinations.map((dest) => (
            <li
              onClick={() => {
                setSlide(dest);
              }}
              key={dest.name}
              className={slide.name === dest.name ? styles["active"] : ""}
            >
              {dest.name.toUpperCase()}
            </li>
          ))}
        </ul>
        <h1>{slide.name.toUpperCase()}</h1>
        <p>{slide.description}</p>
        <hr />
        <div className={styles["destination-travel-info"]}>
          <div className={styles["distance"]}>
            <p>AVG. DISTANCE</p>
            <p>{slide.distance.toUpperCase()}</p>
          </div>
          <div className={styles["travel"]}>
            <p>EST. TRAVEL TIME</p>
            <p>{slide.travel.toUpperCase()}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Destination;
