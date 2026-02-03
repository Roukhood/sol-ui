import React from "react";
import { View } from "react-native";

import PinInput from "../../components/ui/pin-input";


export default function PinInputDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen'>
            <PinInput length={4}  onComplete={()=> "pin entered successfully"}/>
        </View>
    )
}
