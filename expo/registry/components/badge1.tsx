import {  Text} from "react-native"
// import { Button } from "/ui/button"
import React from "react"
import { Button } from "./button"
export const DefaultBadge = ({BadgeValue = "Default"}: {BadgeValue ?: string}) => {
    return (
        <Button>
                <Text className="text-center">
                    {
                        BadgeValue
                    }
                </Text>
        </Button>
    )
}