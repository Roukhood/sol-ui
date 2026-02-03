import * as React from "react";

import { FlatList, Pressable, Text, View } from "react-native";

type DropdownProps = {
    label: string;
    value: string;
    options: string[];
    onSelect: (value: string) => void;
}

export const Dropdown = ({
    label,
    value,
    options,
    onSelect
}: DropdownProps) => {

    const [visible , setVisible] = React.useState<boolean>(false);

    return (
      
        <View className="relative">
            <Text className="text-sm mx-1">
                {
                    label
                }
            </Text>
            <Pressable className="border border-black/20 py-2 px-3 rounded-md " onPress={() => setVisible((prev) => !prev)}>
                <Text>
                    {value}
                </Text>
            </Pressable>
        
            <View className={`${visible ? "block" : "hidden"} relative `}>
               
                    <Pressable  onPress={() => setVisible(false)} className="absolute left-10 right-0 z-20 w-40  ">
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <Pressable
                                    className="bg-white border border-black/10 rounded-lg py-2 w-40 my-0.5 "
                                    onPress={() => {
                                        onSelect(item);
                                        setVisible(false);
                                    }}>
                                    <Text className="mx-5">
                                        {
                                            item
                                        }
                                    </Text>
                                </Pressable>
                            )}
                        />
                    </Pressable>
              
            </View>
        </View>

    
    )
}