import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  detailsButtonContainer: {
    border:`2px solid ${Colors.INDIAN_YELLOW}`,
    "@media (width >= 1023px)":{
      gridRow:"8 / 11",
      gridColumn:"10 / 15",
      display:'flex',
      flexDirection:"column",
      justifyContent:"space-around"
    },
    "@media (765px < width < 1023px)": {
      gridRow: "10 / 13",
      gridColumn: "8 / 15",
      display:'flex',
      flexDirection:"column",
      justifyContent:'center',
      rowGap:"5%"
    },
    "@media (320px < width < 480px)": {
      gridRow:"2 / 3",
      gridColumn:"1 / -1",
      display: "flex",
      flexDirection:'row',
      justifyContent: "space-around",
      borderBottom: `1px solid ${Colors.WHITE_40}`,
    },
  },
  detailsButton: {
    background: "none",
    border: "none",
    color: Colors.WHITE_40,
    fontFamily: "Spartan SemiBold",
    "@media (765px < width < 1023px)": {
        border:`2px solid ${Colors.CG_RED}`,
        minHeight:"20%",
        ":hover":{
            cursor:'pointer'
        }
    },
    "@media (320px < width < 480px)": {
      fontSize: "3vw",
      width:"100%",
      ":hover": {
        cursor: "pointer",
        borderBottom: `3px solid ${Colors.MOONSTONE}`,
      },
    },
  },
});
