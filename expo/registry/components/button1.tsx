
import {  Text } from "react-native"
import {Button} from "./button"
import React from "react"

export const SimpleButton = ({title = "click me"} : {title :string}) =>{
    return(
            <Button className="bg-black border border-gray-50 ">
                <Text className="text-white text-center ">
                   {
                    title
                   }
                </Text>
            </Button>
    )
}