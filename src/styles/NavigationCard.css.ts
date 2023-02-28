import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    navigationCardContainer:{
        display:'flex',
        height:'auto',
        minHeight:"8vh",
        border:"1px solid blue",
        alignItems:'center',
        margin:"0 5%"
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
                stroke:'red'
            }
        }
    }
})