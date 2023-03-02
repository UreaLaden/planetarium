import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  detailsButtonContainer: {
    pointerEvents:"none",
    "@media (width >= 1023px)": {
      gridRow: "8 / 11",
      gridColumn: "10 / 14",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    "@media (765px < width < 1023px)": {
      gridRow: "10 / 13",
      gridColumn: "8 / 14",
      display: "flex",
      width: "105%",
      flexDirection: "column",
      justifyContent: "center",
      rowGap: "5%",
    },
    "@media (320px < width < 480px)": {
      gridRow: "2 / 3",
      gridColumn: "1 / -1",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      borderBottom: `1px solid ${Colors.WHITE_40}`,
    },
  },
  detailsButton: {
    background: "none",
    pointerEvents:"auto",
    border: `1px solid ${Colors.WHITE_40}`,
    color: Colors.WHITE,
    fontFamily: "Spartan SemiBold",
    "@media (width >= 1023px)": {
      minHeight: "26%",
      display:'flex',
      alignItems:'center',
      justifyContent:"start",
      columnGap:"5%",
      ":hover": {
        cursor: "pointer",
        backgroundColor:Colors.ARSENIC
      },
    },
    "@media (765px < width < 1023px)": {
      minHeight: "20%",
      display:'flex',
      alignItems:'center',
      justifyContent:"start",
      columnGap:"5%",
      ":hover": {
        cursor: "pointer",
        backgroundColor:Colors.ARSENIC
      },
    },
    "@media (320px < width < 480px)": {
      fontSize: "3vw",
      width: "100%",
      ":hover": {
        cursor: "pointer",
        borderBottom: `3px solid ${Colors.MOONSTONE}`,
      },
    },
  },
  detailsButtonIndex: {
    "@media (width >= 1023px)": {
      display:'inline-block',
      paddingLeft:"5%",
    },
    "@media (765px < width < 1023px)": {
      display:'inline-block',
      paddingLeft:"5%"
    },
    "@media (320px < width < 480px)": {
      display:'none'
    },
  },
});
