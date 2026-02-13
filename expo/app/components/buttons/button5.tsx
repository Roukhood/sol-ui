
import {  Text, View , StyleSheet } from "react-native"
import {Button} from "../ui/button"
import React from "react"

export const ShinyButton = ({title = "Shiny Button" } : {title: string}) =>{
    return(
      <Button style={style.button}>
        <Text style={style.text}>
            {title}
        </Text>
        <View style={style.shine}/>
      </Button>
    )
}


const style = StyleSheet.create({

    button:{
        position: "relative",
        backgroundColor: "#2563eb",
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 14,
        overflow:"hidden",
        alignItems:"center"
    },

    text:{
        color:"#fff",
        fontWeight: "600",
        fontSize: 16
    },
    shine:{
        position:"absolute",
        top:0,
        left: -50,
        width: 80,
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.3)",
        transform:[{
            rotate:"20deg"
        }]
    }
})