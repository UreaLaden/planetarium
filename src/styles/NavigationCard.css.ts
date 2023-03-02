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
        "@media (width > 1024px)":{
            display:"none"
        },
        "@media screen and (max-width:1023px)":{
            display:'none'
        },
        "@media screen and (max-width:769px)":{
            display:'unset'
        }
    },
    planetName:{
        width:"100%",
        fontFamily:'Spartan',
        fontWeight:"bold",
        "@media screen and (max-width:1023px)":{

        },
        "@media screen and (max-width:769px)":{
            fontSize:"5vw",
        }
    },
    icon:{
        width:'5%',
        "@media screen and (max-width:1023px)":{
            display:'none'
        },
        "@media screen and (max-width:769px)":{
            display:'unset'
        },
        svg:{
            path:{
                stroke:Colors.WHITE_40
            }
        }
    }
})