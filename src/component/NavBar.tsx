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
  const window: WindowSpec = useWindowSize();
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const navItemRef = React.useRef<HTMLDivElement>(null);
  const [navId, setNavId] = React.useState<string>("drop-out");
  
  const isMobileView = React.useMemo(() => {
    return window.width < 765;
  }, [window]);

  const onNavToggleSelected = () => {
    console.log("Toggle nav items");
    setNavId(() => navId === "drop-in" ? "drop-out" : "drop-in");
  };
  
  const onNavItemSelected = React.useCallback(() => {
    if (!isMobileView){
      navItemRef.current?.removeAttribute('id');
      context.showNavItems(true);
    }else{
      setNavId("drop-out");
    }
  }, [isMobileView]);


  React.useEffect(() => {
    if (navItemRef.current) {
      navItemRef.current.setAttribute("id", navId);
      context.showNavItems(true);
    }
  }, [navId]);

  return (
    <>
      <h1 className={styles.navHeader}>THE PLANETS</h1>
      {isMobileView && (
        <div className={styles.navigationItems} ref={navItemRef} id={navId}>
          {context.planets.map((value: Planet, index: number) => (
            <NavigationCard
              key={index}
              planet={value}
              onItemSelected={onNavItemSelected}
            />
          ))}
        </div>
      )}
      {!isMobileView && (
        <div className={styles.navigationItems}>
          {context.planets.map((value: Planet, index: number) => (
            <NavigationCard
              key={index}
              planet={value}
              onItemSelected={onNavItemSelected}
            />
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
