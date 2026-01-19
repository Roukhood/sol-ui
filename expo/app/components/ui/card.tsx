import React from "react";
import { View, Text, Pressable } from "react-native";

export const Card = () => {
    return (
        <View className="w-64 h-fit  bg-white border border-black/30 rounded-3xl overflow-hidden">
            <CardHeader />
            <CardButton/>
            <CardBody/>
        </View>
    )
}

export const CardHeader = () => {
    return (
        <View className="w-full h-16 bg-black/5 overflow-hidden border-b border-neutral-300">
            <Text className="text-2xl font-medium m-4">
                sol-auth
            </Text>
        </View>
    )
}

export const CardBody = () =>{
    return(
        <View className="m-5">
            <Text className="text-neutral-500">
                sol-auth is an opne source project.
            </Text>
        </View>
    )
}

export const CardButton = () =>{
    return(
        <Pressable className="py-1 px-3  border border-neutral-200 rounded-md m-5 mb-0 min-w-20">
            <Text className="text-center">
                authentication
            </Text>
        </Pressable>
    )

}
