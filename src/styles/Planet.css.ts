import { Colors } from "@/utils/helpers";
import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mainContainer: {
    display: "grid",
    color: Colors.WHITE,
    "@media (width >= 1023px)":{
      height:"100vh",
      gridTemplate:"repeat(14,1fr) / repeat(14,1fr)"
    },
    "@media (765px < width < 1023px)": {
      height: "100vh",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media (320px < width < 480px)": {
      height: "100vh",
      gridTemplate: "10% 8% 1fr / 1fr",
    },
  },
  contentContainer: {
    display: "grid",
    width: "100%",
    height: "100%",
    pointerEvents:"none",
    "@media (width >= 1023px)":{
      gridRow:"2 / 14",
      gridColumn:"1 / -1",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media (765px < width < 1023px)": {
      height: "100%",
      gridRow: "3 / -1",
      gridColumn: "1 / -1",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
      padding:"0 5%"
    },
    "@media (320px < width < 480px)": {
      height: "150%",
      gridTemplate: "repeat(14,1fr) / 1fr",
      padding:"5%"
    },
  },
  planetImage: {
    width: "100%",
    height: "100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    "@media (width >= 1023px)":{
      gridRow:"1 / 11",
      gridColumn:"2 / 10"
    },
    "@media (765px < width < 1023px)": {
      gridRow: "1 / 9",
      gridColumn: "1 / -1",
    },
    "@media (320px < width < 480px)": {
      gridRow: "1 / 6",
      gridColumn: "1 / 1",
    },
  },
  planetCopy: {
    width: "100%",
    height: "100%",
    "@media (width >= 1023px)":{
      gridRow:"1 / 8",
      gridColumn:"10 / 14",
      display:'flex',    
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "left",
      rowGap:"2%"
    },
    "@media (765px < width < 1023px)": {
      gridRow: "9 / 13",
      gridColumn: "1 / 8",  
      display:'flex',    
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "left",
      rowGap:"5%"
    },
    "@media (320px < width < 480px)": {
      gridRow: "6 / 10",
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "center",
      rowGap:"5%"

    },
  },
  planetCopyTextHeader: {
    "@media (width >= 1023px)":{
      lineHeight:0,
      height:"auto",
      fontSize:"5rem"
    },
    "@media (765px < width < 1023px)": {
      lineHeight:0,
      height:"auto",
      fontSize:"3.4rem"
    },
    "@media (320px < width < 480px)": {
      lineHeight:0,
      height:"auto",
      fontSize:"3rem"
    },
  },
  planetCopyText: {
    height: "auto",
    width: "100%",
    "@media (width >= 1023px)":{
      fontFamily:"Spartan",
      textAlign:'left',
      height:"auto",
      fontSize:"1.1vw",
      lineHeight:"1.8vw",
    },
    "@media (765px < width < 1023px)": {
      fontFamily:"Spartan",
      textAlign:'left',
      height:"auto",
      fontSize:"1.5vw",
      lineHeight:"3vw",
      maxWidth:"95%"
    },
    "@media (320px < width < 480px)": {
      fontFamily:"Spartan",
      textAlign:'center',
      height:"auto",
      fontSize:"3vw",
      lineHeight:"3vh"
    },
  },
  planetSource: {
    width: "100%",
    height: "auto",
    color:Colors.WHITE_40,
    "@media (width >= 1023px)":{
      fontFamily:"Spartan",
      textAlign:'left',
      height:"auto",
      fontSize:".8vw",
    },
    "@media (765px < width < 1023px)": {
      fontFamily:"Spartan",
      textAlign:'left',
      height:"auto",
      fontSize:"2vw"
    },
    "@media (320px < width < 480px)": {
      fontFamily:"Spartan",
      textAlign:'center',
      height:"auto",
      fontSize:"3vw"
    },
  },
  planetSourceLink:{
    textDecoration:"underline",
    fontWeight:"bold",
    color:Colors.WHITE_40,
  },
  planetSourceIcon:{
    paddingLeft:".5rem",
    svg:{
      
    }
  },
  geologyImageContainer:{
    height:"100%",
    width:"100%",
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    opacity:'inherit'
  },
  geologyImage:{
    position:'absolute',
    width:"auto",
    height:"auto",
    bottom:"0",
    "@media (width >= 1023px)":{
      maxWidth:"20vw",
      maxHeight:"20vh",
      bottom:"5%"
    },
    "@media (765px < width < 1023px)": {
      maxWidth:"20vw",
      maxHeight:"20vh",
      bottom:"8%"
    },
    "@media (320px < width < 480px)": {
      maxWidth:"30vw",
      maxHeight:"30vh",
      bottom:"0"
    }
  }

});
