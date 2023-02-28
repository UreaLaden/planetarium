import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
    mainContainer:{
        display:'grid',
        gridTemplate:"12% 8% 1fr / 1fr",
        height:"100vh",
        color:Colors.WHITE
    },
    navContainer:{},
    detailsButtonContainer:{
        display:'flex',
        justifyContent:"space-around",
        borderBottom:`1px solid ${Colors.WHITE_40}`
    },
    detailsButton:{
        background:"none",
        border:'none',
        color:Colors.WHITE_40,
        fontFamily:'Spartan SemiBold',
        fontSize:'3vw',
        ":hover":{
            cursor:'pointer',
            borderBottom:`3px solid ${Colors.MOONSTONE}`
        }
    }
})