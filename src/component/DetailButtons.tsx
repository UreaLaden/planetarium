import { styles } from "@/styles/Details.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { useRouter } from "next/router";
import * as React from "react";

export const DetailButtons = () => {
  const router = useRouter();
  const context = React.useContext<PlanetContextProps>(PlanetContext);

  const onOverviewButtonSelected = () => {
    context.setCurrentSpec(1);
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.id, reportId: 1 },
    });
  };

  const onStructureButtonSelected = () => {
    context.setCurrentSpec(2);
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.id, reportId: 2 },
    });
  };
  const onSurfaceButtonSelected = () => {
    context.setCurrentSpec(3);
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.id, reportId: 3 },
    });
  };
 
  return (
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
  );
};
