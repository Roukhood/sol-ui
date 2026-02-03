
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const menuItmes = [
    {
        logo : <Entypo name='reply' size={18}/>,
        label: 'Reply'
    },
    {
        logo : <Fontisto name='forward' size={14}/>,
        label: 'Forward'
    },
    {
        logo : <FontAwesome name='share' size={18}/>,
        label: 'Share via..'
    },
    {
        logo: <Feather name='copy' size={18} />,
        label: 'Copy'
    }
]
const Menu = () => {
    return (
        <View className='h-60 w-full  rounded-t-2xl text-white border'>

            <View className='flex flex-row w-full items-center justify-center gap-4 p-2 border-b border-b-neutral-400'>
                <View className='border rounded-full size-10 flex items-center justify-center '>
                    <Pressable >
                        <Entypo name='emoji-happy'  size={18}/>
                    </Pressable>
                </View>
                <View className='border rounded-full size-10 flex items-center justify-center'>
                    <Pressable>
                        <Entypo name='emoji-neutral' size={18}/>
                    </Pressable>
                </View>
                <View className='border rounded-full size-10 flex items-center justify-center'>
                    <Pressable>
                        <MaterialIcons name='emoji-emotions' size={18}/>
                    </Pressable>
                </View>
                <View className='border rounded-full size-10 flex items-center justify-center'>
                    <Text>
                        +
                    </Text>
                </View>
            </View>

            <View className='my-2 w-full '>
                <View className=' w-full '>
                    {
                        menuItmes.map((el, id) => {
                            return (

                                <Pressable className=' w-full px-2 active:bg-neutral-200' key={id}>
                                    <Text key={`text${id}`} className='flex  items-center my-2 gap-4 font-medium active:scale-1'><Text>{el.logo}</Text>  {el.label}</Text>
                                </Pressable>

                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}


export default Menu