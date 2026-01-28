import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'



type FilterButtons = {
    icon?: React.ReactNode;
    label: string;
    onRemove?: () => void;
}

type AddFilters = {
    icon?: React.ReactNode;
    label: string;
    onAdd?: () => void;
}

interface FilterProps {
    filterButtons: FilterButtons[];
    addFilters: AddFilters[]
}


export function Filter({ filterButtons, addFilters }: FilterProps) {
    const [filter, setFilter] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState<AddFilters[]>([])
    const [selectedButtonFilters, setSelectedButtonFilters] = useState<FilterButtons[]>([])

    const handleAddFilter = (item: AddFilters) => {
        setSelectedFilters([...selectedFilters, item])
        setFilter(false)
    }

    const handleAddButtonFilter = (item: FilterButtons) => {
        setSelectedButtonFilters([...selectedButtonFilters, item])
    }

    const handleRemoveFilter = (index: number) => {
        setSelectedFilters(selectedFilters.filter((_, i) => i !== index))
    }

    const handleRemoveButtonFilter = (index: number) => {
        setSelectedButtonFilters(selectedButtonFilters.filter((_, i) => i !== index))
    }


    return (
        <View className="h-fit pb-5 w-80 shadow-md rounded-xl m-10 border ">
           <View>
             < Text className="p-4 font-bold flex flex-row items-center  gap-4">
                <Text > Apply filter</Text>
                <AntDesign name="filter" size={15} />
            </Text>
               
           </View>


            <View className="flex flex-row gap-2 m-2 items-center flex-wrap">
                {
                    filterButtons.map((el, id) => (
                        <FilterButton 
                            key={id} 
                            label={el.label} 
                            icon={el.icon}
                            onRemove={() => handleAddButtonFilter(el)}
                        />
                    ))
                }
                {
                    selectedButtonFilters.map((el, id) => (
                        <FilterButton 
                            key={`button-${id}`} 
                            label={el.label} 
                            icon={el.icon} 
                            onRemove={() => handleRemoveButtonFilter(id)}
                        />
                    ))
                }
                {
                    selectedFilters.map((el, id) => (
                        <FilterButton 
                            key={`selected-${id}`} 
                            label={el.label} 
                            icon={el.icon} 
                            onRemove={() => handleRemoveFilter(id)}
                        />
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

                         {addFilters.length > 0 && filter && <View className="w-fit shadow-md bg-white min-w-28 absolute -mx-14  top-10 rounded-md p-1 gap-2">
                        {
                            addFilters.map((el, id) => (
                                <AddFilter 
                                    key={id} 
                                    label={el.label} 
                                    icon={el.icon}
                                    onAdd={() => handleAddFilter(el)}
                                />
                            ))
                        }

                    </View>}

            
                </View>
            </View>
        </View>
    )
}


export const FilterButton = ({ label, icon, onRemove }: FilterButtons) => {
    const [lastTap, setLastTap] = useState(0)

    const handlePress = () => {
        const now = Date.now()
        const delta = now - lastTap
        
        // Double tap: 300ms between taps
        if (delta < 300 && onRemove) {
            onRemove()
        }
        setLastTap(now)
    }

    return (
        <Pressable 
            onPress={handlePress}
            className="border border-black/10  py-2 px-6 rounded-md h-fit flex flex-row items-center gap-2"
        >
            <Text className="flex items-center gap-1">
                <Text>{icon}</Text>
                {label}
            </Text>
        </Pressable>
    )
}

export const AddFilter = ({ label, icon, onAdd }: AddFilters) => {
    return (
        <Pressable 
            onPress={onAdd}
            className="w-60    flex flex-row items-center gap-1 justify-between py-1  px-4 rounded-md border border-black/10 active:bg-black/5 "
        >
            <Text>
                {
                    icon
                }
            </Text>
            <Text className="">
                {
                    label
                }
            </Text>
            <Text className="text-lg font-bold">+</Text>
        </Pressable>
    )
}
