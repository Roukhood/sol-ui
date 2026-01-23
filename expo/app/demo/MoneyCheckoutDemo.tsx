import React from "react";
import { View } from "react-native";
import MoneyCheckout from "../components/ui/money-checkout";


export default function FilterDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen'>
          <MoneyCheckout money={499} 
          nameOfReceiver="Sonali" 
          imageSrc="https://plus.unsplash.com/premium_photo-1723568425978-81ef0ab51252?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </View>
    )
}