import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'



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
            < Text className="p-4 font-bold flex flex-row items-center  gap-4">
                <Text > Apply filter</Text>
                <AntDesign name="filter" size={15} />
            </Text>


            <View className="flex flex-row gap-2 m-2 items-center">
                {
                    filterButtons.map((el, id) => (
                        <FilterButton key={id} label={el.label} icon={el.icon} />
                    ))
                }

                <View className="">
                    <Pressable onPress={() => setFilter((prev) => !prev)} className={`bg-black text-white size-8 flex items-center justify-center rounded-md '
                        ${filter ? "bg-black/80" : "bg-black "}
                    `}
                    >
                        <Text className="m-auto text-white">
                            {
                                filter ? 'X' : '+'
                            }
                        </Text>
                    </Pressable>

                    {addFilters.length > 0 && filter && <View className="w-20 shadow-md bg-white min-w-28 absolute left-10 top-2 rounded-md p-1 gap-2">
                        {
                            addFilters.map((el, id) => (
                                <AddFilter key={id} label={el.label} />
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
        <Pressable className="border border-black/10  py-2 px-6 rounded-md h-fit ">
            <Text className="flex items-center gap-1 mx-auto"
            ><Text>
                    {icon}
                </Text>{label}</Text>
        </Pressable>
    )
}

export const AddFilter = ({ label, icon }: AddFilters) => {
    return (
        <View className="w-30 flex flex-row items-center gap-1 justify-between  p-2 rounded-md border border-black/10 active:bg-black/5 ">
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
            <Pressable className=""><Text>+</Text></Pressable>
        </View>
    )
}