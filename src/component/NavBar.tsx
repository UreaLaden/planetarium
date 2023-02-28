import { styles } from "@/styles/NavBar.css";
import {
  Planet,
  PlanetContext,
  PlanetContextProps,
} from "@/utils/planet-context";
import * as React from "react";
import NavigationCard from "./NavigationCard";
import { Icon } from "@fluentui/react";
import { WindowSpec, useWindowSize } from "@/utils/windowDimensions";

export const NavBar = () => {
  const [showNavItems, setShowNavItems] = React.useState<boolean>(false);
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const onNavToggleSelected = React.useCallback(() => {
    setShowNavItems(!showNavItems);
  }, [showNavItems]);
  const window: WindowSpec = useWindowSize();

  const isMobileView = React.useMemo(() => {
    return window.width <= 769;
  }, [window]);

  React.useEffect(() => {
    setShowNavItems(!isMobileView);
  }, [isMobileView]);
  return (
    <>
      <h1 className={styles.navHeader}>THE PLANETS</h1>
      {isMobileView && showNavItems && (
        <div className={styles.navigationItems}>
          {context.planets.map((value: Planet, index: number) => (
            <NavigationCard key={index} planet={value} />
          ))}
        </div>
      )}
      {!isMobileView && (
        <div className={styles.navigationItems}>
          {context.planets.map((value: Planet, index: number) => (
            <NavigationCard key={index} planet={value} />
          ))}
        </div>
      )}
      {isMobileView && (
        <Icon
          onClick={onNavToggleSelected}
          className={styles.navigationIcon}
          iconName={"icon-hamburger"}
        />
      )}
    </>
  );
};

export default NavBar;
