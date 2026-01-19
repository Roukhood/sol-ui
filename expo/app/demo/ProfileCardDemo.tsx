import React from "react";
import { View } from "react-native";

import ProfileCard from "../components/ui/profile-card";


export default function ProfileCardDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen'>
           <ProfileCard src="https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/" subTitle='@sol-auth' title='sonali' />
        </View>
    )
}