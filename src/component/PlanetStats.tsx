import { styles } from "@/styles/PlanetStats.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import * as React from "react";

export const PlanetStats = () => {
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  return (
    <div className={styles.planetStats}>
      {context.currentPlanetStats?.map((value, index) => {
        return (<div key={index} className={styles.planetStatsCard}>
          <div className={styles.statsTitle}>{value.title}</div>
          <div className={styles.statistic}>{value.statistic}</div>
        </div>)
      })}
    </div>
  );
};

export default PlanetStats;
