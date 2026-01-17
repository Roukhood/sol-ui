import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default () => {
    const [active, setActive] = useState(0)
    return (

        <View className="w-96 py-10 bg-white rounded-md relative">

            {
                active == 0 &&
                <View className=" absolute w-40 border border-neutral-200 h-fit py-2 px-3 rounded-md ml-20 top-2">
                    <Text className="text-center">
                        Enjoy your day
                    </Text>
                </View>
            }
        
            <View className="flex flex-row  items-center justify-between gap-10 px-20 py-10  ">
                <View className="rounded-full w-fit  p-1 flex flex-row gap-2 bg-white border border-neutral-200">

                    {
                        ["hi", "by"].map((el, id) => {
                            return (
                                <Pressable key={id} className={`flex items-center justify-center rounded-full size-10 active:bg-black/5 active:text-black  ${active == id && `bg-black `}`} onPress={() => setActive(id)}>
                                    <Text className={` text-black ${active == id && 'text-white'}`}>
                                        {
                                            el
                                        }
                                    </Text>
                                </Pressable>
                            )
                        })
                    }
                </View>
                <View className="size-10 bg-black rounded-full">
                    <Pressable className=" flex items-center justify-center m-auto">
                        <Text className="text-white active:rotate-45 ">
                            +
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}