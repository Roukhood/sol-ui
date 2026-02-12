import React from "react"
import { Text, View } from "react-native"


export function WarningBadge({ title = "download Again" }: { title: string }) {
    return (
        <View className="w-48 border border-neutral-200 shadow-sm bg-yellow-200/50 h-14 py-2  flex items-center justify-center mx-auto rounded-md shadow-inherit">
            <View>
                <Text className=" font-medium">Warning</Text>
            </View>
            <Text className="font-[300] text-neutral-500">{title}</Text>
        </View>
    )
}