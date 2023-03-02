import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mainContainer: {
    height: "100vh",
  },
  mainNav: {
    height: "100%",
    display: "grid",
    position: "relative",
    "@media (765px < width < 1023px)": {
        gridTemplate: "5% 1fr / 1fr",
        rowGap: "0",
    },
    "@media (320px < width < 480px)": {
        gridTemplate: "12% 1fr / 1fr",
        rowGap: "4%",
    }
  },
});
