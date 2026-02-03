import React from "react";
import { View } from "react-native";

import ProfileCard from "../../components/ui/profile-card";


export default function ProfileCardDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen'>
           <ProfileCard src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" subTitle='@sol-auth' title='sonali' />
        </View>
    )
}