import { styles } from "@/styles/Details.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import * as React from "react";

interface ButtonProps {
  controlId: number;
  isMobileView: boolean;
  selectedItem:(controlId:number) => boolean;
  title: string;
  onButtonClicked: () => void;
}

export const Button = (props: ButtonProps) => {
  const { controlId, isMobileView,selectedItem, title, onButtonClicked } = props;
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  const onMouseEnterHandler = () => {
    setIsHovering(true);
  };
  const onMouseLeaveHandler = () => {
    setIsHovering(false);
  };

  const shouldHighlight = React.useCallback(
    (id: number) => {
      return selectedItem(id) && !isMobileView;
    },
    [selectedItem, isMobileView]
  );

  const shouldHighlightMobile = React.useCallback(
    (id: number) => {
      return isMobileView && id === controlId;
    },
    [isMobileView,controlId]
  );

  const onButtonClickedHandler = (event:React.MouseEvent) => {
    if(event.currentTarget){
        onButtonClicked();
        context.setCurrentSpec(controlId);
    }
  }

  return (
    <button
      style={{
        backgroundColor: shouldHighlight(controlId)
          ? context.currentPlanet?.colorScheme
          : "transparent",
        borderBottom:
          (shouldHighlightMobile(controlId) && isHovering) || selectedItem(controlId) && isMobileView
            ? `3px solid ${context.currentPlanet?.colorScheme}`
            : "none",
      }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className={styles.detailsButton}
      onClick={onButtonClickedHandler}
    >
      <span className={styles.detailsButtonIndex}>0{controlId}</span>
      {title}
    </button>
  );
};
