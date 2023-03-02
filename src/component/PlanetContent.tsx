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
    if (context.currentPlanet) {
      setCurrentPlanet(context.currentPlanet);
      context.setCurrentSpec(1);
    }
  }, [context.currentPlanet]);

  const imageName = React.useMemo(() => {
    const svgRegex = new RegExp(/\w*-?\w*.svg/gm);
    const pngRegex = new RegExp(/\w*-?\w*.png/gm);
    const svgMatch = context.currentPlanetSpec?.image.match(svgRegex);
    const pngMatch = context.currentPlanetSpec?.image.match(pngRegex);
    const match = svgMatch || pngMatch;
    console.log(`Matching ${context.currentPlanetSpec?.image} Match: ${match}`);
    if (match) {
      const currentMatch = match[0].split(".")[0];
      const hasPlanet = currentMatch.match(new RegExp(/planet-/gm));
      if (hasPlanet) {
        return currentMatch.replace(hasPlanet[0], "");
      } else {
        return currentMatch;
      }
    }
    console.log("No match");
  }, [context.currentPlanetSpec]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.planetImage}>
        <If condition={context.currentPlanetSpec?.id === 2}>
          <Then>
            <div>{imageName}</div>
            <Image
              src={`assets/geology-${context.currentPlanet?.name.toLowerCase()}.png`}
              alt={currentPlanet?.name}
            />
          </Then>
        </If>
        <Else>
          <Icon iconName={imageName} />
        </Else>
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
