import { View, Text, Image } from "react-native"
import { Button } from "../ui/button"
import * as React from "react"


export const CountBadge = ({count = 2}:  { count ?: number} ) => {
    return (
        <View className="relative rounded-full size-20 bg-green-500 ">
            <Image source={{ uri: "https://thumbs.dreamstime.com/b/brown-hair-businesswoman-avatar-woman-face-profile-icon-concept-online-support-service-female-cartoon-character-portrait-brown-126956822.jpg?w=768" }} className="w-full h-full rounded-full"/>
            <View className=" bg-red-200 absolute  bottom-1 right-1 size-6 rounded-full">
                <Text className="text-center ">
                    {
                        count
                    }
                </Text>
            </View>
        </View>
    )
}