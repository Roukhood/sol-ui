import React from "react";
import { View } from "react-native";

import { Filter } from "../components/ui/filter";


export default function FilterDemo() {
    return (
        <View className='flex items-center justify-center min-h-screen'>
          <Filter 
          filterButtons={[{label: 'abc'} , {label: 'abc'}]} 
          addFilters={[{label: "abc"} , {label:"abc"} , {label: "abc"} , {label:"abc"}]}
          />
        </View>
    )
}