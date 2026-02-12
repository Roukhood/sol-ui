
import React, { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
export function InfoBadge({ info = "Buy Coffee" }: { info: string }) {
    const [accepted, setAccepted] = useState(false);

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
                    {info}
                </Text>
                <View className="w-48 bg-black/5 py-1 px-1  my-5 rounded-md mb-0 ">
                    <Pressable
                        onPress={() => setAccepted(!accepted)}
                        className="relative bg-green-100/80 px-5 py-2 rounded-md flex flex-row items-center justify-center"
                    >
                        <Text className="font-semibold">
                            {accepted ? "Accepted" : "Accept"}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


