import { Text, View } from "react-native";
import { Button } from "./button";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export const ButtonWithIcon = ({title  = "Enter", icon} : {title : string , icon : React.ReactNode }) => {
  return (
    <Button className="flex flex-row items-center gap-5 active:scale-105">
        <View className="bg-black size-8 rounded-full flex items-center justify-center  ">
          {
            icon ? icon :  <AntDesign name="arrow-left" size={18} color="white"/>
          }
        </View>
      <Text className="font-semibold">{title}</Text>
    </Button>
  );
};
