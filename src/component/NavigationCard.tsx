import { styles } from "@/styles/NavigationCard.css";
import { Colors } from "@/utils/helpers";
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

  const navigationCardStyles = {
    backgroundColor:planet.colorScheme,

  }

  const isFirstOrLastPlanet = React.useMemo(() =>{
    if(!planet.index) return false;
    return (planet.index <= 0 || planet.index >= context.planets.length - 1);
  },[planet.index,context.planets.length])

  return (
    <div 
        className={styles.navigationCardContainer}
        style={{borderBottom: isFirstOrLastPlanet ? 'none' : `1px solid ${Colors.WHITE_40}` }}
        onClick={() => {
            router.push({
            pathname:'/planets/[planetId]',
            query:{planetId:planet.name}
        });
        context.showPlanet(props.planet);
        }}
        >
      <div className={styles.colorScheme} style={navigationCardStyles}></div>
      <div className={styles.planetName}>{planet.name}</div>
      <Icon className={styles.icon} iconName={"icon-chevron"} />
    </div>
  );
};

export default NavigationCard;
