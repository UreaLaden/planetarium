import { styles } from "@/styles/Planet.css";
import * as React from "react";
import PlanetStats from "./PlanetStats";

export const PlanetContent = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.planetImage}>IMAGE</div>
      <div className={styles.planetCopy}>
        <h2 className={styles.planetCopyTextHeader}>Planet Name</h2>
        <div className={styles.planetCopyText}>PLANET DETAILS</div>
        <div className={styles.planetSource}>SOURCE</div>
      </div>
      <PlanetStats />
    </div>
  );
};

export default PlanetContent;