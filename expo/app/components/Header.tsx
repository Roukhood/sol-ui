import React from 'react'
import { View, Text } from 'react-native'

export default function Header() {
  return (
    <View className="h-16 bg-blue-500 px-4 flex-row items-center justify-between ">
      <Text className="text-white text-xl font-bold mt-4">Design Editor</Text>
    </View>
  )
}
