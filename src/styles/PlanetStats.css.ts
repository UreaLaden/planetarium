import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/merge-styles";

export const styles = mergeStyleSets({
  planetStats: {
    backgroundColor: Colors.ULTRAMARINE_BLUE,
    width: "100%",
    height: "100%",
    "@media screen and (max-width:1023px)": {
      gridRow: "13 / 15",
      gridColumn: "1 / -1",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "@media (width <= 769px)": {
      display: "flex",
      flexDirection: "column",
      maxHeight:"15vh",
      gridRow: "10 / 15",
    },
  },
  planetStatsCard: {
    backgroundColor: Colors.MOONSTONE,
    "@media screen and (max-width:1023px)": {
      minWidth: "24%",
      minHeight: "80%",
    },
    "@media (width <= 769px)": {
      width:"100%",
    },
  },
});
