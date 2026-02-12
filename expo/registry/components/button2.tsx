import { View, Image, Text } from "react-native";
import { Button } from "./button";
import React from "react";

export const ButtonWithLogo = ({title = "solUI" , imgSrc = "https://tse1.explicit.bing.net/th/id/OIP.QrRYSk3X1fCWsp25pg5EKQHaFw?w=1200&h=933&rs=1&pid=ImgDetMain&o=7&rm=3"} : {title: string , imgSrc: string}) => {
  return (
    <View className="flex flex-row items-center justify-center gap-5 border pl-2 rounded-md py-2">
      <Image
       
        source={{uri: imgSrc}}
        style={{ width: 30, height: 30, borderRadius: 100 }}
      />
      <Button style={{
        borderWidth: 0
      }}>
        <Text className="text-center">{title}</Text>
      </Button>
    </View>
  );
};
