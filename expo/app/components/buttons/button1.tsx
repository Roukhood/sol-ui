
import { Image, View } from "react-native"
import {Button} from "../ui/button"
import React from "react"

export const Button1 = () =>{
    return(
        <View className="flex flex-row gap-5 items-center">
            <Image src={require('../../../src/assets/image3.jpg')} className="size-3"/><Button>Click</Button>
        </View>
    )
}