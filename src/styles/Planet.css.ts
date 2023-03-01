import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mainContainer: {
    display: "grid",
    color: Colors.WHITE,
    "@media screen and  (max-width:1023px)": {
      height: "100vh",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media (width <= 769px)": {
      height: "100vh",
      gridTemplate: "12% 8% 1fr / 1fr",
    },
  },
  contentContainer: {
    display: "grid",
    width: "100%",
    height: "100%",
    pointerEvents:"none",
    "@media (width <= 1024px)": {
      height: "100%",
      gridRow: "3 / -1",
      gridColumn: "1 / -1",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media (width <= 769px)": {
      height: "150%",
      gridTemplate: "repeat(14,1fr) / 1fr",
    },
  },
  planetImage: {
    backgroundColor: Colors.CG_RED,
    width: "100%",
    height: "100%",
    "@media screen and (max-width:1023px)": {
      gridRow: "1 / 9",
      gridColumn: "1 / -1",
    },
    "@media (width <= 769px)": {
      gridRow: "1 / 6",
      gridColumn: "1 / 1",
    },
  },
  planetCopy: {
    backgroundColor: Colors.CINNABAR,
    width: "100%",
    height: "100%",
    "@media screen and (max-width:1023px)": {
      gridRow: "9 / 13",
      gridColumn: "1 / 8",
    },
    "@media (width <= 769px)": {
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
    backgroundColor: Colors.INDIAN_YELLOW,
    width: "100%",
    height: "auto",
  },

});
