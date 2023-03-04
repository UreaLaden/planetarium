import { styles } from "@/styles/Planet.css";
import * as React from "react";
import PlanetStats from "./PlanetStats";
import {
  Planet,
  PlanetContext,
  PlanetContextProps,
} from "@/utils/planet-context";
import { Icon } from "@fluentui/react";
import Image from "next/image";
import { If, Then, Else } from "react-if";
import { Geology } from "@/utils/helpers";

export const PlanetContent = (props: any) => {
  const context = React.useContext<PlanetContextProps>(PlanetContext);

  const imageName = React.useMemo(() => {
    if (context.currentPlanetSpec?.id == 2) {
      if(context.currentPlanet?.name){
        let image = Geology.get(context.currentPlanet?.name);
        if(image){
          return image;
        }
      }
    }
    return context.currentPlanetSpec?.image;
  }, [context.currentPlanet?.name, context.currentPlanetSpec?.id, context.currentPlanetSpec?.image]);

  return (
    <div className={styles.contentContainer} id={context.navItemsVisible ? "fade-in" : "fade-out"}>
      <div className={styles.planetImage}>
        {context.currentPlanetSpec?.id === 2 && (
          <Image
            className={styles.geologyImage}
            src={imageName?.substring(1) ?? ""}
            alt={context.currentPlanet?.name ?? ""}
            height={'150'}
            width={'150'}
          />
        )}
        <Icon iconName={context.currentPlanetSpec?.id === 2 ? context.currentPlanet?.overview.image : imageName} />
      </div>
      <div className={styles.planetCopy} >
        <h2 className={styles.planetCopyTextHeader}>{context.currentPlanet?.name}</h2>
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
