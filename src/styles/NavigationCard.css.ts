import { Colors } from "@/utils/helpers";
import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    navigationCardContainer:{
        display:'flex',
        height:'12%',
        alignItems:'center',
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
            display:'unset'
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