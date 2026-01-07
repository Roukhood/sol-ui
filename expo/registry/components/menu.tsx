
import React from 'react'
import { View, Text, Pressable } from 'react-native'


const menuItmes = [
    {
        // logo : <ReplyAll size={18}/>,
        label: 'Reply'
    },
    {
        // logo : <Forward size={18}/>,
        label: 'Forward'
    },
    {
        // logo : <Share2 size={18}/>,
        label: 'Share via..'
    },
    {
        // logo: <Copy size={18} />,
        label: 'Copy'
    }
]
const Menu = () => {
    return (
        <View className='h-60 w-full  rounded-t-2xl text-white border'>

            <View className='flex flex-row w-full items-center justify-center gap-4 p-2 border-b border-b-neutral-400'>
                <View className='border rounded-full size-10 flex items-center justify-center'>
                    <Pressable>
                        icon
                    </Pressable>
                </View>
                <View className='border rounded-full size-10 flex items-center justify-center'>
                    icon
                </View>
                <View className='border rounded-full size-10 flex items-center justify-center'>
                    icon
                </View>
                <View className='border rounded-full size-10 flex items-center justify-center'>
                    +
                </View>
            </View>

            <View className='my-2 w-full '>
                <View className=' w-full '>
                    {
                        menuItmes.map((el, id) => {
                            return (

                                <Pressable className=' w-full px-2 active:bg-neutral-200'>

                                    <Text key={`text${id}`} className='flex  items-center my-2 gap-2 font-medium '>{el.label}</Text>
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