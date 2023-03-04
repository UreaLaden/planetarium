import { styles } from "@/styles/Details.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { WindowSpec, useWindowSize } from "@/utils/windowDimensions";
import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "./Button";

export const DetailButtons = () => {
  const router = useRouter();
  const context = React.useContext<PlanetContextProps>(PlanetContext);

  const onOverviewButtonSelected = () => {
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.id, reportId: 1 },
    });
  };

  const onStructureButtonSelected = () => {
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.id, reportId: 2 },
    });
  };

  const onSurfaceButtonSelected = () => {
    router.push({
      pathname: "/planets/[planetId]/[reportId]",
      query: { planetId: context.currentPlanet?.id, reportId: 3 },
    });
  };
  const window: WindowSpec = useWindowSize();

  const isMobileView = React.useMemo(() => {
    return window.width < 765;
  }, [window]);

  return (
    <div className={styles.detailsButtonContainer}>
      <Button controlId={1} selectedItem={(id:number) => id === context.currentPlanetSpec?.id} isMobileView={isMobileView} title={"OVERVIEW"} onButtonClicked={onOverviewButtonSelected}        
      />
      <Button controlId={2} selectedItem={(id:number) => id === context.currentPlanetSpec?.id} isMobileView={isMobileView} title={"STRUCTURE"} onButtonClicked={onStructureButtonSelected}        
      />
      <Button controlId={3} selectedItem={(id:number) => id === context.currentPlanetSpec?.id} isMobileView={isMobileView} title={"SURFACE"} onButtonClicked={onSurfaceButtonSelected}        
      />
    </div>
  );
};
