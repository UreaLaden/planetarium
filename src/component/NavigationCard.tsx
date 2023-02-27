import { styles } from "@/styles/NavigationCard.css";
import { Planet, PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { Icon } from "@fluentui/react";
import { useRouter } from "next/router";
import * as React from 'react';

interface NavigationCardProps {
  planet:Planet;
}

export const NavigationCard = (props: NavigationCardProps) => {
    const context = React.useContext<PlanetContextProps>(PlanetContext);
  const { planet } = props;
  const router = useRouter();

  return (
    <div 
        className={styles.navigationCardContainer}
        onClick={() => {
            router.push({
            pathname:'/planets/[planetId]',
            query:{planetId:planet.name}
        });
        context.showPlanet(props.planet);
        }}
        >
      <div className={styles.colorScheme} style={{backgroundColor:planet.colorScheme}}></div>
      <div className={styles.planetName}>{planet.name}</div>
      <Icon className={styles.icon} iconName={"icon-chevron"} />
    </div>
  );
};

export default NavigationCard;
