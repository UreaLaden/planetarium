import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/merge-styles";

export const styles = mergeStyleSets({
  planetStats: {
    width: "100%",
    height: "100%",
    "@media (width >= 1023px)": {
      gridRow:"12 / 15",
      gridColumn:"2 / 14",
      display:"flex",
      justifyContent:"space-between"
    },
    "@media (765px < width < 1023px)": {
      gridRow: "13 / 15",
      gridColumn: "1 / -1",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "@media (320px < width < 480px)": {
      display: "flex",
      flexDirection: "column",
      maxHeight:"15vh",
      gridRow: "10 / 15",
      rowGap:"10%"
    },
  },
  planetStatsCard: {
    border:`1px solid ${Colors.WHITE}`,
    display:'flex',
    "@media (width >= 1023px)": {
      minWidth:"24%",
      minHeight: "80%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"left",
      padding:"0 2%"
    },
    "@media (765px < width < 1023px)": {
      minWidth: "24%",
      minHeight: "80%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"left",
      padding:"0 2%"
    },
    "@media (320px < width < 480px)": {
      width:"100%",
      minHeight:"60%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:'center',
      padding:"0 5%"
    },
  },
  statsTitle:{
    color:Colors.WHITE_40,
    fontFamily:"Spartan",
    fontWeight:"bold",
    "@media (width >= 1023px)": {
      fontSize:".8vw",
      paddingBottom:"2%"
    },
    "@media (765px < width < 1023px)": {
      fontSize:"1.2vw",
      paddingBottom:"5%"
    },
    "@media (320px < width < 480px)": {
      fontSize:"3vw",
      padding:"0"
    },
  },
  statistic:{
    fontWeight:"bold",
    "@media (width >= 1023px)": {
      fontSize:"3vw"
    },
    "@media (765px < width < 1023px)": {
      fontSize:"4vw",
    },
    "@media (320px < width < 480px)": {
      fontSize:"7vw"
    },
  }
});
