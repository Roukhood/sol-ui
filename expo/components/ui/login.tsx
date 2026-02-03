import React, { useState } from "react";

import { View, Text, Pressable, TextInput } from "react-native";


type AuthMode = "login" | "signup"
type AuthField = {
    name: string;
    label: string;
    placeholder?: string;
};

type SocialProvider = {
    label: string;
    icon?: React.ReactNode
    onPress?: () => void
}

interface AuthFormProps {
    mode: AuthMode;
    socialProviders?: SocialProvider[];
    fields: AuthField[]
}

export default({ mode = 'login', fields, socialProviders = [] }: AuthFormProps) => {
    return <View className="min-h-screen bg-gray-500 w-full flex items-center justify-center">
        <View className="w-80  bg-white flex items-center justify-center p-4 rounded-md shadow-sm shadow-slate-400">
            <Pressable>
                <View className="flex flex-row gap-2">
                    <Text className={`border border-neutral-500 rounded-md p-1 text-center text-neutral-500 font-medium active:border-black 
                        ${mode === 'login'  && "text-black"} `
                    }
                    >
                        Login
                    </Text>
                    <Text className={`border border-neutral-500 rounded-md p-1 text-center text-neutral-500 font-medium active:border-black active:text-black
                        ${ mode === 'signup' && 'text-black' }`}
                    
                    >
                        Sign Up
                    </Text>
                </View>
            </Pressable>

            <View className="w-full">
                {
                    fields.map((field , id) => (

                        <View key={field.name}>
                            <Text key={`label${id}`}  className="mt-5  p-1">
                                {
                                    field.label
                                }
                            </Text>
                            <TextInput placeholder={field.placeholder} className="border border-neutral-500 p-2 rounded-md" />
                        </View>

                    ))
                }
                <Pressable className="bg-slate-900 rounded-md my-2 py-2 text-center font-medium">
                    <Text className="text-white font-medium flex items-center justify-center mx-auto">
                        {mode === 'login' ? 'Login' : 'Sign Up'}
                    </Text>
                </Pressable>
            </View>
            {
                socialProviders.length > 0 && (

                    <>
                        {
                            socialProviders.map((provider , id) => (
                                <View className="w-full " key={id}>
                                    <LoginOption key={id} title={provider.label} icon={provider.icon}/>
                                </View>
                            ))
                        }
                    </>
                )
            }


        </View>
    </View>
}


export const LoginOption = ({ icon, title }: { icon?: React.ReactNode, title: string }) => {
    return (
        <Pressable className="border border-neutral-500 rounded-md p-1 text-center text-neutral-500 font-medium active:border-black active:text-black my-1">
            <Text className="flex items-center justify-center py-1"><Text>{ icon }</Text> {title}</Text>
        </Pressable>
    )

}