import { styles } from "@/styles/NavigationCard.css";
import { Colors } from "@/utils/helpers";
import { Planet, PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { useWindowSize } from "@/utils/windowDimensions";
import { Icon } from "@fluentui/react";
import { useRouter } from "next/router";
import * as React from 'react';

interface NavigationCardProps {
  planet:Planet;
  onItemSelected:() => void;
}

export const NavigationCard = (props: NavigationCardProps) => {
    const context = React.useContext<PlanetContextProps>(PlanetContext);
  const { planet,onItemSelected } = props;
  const router = useRouter();
  const window = useWindowSize();

  const navigationCardStyles = {
    backgroundColor:planet.colorScheme,
  }

  const isMobileView = React.useMemo(() => {
    return window.width < 765;
  }, [window]);


  const isFirstOrLastPlanet = React.useMemo(() =>{
    if(!planet.id) return false;    
    return (planet.id <= 0 || planet.id >= context.planets.length - 1);
  },[planet.id,context.planets.length])

  return (
    <div 
        className={styles.navigationCardContainer}
        style={{borderBottom: isFirstOrLastPlanet ? 'none' : isMobileView ? `1px solid ${Colors.WHITE_40}` : 'none' }}
        onClick={() => {
            router.push({
            pathname:'/planets/[planetId]',
            query:{planetId:planet.id}
        });
        context.showPlanet(planet);
        onItemSelected();
        }}
        >
      <div className={styles.colorScheme} style={navigationCardStyles}></div>
      <div className={styles.planetName}>{planet.name}</div>
      <Icon className={styles.icon} iconName={"icon-chevron"} />
    </div>
  );
};

export default NavigationCard;
