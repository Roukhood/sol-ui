import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardContent } from "../ui/card";

export const ArtistCard = () => {
  return (
    <Card className="w-96 h-96">
      <CardContent>
        <Image
          source={{
            uri: "https://charts-static.billboard.com/img/2016/10/bad-bunny-74k-344x344.jpg",
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />

        <View
          className="absolute bottom-1 bg-black/80 py-5 w-full mx-1.5"
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View className="pt-2 px-2 flex flex-row gap-4 items-center">
            <Text className="text-3xl font-bold text-white">Bad Bunny</Text>
            <View className="h-full w-0.5 bg-white" />
            <Text className="text-white">113 Songs</Text>
            <View className="h-full w-0.5 bg-white" />
            <Text className="text-white">Top 5</Text>
          </View>
        </View>
      </CardContent>
    </Card>
  );
};
