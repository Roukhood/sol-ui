import { View , Text, ActivityIndicator} from "react-native"
import { Button } from "./button"
import * as React from "react"


export const SpinningBadge = ({BadgeValue = "Loading", color = "red"  } : {BadgeValue?: string , color?: string })  => {
    return (
        <Button>
            <View className="flex flex-row gap-4">
                <Text>
                    {
                        BadgeValue
                    }
                </Text>
               <ActivityIndicator  color={color}/>
            </View>
        </Button>
    )
}