import { styles } from "@/styles/NavBar.css";
import {
  Planet,
  PlanetContext,
  PlanetContextProps,
} from "@/utils/planet-context";
import * as React from "react";
import NavigationCard from "./NavigationCard";
import { Icon } from "@fluentui/react";

export const NavBar = () => {
  const [showNavItems, setShowNavItems] = React.useState<boolean>(false);
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const onNavToggleSelected = React.useCallback(() => {
    setShowNavItems(!showNavItems);
  }, [showNavItems]);
  return (
    <>
      <h1 className={styles.navHeader}>THE PLANETS</h1>
      {showNavItems && (
        <div className={styles.navigationItems}>
          {context.planets.map((value: Planet, index: number) => (
            <NavigationCard key={index} planet={value} />
          ))}
        </div>
      )}
      <Icon
        onClick={onNavToggleSelected}
        className={styles.navigationIcon}
        iconName={"icon-hamburger"}
      />
    </>
  );
};

export default NavBar;
