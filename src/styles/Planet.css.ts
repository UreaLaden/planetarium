import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
    mainContainer:{
        display:'grid',
        height:"100vh",
        color:Colors.WHITE,
        "@media (width <= 769px)":{
            gridTemplate:"12% 8% 1fr / 1fr",
        }
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
    },
    contentContainer:{
        height:"150%",
        width:"100%",
        display:"grid",
        gridTemplate:"repeat(14,1fr) / 1fr"
    },
    planetImage:{
        backgroundColor:Colors.CG_RED,
        width:"100%",
        height:"100%",
        gridRow:"1 / 6",
        gridColumn:"1 / 1"
    },
    planetCopy:{
        backgroundColor:Colors.CINNABAR,
        width:"100%",
        height:"100%",
        gridRow:"6 / 10",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },
    planetCopyTextHeader:{
        height:"auto"
    },
    planetCopyText:{
        height:"auto",
        width:"100%"
    },
    planetSource:{
        backgroundColor:Colors.INDIAN_YELLOW,
        width:"100%",
        height:"auto",
    },
    planetStats:{
        backgroundColor:Colors.ULTRAMARINE_BLUE,
        width:"100%",
        height:"100%",
        gridRow:"10 / 15",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",        
        gap:"5%"
    },
    planetStatsCard:{
        backgroundColor:Colors.MOONSTONE,
        height:"100%",
    }
})