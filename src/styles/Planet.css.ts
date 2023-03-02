import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mainContainer: {
    display: "grid",
    color: Colors.WHITE,
    "@media (width >= 1023px)":{
      height:"100vh",
      gridTemplate:"repeat(14,1fr) / repeat(14,1fr)"
    },
    "@media (765px < width < 1023px)": {
      height: "100vh",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media (320px < width < 480px)": {
      height: "100vh",
      gridTemplate: "10% 8% 1fr / 1fr",
    },
  },
  contentContainer: {
    display: "grid",
    width: "100%",
    height: "100%",
    pointerEvents:"none",
    "@media (width >= 1023px)":{
      gridRow:"2 / 14",
      gridColumn:"1 / -1",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media (765px < width < 1023px)": {
      height: "100%",
      gridRow: "3 / -1",
      gridColumn: "1 / -1",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media (320px < width < 480px)": {
      height: "150%",
      gridTemplate: "repeat(14,1fr) / 1fr",
      padding:"5%"
    },
  },
  planetImage: {
    border: `2px solid ${Colors.CG_RED}`,
    width: "100%",
    height: "100%",
    "@media (width >= 1023px)":{
      gridRow:"1 / 11",
      gridColumn:"1 / 10"
    },
    "@media (765px < width < 1023px)": {
      gridRow: "1 / 9",
      gridColumn: "1 / -1",
    },
    "@media (320px < width < 480px)": {
      gridRow: "1 / 6",
      gridColumn: "1 / 1",
    },
  },
  planetCopy: {
    border:`2px solid ${ Colors.CINNABAR}`,
    width: "100%",
    height: "100%",
    "@media (width >= 1023px)":{
      gridRow:"1 / 8",
      gridColumn:"10 / -1 "
    },
    "@media (765px < width < 1023px)": {
      gridRow: "9 / 13",
      gridColumn: "1 / 8",
    },
    "@media (320px < width < 480px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gridRow: "6 / 10",
    },
  },
  planetCopyTextHeader: {
    height: "auto",
  },
  planetCopyText: {
    height: "auto",
    width: "100%",
  },
  planetSource: {
    border:`2px solid ${ Colors.INDIAN_YELLOW}`,
    width: "100%",
    height: "auto",
  },

});
