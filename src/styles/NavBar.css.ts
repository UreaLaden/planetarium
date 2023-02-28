import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  navigationItems: {
    display: "visible",
    "@media screen and (max-width:1023px)": {
      display: "flex",
      justifyContent:"space-around",
      borderBottom:`1px solid ${Colors.WHITE_40}`,
      height:"50%"
    },
    "@media screen and (max-width:769px)": {
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
    fontSize: "5vh",
    lineHeight: "auto",
    "@media screen and (max-width:1023px)": {
        textAlign:'center'
    },
    "@media screen and (max-width:769px)": {
        padding: "5% 5% 0 5%",
        borderBottom: `2px solid ${Colors.WHITE_40}`,
    },
  },
});
