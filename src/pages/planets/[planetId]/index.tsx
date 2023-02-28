import NavBar from "@/component/NavBar";
import { styles } from "@/styles/Planet.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { useRouter } from "next/router";
import * as React from "react";

export const Planet = () => {
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const router = useRouter();

  const onOverviewButtonSelected = () => {
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.name, reportId: 1 },
    });
  };

  const onStructureButtonSelected = () => {
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.name, reportId: 2 },
    });
  };
  const onSurfaceButtonSelected = () => {
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.name, reportId: 3 },
    });
  };

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.detailsButtonContainer}>
        <button
          className={styles.detailsButton}
          onClick={onOverviewButtonSelected}
        >
          OVERVIEW
        </button>
        <button
          className={styles.detailsButton}
          onClick={onStructureButtonSelected}
        >
          STRUCTURE
        </button>
        <button
          className={styles.detailsButton}
          onClick={onSurfaceButtonSelected}
        >
          SURFACE
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.planetImage}>IMAGE</div>
        <div className={styles.planetCopy}>
          <h2 className={styles.planetCopyTextHeader}>Planet Name</h2>
          <div className={styles.planetCopyText}>PLANET DETAILS</div>
          <div className={styles.planetSource}>SOURCE</div>
        </div>
        <div className={styles.planetStats}>
          <div className={styles.planetStatsCard}>STATS</div>
          <div className={styles.planetStatsCard}>STATS</div>
          <div className={styles.planetStatsCard}>STATS</div>
          <div className={styles.planetStatsCard}>STATS</div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
