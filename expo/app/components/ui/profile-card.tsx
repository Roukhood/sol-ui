import React from "react";
import { Image, View, Text, Pressable } from "react-native"

type Profile = {
    src: string;
    title: string;
    subTitle: string;
    buttonLabel?: string
}

export default ({ src, title, subTitle, buttonLabel = "Added" }: Profile) =>{
    return (
        <View className="w-60 h-56 border border-neutral-300  absolute bg-yellow-200/40 rounded-xl  p-1 shadow-md">
            <View className="w-60 h-56 border border-neutral-300  rounded-xl flex items-center py-5 shadow-md">
            <View className=" size-16  my-2 ">
                <Image source={src ? {uri : src} : {uri  : "https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/"}}  className="object-cover rounded-full w-full h-full overflow-hidden" />
            </View>
            <Text className="font-medium text-2xl">
                {
                    title
                }
            </Text>
            <Text className="text-neutral-500">
                {
                    subTitle
                }
            </Text>
            <Pressable className="bg-violet-300 w-fit p-2 px-4 my-4 rounded-xl ">
               <Text className="font-medium">{buttonLabel}</Text>
            </Pressable>
        </View>
        </View>
    )
}