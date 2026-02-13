
import {  Text, View } from "react-native"
import {Button} from "../ui/button"
import React from "react"

export const ComboButton = ({title1 = "Login", title2 = "SignUp"} : {title1: string , title2 : string}) =>{
    return(
        <View className="flex flex-row gap-2">
            <Button className="bg-black border border-gray-50 ">
                <Text className="text-white text-center ">
                    {
                        title1
                    }
                </Text>
            </Button>
            <Button className="border border-gray-50 ">
                <Text className="text-center ">
                    {
                        title2
                    }
                </Text>
            </Button>
        </View>
    )
}