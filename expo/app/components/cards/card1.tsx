import React from "react"
import { View, Text } from "react-native"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"


export const SimpleCard = () => {
    return (
        
            <Card className=" border border-black/50 w-72 rounded-md">
            <View className="py-10 mx-3">
                <Text className="text-4xl font-semibold">
                94%
            </Text>
            <Text className="font-medium">
                Enjoy The Versatility Cards
            </Text>
            </View>
                
                <CardContent className="flex gap-3 h-40" style={{
                    borderWidth: 0
                }}>
                    <Button className="active:scale-105">
                        <Text>
                            14k Top Reviews
                        </Text>
                    </Button>
                    <Button className="active:scale-105">
                        <Text>
                            100% Payment Credits
                        </Text>
                    </Button>
                </CardContent>
            </Card>
        
    )
}