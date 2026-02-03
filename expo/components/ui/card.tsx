import React from "react";
import { View, Text, Pressable } from "react-native";

export const Card = ({children} : {children : React.ReactNode}) => {
    return (
        <View className="w-64 h-fit  bg-white border border-black/30 rounded-3xl overflow-hidden">
            {
                children
            }
        </View>
    )
}


export const CardHeader = ({children} : {children : React.ReactNode}) => {
    return (
        <View className="w-full h-20 bg-black/5 overflow-hidden border-b border-neutral-300">
            <Text className="text-2xl font-medium m-4">
                {
                    children
                }
            </Text>
        </View>
    )
}

export const CardBody = ({children } : {children : React.ReactNode}) =>{
    return(
        <View className="m-5">
            <Text className="text-neutral-500">
               {
                children
               }
            </Text>
        </View>
    )
}

export const CardButton = ({children, onPress} : {children : React.ReactNode, onPress?: () => void}) =>{
    return(
        <Pressable 
            onPress={onPress}
            className="py-1 px-3  border border-neutral-200 rounded-md m-5 mb-5 min-w-20 active:bg-neutral-100"
        >
            <Text className="text-center font-semibold">
                {
                    children
                }
            </Text>
        </Pressable>
    )

}
