
import { Tabs } from "expo-router";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import '../../global.css'
export default function Layout() {
    return <Tabs>
        <Tabs.Screen name="index" options={{
            headerShown: false,
            tabBarShowLabel : false,
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />
        }} />
       
    </Tabs>
}