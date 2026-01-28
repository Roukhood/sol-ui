import React from "react";
import { View } from "react-native";
import {  InfoBadge } from "../components/ui/badge";


export default function InfoBadgeDemo() {
    return (
        <View className=''>
            <InfoBadge info="solUI launching" />
        </View>
    )
}
