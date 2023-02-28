import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mainContainer: {
    height: "100vh",
  },
  mainNav: {
    height: "100%",
    display: "grid",
    gridTemplate: "12% 1fr / 1fr",
    rowGap: "4%",
    position: "relative",
    
  },
});
