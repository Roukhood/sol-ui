import React from 'react'
import { View, Text } from 'react-native'

export default function BottomToolbar() {
  return (
    <View className="h-16 bg-gray-100 border-t border-gray-300 px-4 flex-row items-center justify-between">
      <Text className="text-gray-600">Font: Inter</Text>
      <Text className="text-blue-500">Export</Text>

    </View>
  )
}