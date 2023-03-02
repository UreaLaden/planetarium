import { styles } from "@/styles/Details.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { WindowSpec, useWindowSize } from "@/utils/windowDimensions";
import { useRouter } from "next/router";
import * as React from "react";

export const DetailButtons = () => {
  const router = useRouter();
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const [isSelected, setIsSelected] = React.useState<number>(1);

  React.useEffect(() => {
    setIsSelected((isSelected) => {
      if (router.query.reportId) {
        return parseInt(router.query.reportId[0]);
      }
      return 1;
    });
  }, [context.currentPlanetSpec, router.query.reportId]);

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
  const window: WindowSpec = useWindowSize();

  const isMobileView = React.useMemo(() => {
    return window.width < 765;
  }, [window]);

  const shouldHighlight = React.useCallback(
    (id: number) => {
      return (id === isSelected) && !isMobileView;
    },
    [isSelected,isMobileView]
  );

  return (
    <div className={styles.detailsButtonContainer}>
      <button
        style={{
          backgroundColor: shouldHighlight(1)
            ? context.currentPlanet?.colorScheme
            : "transparent",
        }}
        className={styles.detailsButton}
        onClick={onOverviewButtonSelected}
      >
        <span className={styles.detailsButtonIndex}>01</span>
        OVERVIEW
      </button>
      <button
        style={{
          backgroundColor: shouldHighlight(2)
            ? context.currentPlanet?.colorScheme
            : "transparent",
        }}
        className={styles.detailsButton}
        onClick={onStructureButtonSelected}
      >
        <span className={styles.detailsButtonIndex}>02</span>
        STRUCTURE
      </button>
      <button
        style={{
          backgroundColor: shouldHighlight(3)
            ? context.currentPlanet?.colorScheme
            : "transparent",
        }}
        className={styles.detailsButton}
        onClick={onSurfaceButtonSelected}
      >
        <span className={styles.detailsButtonIndex}>03</span>
        SURFACE
      </button>
    </div>
  );
};
