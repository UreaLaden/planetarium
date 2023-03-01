import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mainContainer: {
    display: "grid",
    gridTemplate: "5rem 3rem 1fr / 1fr",
    height: "100vh",
    color: Colors.WHITE,
  },
  detailsButtonContainer: {
    backgroundColor:Colors.INDIAN_YELLOW,
    "@media screen and (max-width:1023px)": {
      gridRow: "10 / 13",
      gridColumn: "8 / 15",
      display:'flex',
      flexDirection:"column",
      justifyContent:'center',
      rowGap:"5%"
    },
    "@media (width <= 769px)": {
      display: "flex",
      justifyContent: "space-around",
      borderBottom: `1px solid ${Colors.WHITE_40}`,
    },
  },
  detailsButton: {
    background: "none",
    border: "none",
    color: Colors.WHITE_40,
    fontFamily: "Spartan SemiBold",
    "@media screen and (max-width:1023px)": {
        backgroundColor:Colors.CG_RED,
        minHeight:"20%",
        ":hover":{
            cursor:'pointer'
        }
    },
    "@media (width <= 769px)": {
      fontSize: "3vw",
      ":hover": {
        cursor: "pointer",
        borderBottom: `3px solid ${Colors.MOONSTONE}`,
      },
    },
  },
});
