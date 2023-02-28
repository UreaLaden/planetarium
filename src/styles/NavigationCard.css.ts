import { Colors } from "@/utils/helpers";
import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    navigationCardContainer:{
        display:'flex',
        height:'12%',
        alignItems:'center',
        ":hover":{
            cursor:"pointer",
            backgroundColor:Colors.WHITE_40
        }
    },
    colorScheme:{
        height:"25px",
        width:'25px',
        borderRadius:'25px',
        marginRight:'4%'
    },
    planetName:{
        width:"90%",
        fontFamily:'Spartan',
        fontWeight:"bold",
        fontSize:"5vw"
    },
    icon:{
        width:'5%',
        svg:{
            path:{
                stroke:Colors.WHITE_40
            }
        }
    }
})