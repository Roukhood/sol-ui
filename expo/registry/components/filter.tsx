import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
// import { cn } from "../../../../../packages/src/utils/cn";

import Animated , * as Animate from 'react-native-reanimated'





type FilterButtons = {
    icon?: React.ReactNode;
    label: string;
}

type AddFilters = {
    icon?: React.ReactNode;
    label: string

}

interface FilterProps {
    filterButtons: FilterButtons[];
    addFilters: AddFilters[]
}


export function Filter({ filterButtons, addFilters }: FilterProps) {
    const [filter, setFilter] = useState(false)

   
    return (
        <View className="h-40 w-80 shadow-md rounded-xl m-10 border ">
            < Text className="p-4 font-bold flex gap-2 items-center">
                Applied Filters 
                {/* <FilterIcon size={15} fill='black'/> */}
            </Text>


            <View className="flex flex-row gap-2 m-2">
                {
                    filterButtons.map((el, id) => (
                        <FilterButton key={id} label={el.label} icon={el.icon} />
                    ))
                }

                <View className="">
                    <Pressable onPress={() => setFilter((prev) => !prev)} className='bg-red-300 p-2 size-8 flex items-center justify-center rounded-md'
                    //     filter ? "bg-red-300" : "bg-green-300"
                    // )}
                    >
                        {
                            addFilters.length > 0 ?  "x" : '+'  
                        }
                    </Pressable>

                    {addFilters.length > 0 && filter && <View className="shadow-md bg-white min-w-28 absolute left-10 top-2 rounded-md p-1">
                        {
                            addFilters.map((el, id) => (
                                <AddFilter label={el.label} />
                            ))
                        }


                    </View>}
                </View>
            </View>






        </View>
    )
}


export const FilterButton = ({ label, icon }: FilterButtons) => {
   
    return (
        <Pressable className="bg-violet-300/40  py-2 px-3 rounded-md h-fit ">
           <Text   className="flex items-center gap-1 mx-auto" 
           >{icon}{label}</Text>
        </Pressable>
    )
}

export const AddFilter = ({ label, icon }: AddFilters) => {
    return (
        <View className="flex flex-row items-center gap-1 justify-between active:bg-violet-300/30 p-2 rounded-md">
            <Text>
                {
                    icon
                }
            </Text>
            <Text className=" ">
                {
                    label
                }
            </Text>
            <Pressable className="">+</Pressable>
        </View>
    )
}