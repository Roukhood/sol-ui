
import React, { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native"

import Feather from 'react-native-vector-icons/Feather'
export function InfoBadge({task = "Buy Coffee" } :{task : string}) {
    const [save, setSave] = useState(true)
    const [time, setTime] = useState(4)


    function onSave() {

        
        setInterval(() => {

            // setTime((el) =>  el - 1)

            if (time == 0) {

                setTime(4)
            }
        })


    }

    return (
        <View className=" min-w-80   bg-neutral-400  rounded-md ">
            <View className="pt-4 px-4">
                {/* <Text className="  font-medium flex gap-3 items-center"> {save ? <CircleArrowRight size={18} /> : <CircleArrowRight size={18} fill='green' />} {save ? 'save your changes' : 'changes saves'}  </Text> */}
                <View className="">
                    <Text className="py-1 font-medium text-white/90 ">{save ? "Selected Tasks" : "Task has been updated"}</Text>
                    {

                        save &&
                        <View>
                            <Pressable className="bg-neutral-200 py-1 px-3 rounded-md"  >
                                <Text className=" font-medium" >
                                    {
                                        task 
                                    }
                                </Text>
                            </Pressable>
                        </View>
                    }

                    <Pressable className="bg-slate-600 w-fit py-2 px-3 rounded-md my-2" onPress={() => { setSave((prev) => !prev); onSave() }}>
                        <Text className="font-medium text-white">
                            {
                                save ? "Save" : "Undo"
                            }
                        </Text>
                    </Pressable>
                </View>
            </View>

            {save ? '' : <View className="bg-neutral-200 h-8 mt-4 "> <Text className="w-full m-auto px-4">This Message close in {time} seconds</Text> </View>}

        </View>
    )
}


export function ErrorBadge({title = "User not found"}:{title : string}) {
    return (
        <View className="w-48  border border-neutral-200 shadow-sm bg-red-200/50 h-14 py-2  flex items-center justify-center mx-auto rounded-md shadow-inherit">
            <View>
                <Text className=" font-medium">Error</Text> <Feather name="abc" />
            </View>
            <Text className="font-[300] text-neutral-500">{title}</Text>
        </View>
    )
}


export function WarningBadge({title = "download Again"} : {title : string}) {
    return (
        <View className="w-48 border border-neutral-200 shadow-sm bg-yellow-200/50 h-14 py-2  flex items-center justify-center mx-auto rounded-md shadow-inherit">
            <View>
                <Text className=" font-medium">Warning</Text>
            </View>
            <Text className="font-[300] text-neutral-500">{title}</Text>
        </View>
    )
}