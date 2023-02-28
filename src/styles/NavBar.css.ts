import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
    
      navigationItems: {
        padding:"5% 5% 0 5%"
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
        borderBottom: `2px solid ${Colors.WHITE_40}`,
        padding:"5% 5% 0 5%"
      },
})