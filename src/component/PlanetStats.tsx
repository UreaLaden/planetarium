import { styles } from "@/styles/PlanetStats.css";
import * as React from "react";

export const PlanetStats = () => {
  return (
    <div className={styles.planetStats}>
      <div className={styles.planetStatsCard}>STATS</div>
      <div className={styles.planetStatsCard}>STATS</div>
      <div className={styles.planetStatsCard}>STATS</div>
      <div className={styles.planetStatsCard}>STATS</div>
    </div>
  );
};

export default PlanetStats;
