
import React, { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
export function InfoBadge({ info = "Buy Coffee" }: { info: string }) {
    return (
        <View className=" w-64 h-60 bg-black/5 rounded-2xl p-1">
            <View className="w-full h-full bg-white border border-neutral-300 rounded-[12px] flex items-center justify-center ">
                <Text>
                    <AntDesign name="warning" size={23} /> 
                </Text>
                <Text className="font-semibold text-[20px] my-1">
                    To your attention!
                </Text>
                <Text className="text-neutral-500 text-xl my-1">
                    {
                        info
                    }
                </Text>
                <View className="w-48 bg-black/5 py-1 px-1  my-5 rounded-md mb-0 ">
                    <Pressable className="relative bg-green-100/80 px-5 py-2 w-fit rounded-md flex flex-row justify-end  ">
                        <Text className="font-semibold">
                            Accept
                        </Text>
                    </Pressable>
                    <Pressable className="absolute my-1 h-full w-20 shadow-sm border border-black/5 bg-white px-3 rounded-md active:translate-x-[96px]">
                        <View className="absolute inset-0 border-r border-black/50  right-10 top-1 bottom-1">

                        </View>
                        <View className="absolute inset-0 border-r border-black/50  right-8 top-1 bottom-1">

                        </View>
                        <View className="absolute inset-0 border-r border-black/50  right-6 top-1 bottom-1">

                        </View>
                        <View className="absolute inset-0 border-r border-black/50  right-4 top-1 bottom-1">

                        </View>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}


export function ErrorBadge({ title = "User not found" }: { title: string }) {
    return (
        <View className="w-48  border border-neutral-200 shadow-sm bg-red-200/50 h-14 py-2  flex items-center justify-center mx-auto rounded-md shadow-inherit">
            <View>
                <Text className=" font-medium">Error</Text> <Feather name="abc" />
            </View>
            <Text className="font-[300] text-neutral-500">{title}</Text>
        </View>
    )
}


export function WarningBadge({ title = "download Again" }: { title: string }) {
    return (
        <View className="w-48 border border-neutral-200 shadow-sm bg-yellow-200/50 h-14 py-2  flex items-center justify-center mx-auto rounded-md shadow-inherit">
            <View>
                <Text className=" font-medium">Warning</Text>
            </View>
            <Text className="font-[300] text-neutral-500">{title}</Text>
        </View>
    )
}