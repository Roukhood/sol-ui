
import React, { useState } from "react"
import { Pressable, View, Text } from "react-native"



export function PopCard() {
    const [pop, setPop] = useState(false)
    return (
        <View className="m-10">
            <Pressable onPress={() => setPop((prev) => !prev)}>
                <Text className="text-2xl">
                    :
                </Text>
            </Pressable>
            {
                pop && (
                    <View className=" w-52 rounded-md shadow-md absolute top-8 overflow-y-scroll ">

                        <View className="grid grid-cols-[1fr_1fr_1fr_1fr] bg-neutral-100">
                            {/* <TopPart icon={<ArrowBigLeftIcon size={20}/>} />
                            <TopPart icon={<Star size={20}/>} />
                            <TopPart icon={<RefreshCcwDot size={20}/>} /> */}

                        </View>

                        {/* <View className="">
                            <LabelButton title="Recent tabs" icon={<RectangleHorizontal size={18}/>} />
                            <LabelButton title="History" icon={<HistoryIcon size={18}/>} />
                            <View className="border-b"> </View>
                            <LabelButton title="Downloads" icon={<DownloadIcon size={18}/>} />
                            <LabelButton title="Bookmarks" icon={<Bookmark size={18}/>} />
                            <View className="border-b"> </View>
                            <LabelButton title="Share" icon={<Share2 size={18}/>} />
                            <LabelButton title="Setting" icon={< SettingsIcon size={18}/>} />
                        </View> */}

                        <View>
                    <LabelButton title="abc" />
                    </View>

                    </View>
                )

            }
        </View>
    )
}


export const LabelButton = ({ title, icon }: { title: string, icon?: React.ReactNode }) => {
    return (
        <Pressable className="p-2 active:bg-neutral-200 ">
            <Text className="flex flex-row items-center gap-4 text-sm font-normal" >{icon} {title}</Text>
        </Pressable>
    )
}

export const TopPart = ({ icon }: { icon: React.ReactNode }) => {
    return (
        <Pressable className="active:bg-neutral-200 p-3">
            {
                icon
            }
        </Pressable>
    )
}