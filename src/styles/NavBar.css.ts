import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  navContainer: {
    
  },
  navigationItems: {
      display: "visible",
      "@media (width >= 1023px)":{
        display:'flex',
        gridRow:"1 / 2",
        gridColumn:"8 / -1",
        alignItems:"center",
        justifyContent:'space-around'
      },
      "@media (765px < width < 1023px)": {
      display: "flex",
      justifyContent: "space-around",
      borderBottom: `1px solid ${Colors.WHITE_40}`,
      height: "50%",
      gridColumn:"1 / -1",
      gridRow:"2 / 3",
      paddingTop:"2%",
      paddingBottom:"2%"
    },
    "@media (320px < width < 480px)": {
      padding: "5% 5% 0 5%",
      display: "block",
    },
  },
  navigationIcon: {
    position: "absolute",
    top: "2rem",
    right: "2rem",
  },
  navHeader: {
    fontFamily: "Antonio Medium",
    margin: 0,
    lineHeight: "auto",
    "@media (width >= 1023px)":{
      gridRow:"1 / 2",
      gridColumn:"1 / 8",
      padding:"5%"
    },
    "@media (765px < width < 1023px)": {
      fontSize: "5vh",
      textAlign: "center",
      gridColumn:"1 / -1",
      gridRow:"1 / 3"
    },
    "@media (320px < width < 480px)": {
      fontSize: "4vh",
      textAlign:"left",
      padding: "5% 5% 0 5%",
      borderBottom: `2px solid ${Colors.WHITE_40}`,
    },
  },
});
