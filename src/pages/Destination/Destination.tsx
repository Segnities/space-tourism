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
  const [destination, setDestination] = useState(destinationData.destinations[0]);
  
  useBackgroundChange({
    backgroundDesktop: DestinationDesktop,
    backgroundTablet: DestinationTablet,
    backgroundMobile: DestinationMobile,
  });

  return (
    <main className={styles["destination"]}>
      <section className={styles["pick-destination"]}>
        <h2>
          <b>0{pageIndex}</b> PICK YOUR DESTINATION
        </h2>
        <img
          src={destination.images.png}
          alt=""
          className={styles["destination-image"]}
          onDragStart={(e) => e.preventDefault()}
        />
      </section>
      <article className={styles["content-description"]}>
        <ul>
          {destinationData.destinations.map((dest) => (
            <li
              onClick={() => {
                setDestination(dest);
              }}
              key={dest.name}
              className={destination.name === dest.name ? styles["active"] : ""}
            >
              {dest.name.toUpperCase()}
            </li>
          ))}
        </ul>
        <h1>{destination.name.toUpperCase()}</h1>
        <p>{destination.description}</p>
        <hr />
        <div className={styles["destination-travel-info"]}>
          <div className={styles["distance"]}>
            <p>AVG. DISTANCE</p>
            <p>{destination.distance.toUpperCase()}</p>
          </div>
          <div className={styles["travel"]}>
            <p>EST. TRAVEL TIME</p>
            <p>{destination.travel.toUpperCase()}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Destination;
