import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Card, CardBody, CardButton, CardHeader } from "../../components/ui/card";


export default function CardDemo() {
    const [isFollowed, setIsFollowed] = useState(false);

    const handlePress = () => {
        setIsFollowed(!isFollowed);
        Alert.alert("Status", isFollowed ? "Unfollowed" : "Followed");
    };

    return (
        <View className='flex items-center justify-center min-h-screen'>
            <Card>
                <CardHeader>
                    User Profile
                </CardHeader>
                <CardBody>
                    Join our community and get exclusive updates. Premium members enjoy early access to new features and special discounts.
                </CardBody>
                <CardButton onPress={handlePress}>
                    {isFollowed ? "Following" : "Follow"}
                </CardButton>
            </Card>
        </View>
    )
}
