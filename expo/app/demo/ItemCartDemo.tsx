import React from "react";
import { View } from "react-native";
import ItemCart from "../components/ui/item-cart";

export default function ItemCartDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen'>
            <ItemCart />
        </View>
    )
}
