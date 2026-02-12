import * as React from "react"
import { View, Text, Image } from "react-native"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export const CardWithImage = ({uri = "https://images.pexels.com/photos/2270328/pexels-photo-2270328.jpeg" }: {uri : string}) => {
      const [liked, setLiked] = React.useState<boolean | undefined>(false);
    return (

        <Card className="w-96 rounded-md">
            <CardContent className="w-full h-96 relative">
                <Image source={{ uri: uri }} style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20
                }} />

               <View className="absolute bottom-0 left-10 ">

               <View className="flex flex-row gap-2 w-40 justify-between">
                  <Button
                className="bg-black/40 py-3 my-5 border border-gray-500  px-5 rounded-md active:scale-105 flex items-center justify-center" 
                style={{
                    width: "100%",
                }}
                >
                    <AntDesign name="arrow-left" size={18} color="white"/>
                </Button>
                <Button
                          className="py-3 px-5 my-5 bg-black/40 rounded-md flex items-center justify-center active:scale-105 "
                          onPress={() => setLiked((prev) => !prev)}
                        >
                          <FontAwesome name="heart" size={18} color={liked ? "red" : "white"} />
                </Button>
               </View>
               </View>
            </CardContent>
        </Card>

    )
}