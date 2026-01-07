import { useRouter } from "expo-router"
import React from "react"
import { View, Text, SafeAreaView, Image, Pressable, Alert } from "react-native"

// icons import
import Feather from '@expo/vector-icons/Feather';
export default function AdInfoScreen() {
    const router = useRouter()
    let downloads = 2
    return (
        <SafeAreaView className="bg-white h-full">
            <Text className="text-3xl font-medium m-3">
                business app
            </Text>
            <Image source={require('../../src/assets/Roukhood.jpg')} className="h-80 w-96 mx-auto border m-2 rounded-lg" />
            <View className="  flex-row justify-between ">
                <Pressable className="bg-blue-500 w-24 p-2 m-4 rounded-lg " onPress={()=> router.push('/EditorScreen')}>
                    <Text className="text-center text-white font-semibold text-xl">
                        Edit
                    </Text>
                </Pressable>
                <Pressable className="bg-blue-500 w-25 p-2 m-4 rounded-lg ">
                    <Text className="text-center text-white font-semibold text-xl">
                        Download <Feather name="download" size={23} color='black'/>
                    </Text>
                </Pressable>
                <Pressable className="bg-blue-500 w-24 p-2 m-4 rounded-lg ">
                    <Text className="text-center text-white font-semibold text-xl">
                         <Feather name="share" size={23} color='black'/>
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text className="text-2xl font-medium ml-2">
                    Downloading Scrore {downloads}
                </Text>
            </View>
        </SafeAreaView>
    )
}