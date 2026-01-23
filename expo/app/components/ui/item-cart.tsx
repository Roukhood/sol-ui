

import * as React from "react";
import { Pressable, Text, View, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ItemData = [
    {
        imgSrc: require("../../../src/assets/image2.jpg")
    },
    {
        imgSrc: require("../../../src/assets/image4.jpg")
    },
    {
        imgSrc: require("../../../src/assets/image3.jpg")
    },
]



export default () => {
    let price = 300;
    let itemName = "praso printed"
    const [liked, setLiked] = React.useState<boolean | undefined>(false);
    const [image, setImage] = React.useState<string | undefined>(ItemData[1].imgSrc)


    return (
        <View className="relative w-full h-full">
            <View className="flex flex-row items-center justify-between px-8 mt-10 absolute top-5  w-full z-10">
                <Pressable className="size-10 bg-white rounded-full flex items-center justify-center active:scale-105 ">
                    <FontAwesome name="heart" size={18} color={liked ? "red" : "black"} />
                </Pressable>
                <Pressable className="size-10 bg-white rounded-full flex items-center justify-center active:scale-105 "
                    onPress={() => setLiked((prev) => !prev)}
                >
                    <FontAwesome name="heart" size={18} color={liked ? "red" : "black"} />
                </Pressable>
            </View>
            <Image source={image} className="mx-auto w-full h-full object-bottom " />

            {/* item image  */}
            <View className="bg-white/30 w-full absolute bottom-80 mb-5 flex flex-row gap-4 items-center justify-center py-2 rounded-md">
                {
                    ItemData.map((el, id) => {
                        return (
                            <View className={`size-24  rounded-md overflow-hidden ${image == el.imgSrc ? "scale-110" : "scale-100"}`}
                                key={id}>
                                <Pressable onPress={() => setImage(el.imgSrc)}>
                                    <Image
                                        source={el.imgSrc}
                                        className="w-full h-full"
                                    />
                                </Pressable>
                            </View>

                        )
                    })
                }
                
            </View>

            <View className="w-full h-80 bg-white rounded-t-3xl border border-black/5 absolute bottom-0">
                {/* item name and price */}
                <View className="mx-10 mt-10 mb-5 flex flex-row justify-between items-center">
                    <Text className="text-2xl font-medium">
                        {
                            itemName
                        }
                    </Text>
                    <Text className="text-2xl font-medium">
                        {`$ ${price}`}
                    </Text>
                </View>

                {/* item details */}
                <View className="w-64 h-fit py-5 bg-cyan-400">
                    <View className="flex flex-row gap-5 items-center ">
                        <Pressable>
                            <Text>
                                Large
                            </Text>
                        </Pressable>
                        <Pressable>
                            <Text>
                                01
                            </Text>
                        </Pressable>
                    </View>

                    <View className="flex flex-row gap-5 items-center ">
                        <Pressable>
                            <Text>

                                collor
                            </Text>
                        </Pressable>
                        <Pressable>
                            <Text>

                                silk bamboo
                            </Text>
                        </Pressable>
                    </View>
                </View>

                {/* add to cart button */}
                <Pressable className="absolute right-10 bottom-20 w-20 bg-green-300 h-24 rounded-lg">
                    <Text className=" text-black text-center text-2xl font-medium m-auto">
                        + Add
                        <FontAwesome name="heart" size={18} color={liked ? "red" : "black"} />
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};
