import { styles } from "@/styles/Planet.css";
import * as React from "react";
import PlanetStats from "./PlanetStats";
import {
  Planet,
  PlanetContext,
  PlanetContextProps,
} from "@/utils/planet-context";
import { Icon, Image } from "@fluentui/react";
import { If, Then, Else } from "react-if";

export const PlanetContent = (props: any) => {
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const [currentPlanet, setCurrentPlanet] = React.useState<Planet | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (context.currentPlanet !== currentPlanet) {
      setCurrentPlanet(context.currentPlanet);
      context.setCurrentSpec(1);
    }
  }, [context, currentPlanet]);

  const imageName = React.useMemo(() => {
    console.log(context.currentPlanetSpec?.image);
    if (context.currentPlanetSpec?.id == 2) {
      return context.currentPlanet?.overview.image;
    }
    return context.currentPlanetSpec?.image;
  }, [
    context.currentPlanet?.overview.image,
    context.currentPlanetSpec?.id,
    context.currentPlanetSpec?.image,
  ]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.planetImage}>
        {context.currentPlanetSpec?.id === 2 && (
          <Image
            className={styles.geologyImage}
            src={imageName}
            alt={currentPlanet?.name}
          />
        )}
        <Icon iconName={imageName} />
      </div>
      <div className={styles.planetCopy}>
        <h2 className={styles.planetCopyTextHeader}>{currentPlanet?.name}</h2>
        <div className={styles.planetCopyText}>
          {context.currentPlanetSpec?.content}
        </div>
        <div className={styles.planetSource}>
          Source : &nbsp;
          <a
            className={styles.planetSourceLink}
            href={context.currentPlanetSpec?.source.toString()}
          >
            Wikipedia
            <Icon
              className={styles.planetSourceIcon}
              iconName={"icon-source"}
            />
          </a>
        </div>
      </div>
      <PlanetStats />
    </div>
  );
};

export default PlanetContent;
