import { styles } from "@/styles/Planet.css";
import * as React from "react";
import PlanetStats from "./PlanetStats";
import { Planet, PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { Icon } from "@fluentui/react";

export const PlanetContent = () => {
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const [currentPlanet,setCurrentPlanet] = React.useState<Planet | undefined>(undefined);

  React.useEffect(()=>{
    if(context.currentPlanet){
      setCurrentPlanet(context.currentPlanet);
      context.setCurrentSpec(1);
    }
  },[context.currentPlanet])
  const imageName = React.useMemo(()=>{
    return context.currentPlanetSpec?.image.split('s/')[1];
  },[context.currentPlanetSpec])
  return (
    <div className={styles.contentContainer}>
      <div className={styles.planetImage}><Icon iconName={imageName}/></div>
      <div className={styles.planetCopy}>
        <h2 className={styles.planetCopyTextHeader}>{currentPlanet?.name}</h2>
        <div className={styles.planetCopyText}>{context.currentPlanetSpec?.content}</div>
        <div className={styles.planetSource}>{context.currentPlanetSpec?.source.toString()}</div>
      </div>
      <PlanetStats />
    </div>
  );
};

export default PlanetContent;