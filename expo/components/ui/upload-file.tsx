import React from "react";
import { View ,Text, Pressable } from "react-native";


export default () =>{
    return(
        <View className="w-80 h-fit pb-10 shadow-sm border border-black/10 rounded-lg">
            <View className="flex flex-row  gap-5 justify-between mx-5 mt-5 active:bg-black/20">
               
                <Text className="text-lg font-semibold">Upload file</Text>
               
            </View>

            <View className="flex  items-center justify-center h-40 border border-dashed border-black/40 mx-10 my-5 rounded-lg">
                <Text>Icon</Text>
                <Text className="font-semibold text-md">Import file</Text>
                <Text className="text-neutral-500">
                    Drop file
                </Text>
            </View>
           
           <View className="mx-10">
             <View className="pl-2 h-20 bg-neutral-500/5 border border-black/10 rounded-lg">
                <View className="flex flex-row gap-5 my-2">
                    <Text>Icon</Text> 
                    <Text className="text-md font-semibold">FileName</Text>
                </View>
                <View>
                    <Text>Loadding...</Text>
                </View>
            </View>

            <Pressable className="bg-black py-2 my-2 rounded-lg ">
                <Text className="text-white text-center font-medium">
                   Upload file
                </Text>
            </Pressable>
           </View>

           
        </View>
    )
}