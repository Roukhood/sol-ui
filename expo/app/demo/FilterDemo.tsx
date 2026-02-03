import React from "react";
import { View } from "react-native";

import { Filter } from "../../components/ui/filter";


export default function FilterDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen'>
          <Filter 
          filterButtons={[{label: 'New Arrivals'} , {label: 'Best Sellers'}]} 
          addFilters={[{label: "Price: Low to High"} , {label:"Price: High to Low"} , {label: "Top Rated"} , {label:"Discounted"}]}
          />
        </View>
    )
}