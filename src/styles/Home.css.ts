import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
    mainContainer:{
        maxHeight:"100vh"
    },
    main:{
        maxHeight:"100%",
        display:'grid',
        gridTemplate:"20% 1fr / 1fr"
        
    }
})