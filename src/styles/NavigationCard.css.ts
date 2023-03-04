import { Colors } from "@/utils/helpers";
import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    navigationCardContainer:{
        display:'flex',
        height:'12%',
        alignItems:'center',
        backgroundColor:Colors.RICH_BLACK,
        color:Colors.WHITE,
        border:`none`,
        textAlign:"left",
        width:"100%",
        ":hover":{
            cursor:"pointer",
        }
    },
    colorScheme:{
        height:"25px",
        width:'25px',
        borderRadius:'25px',
        marginRight:'4%',
        "@media (width >= 1023px)": {
            display:"none"
        },
        "@media (765px < width < 1023px)": {
            display:'none'
        },
        "@media (320px < width < 480px)": {
            display:'unset',
            height:"20px",
            width:"20px"
        }
    },
    planetName:{
        width:"100%",
        fontFamily:'Spartan',
        fontWeight:"bold",
        "@media (width >= 1023px)": {
        },     
        "@media (765px < width < 1023px)": {

        },
        "@media (320px < width < 480px)": {
            fontSize:"5vw",
        }
    },
    icon:{
        width:'5%',
        "@media (width >= 1023px)": {
            display:"none"
        },        
        "@media (765px < width < 1023px)": {
            display:'none'
        },
        "@media (320px < width < 480px)": {
            display:'unset'
        },
        svg:{
            path:{
                stroke:Colors.WHITE_40
            }
        }
    }
})