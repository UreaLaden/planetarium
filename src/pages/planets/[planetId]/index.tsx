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
        <button className={styles.detailsButton} onClick={onOverviewButtonSelected}>OVERVIEW</button>
        <button className={styles.detailsButton} onClick={onStructureButtonSelected}>STRUCTURE</button>
        <button className={styles.detailsButton} onClick={onSurfaceButtonSelected}>SURFACE</button>
      </div>
      <div>
        {context.currentPlanet?.name} Page
        <div>{context.currentPlanet?.overview.content}</div>
      </div>
    </div>
  );
};

export default Planet;
