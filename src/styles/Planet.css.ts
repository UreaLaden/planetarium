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
  detailsButtonContainer: {
    backgroundColor:Colors.INDIAN_YELLOW,
    "@media screen and (max-width:1023px)": {
      gridRow: "10 / 13",
      gridColumn: "8 / 15",
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
    "@media (width <= 769px)": {
      fontSize: "3vw",
      ":hover": {
        cursor: "pointer",
        borderBottom: `3px solid ${Colors.MOONSTONE}`,
      },
    },
  },
  contentContainer: {
    display: "grid",
    width: "100%",
    height: "100%",
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
    "@media (width =< 769px)": {
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
  planetStats: {
    backgroundColor: Colors.ULTRAMARINE_BLUE,
    width: "100%",
    height: "100%",
    "@media screen and (max-width:1023px)": {
      gridRow: "13 / 15",
      gridColumn: "1 / -1",
      display: "flex",
      justifyContent: "space-between",
    },
    "@media (width =< 769px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      gap: "5%",
      gridRow: "10 / 15",
    },
  },
  planetStatsCard: {
    backgroundColor: Colors.MOONSTONE,
    "@media screen and (max-width:1023px)":{
        minWidth:"24%"
    },
    "@media (width =< 769px)": {
        height: "100%",
    }
  },
});
