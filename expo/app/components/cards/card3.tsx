import React from "react";
import { View, Text } from "react-native";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import AntDesign from "react-native-vector-icons/AntDesign";

export const FeatureCard = () => {
  return (

    <View className=" gap-5">

  
    <Card className="bg-green-950 w-80 h-fit rounded-3xl">
      <CardHeader>
        <Text className="text-neutral-200">STRATEGY</Text>
      </CardHeader>
      <CardContent>
        <View className="py-2">
          <Text className="text-neutral-200">Money Momentum</Text>
          <Text className="text-neutral-200">
            Tract premuim helps you start saver investments
          </Text>
        </View>
        <View className="w-full h-0.5 bg-gray-600 mt-2 " />
        <View className="flex flex-row items-center justify-between mt-5 ">
          <Text className="text-neutral-200 text-2xl">7.20%</Text>
          <Button className="bg-black/40">
            <AntDesign name="arrow-right" color="white" size={18} />
          </Button>
        </View>
      </CardContent>
    </Card>

    <Card className="bg-black w-80 h-fit rounded-3xl">
      <CardHeader>
        <Text className="text-neutral-200">Plans</Text>
      </CardHeader>
      <CardContent>
        <View className="py-2">
          <Text className="text-neutral-200">Long-Term</Text>
          <Text className="text-neutral-200">
           Create vision. To get started your dream life.
          </Text>
        </View>

        <View className="w-full h-0.5 bg-gray-600 mt-2 " />
        <View className="flex flex-row items-center justify-between mt-5 ">
          <Text className="text-neutral-200 text-2xl">14.20%</Text>
          <Button className="bg-white">
            <AntDesign name="arrow-right" color="black" size={18} />
          </Button>
        </View>
      </CardContent>
    </Card>
</View>
  );
};
