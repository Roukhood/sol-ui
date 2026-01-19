
import React, { useState } from "react"
import { Pressable, View, Text } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default () => {
    const [pop, setPop] = useState(false)
    return (
        <View className="m-10">
            <Pressable className="flex flex-row border border-black/10 px-3 py-1 items-center gap-2 rounded-md" onPress={() => setPop((prev) => !prev)}>
                <Text className="text-4xl">
                    : 
                </Text>
                <Text>
                    Click on dots
                </Text>
            </Pressable>
            {
                pop && (
                    <View className=" w-60 rounded-md  bg-violet-400  border border-neutral-300 shadow-md absolute  top-10 overflow-y-scroll ">
                        <View className="flex flex-row bg-neutral-100">
                            <TopPart icon={<Feather name="star" size={20}/>} />
                        </View>

                        <View className="">
                            <LabelButton title="History" icon={<MaterialCommunityIcons name="history" size={18} />} />
                            <View className="border-b"> </View>
                            <LabelButton title="Downloads" icon={<AntDesign name="download" size={18} />} />
                            <LabelButton title="Bookmarks" icon={<FontAwesome name="bookmark" size={16} />} />
                            <View className="border-b"> </View>
                            <LabelButton title="Share" icon={<FontAwesome name="share" size={16} />} />
                            <LabelButton title="Setting" icon={< Ionicons name="settings-sharp" size={18} />} />
                        </View>

                        <View>

                        </View>

                    </View>
                )

            }
        </View>
    )
}



export const LabelButton = ({ title, icon }: { title: string, icon?: React.ReactNode }) => {
    return (
        <Pressable className="w-60 p-2 py-3 border border-black/5 active:bg-violet-200/20  ">
            <View className="flex flex-row items-center gap-3 text-md font-normal  " >
                <Text className="w-6">{icon}</Text>
                <Text className="text-white font-medium"> {title}</Text>
            </View>
        </Pressable>
    )
}

export const TopPart = ({ icon }: { icon: React.ReactNode }) => {
    return (
        <Pressable className="active:bg-neutral-200 p-3">
            <Text>
                {
                    icon
                }
            </Text>
        </Pressable>
    )
}