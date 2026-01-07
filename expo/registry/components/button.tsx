import React from "react";
import { Pressable , Text } from "react-native";



export function Button({children} :{ children :React.ReactNode}){
    return(
        <Pressable className="bg-cyan-700/60 border w-32 py-2 flex items-center cursor-pointer rounded-md active:bg-cyan-700/80">
            <Text className="text-lg font-normal text-white/90">
                {
                    children
                }
            </Text>
        </Pressable>
    )
}