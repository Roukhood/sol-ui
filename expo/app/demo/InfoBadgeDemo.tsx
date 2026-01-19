import React from "react";
import { View } from "react-native";
import {  InfoBadge } from "../components/ui/badge";


export default function InfoBadgeDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen w-full'>
            <InfoBadge info="solUI launching" />
        </View>
    )
}
