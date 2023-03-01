import { styles } from "@/styles/Details.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { useRouter } from "next/router";
import * as React from "react";

export const DetailButtons = () => {
  const router = useRouter();
  const context = React.useContext<PlanetContextProps>(PlanetContext);

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
  const content = React.useMemo(() => {
    switch (router.query.reportId) {
      case "1":
        return context.currentPlanet?.overview.content;
      case "2":
        return context.currentPlanet?.structure.content;
      case "3":
        return context.currentPlanet?.geology.content;
    }
  }, [router.query.reportId]);
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
