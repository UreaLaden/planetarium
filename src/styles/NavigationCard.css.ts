import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    navigationCardContainer:{
        display:'flex',
        height:'100%',
        minHeight:"5vh",
        border:"1px solid blue",
        alignItems:'center'
    },
    colorScheme:{
        height:"15px",
        width:'15px',
        borderRadius:'25px',
        marginRight:'4%'
    },
    planetName:{
        width:"90%"
    },
    icon:{
        width:'5%',
        svg:{
            path:{
                stroke:'red'
            }
        }
    }
})