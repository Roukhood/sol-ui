import React from "react";
import { View } from "react-native";
import ItemCart from "../components/ui/item-cart";


const ItemData = [
    {
        imgSrc: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        imgSrc: "https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

// Dummy data for ItemCart component
const dummyData = {
    price: 129.99,
    itemName: "Premium Cotton T-Shirt",
    sizeOptions: ["Small", "Medium", "Large", "X-Large"],
    colorOptions: ["Black", "White", "Navy", "Green", "Red"],
    compositionOptions: ["100% Cotton", "Cotton Blend", "Silk Bamboo", "Organic Cotton"],
    imageData: ItemData,
};

export default function ItemCartDemo() {
    return (
        <View className=''>
            <ItemCart 
                price={dummyData.price}
                itemName={dummyData.itemName}
                sizeOptions={dummyData.sizeOptions}
                colorOptions={dummyData.colorOptions}
                compositionOptions={dummyData.compositionOptions}
                imageData={dummyData.imageData}
            />
        </View>
    )
}

