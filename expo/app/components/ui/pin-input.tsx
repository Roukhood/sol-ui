import React, { useState, useRef, useEffect } from 'react';
import {  TextInput, View, Pressable, Text, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

type OTPInputProps = {
    length?: number;
    onComplete?: (otp: string) => void;
    autoFocus ?: true
}

export default ({ length = 4, onComplete  , autoFocus}: OTPInputProps) => {
    // State: Array of strings representing each digit
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const [send, setSend] = useState<boolean>(false);

    const inputs = useRef<Array<TextInput | null>>(Array(length).fill(null));


    useEffect(()=>{
        setOtp((prev)=>{
            const next = Array(length).fill('');
            for(let i = 0 ; i < Math.min(prev.length, length) ; i++) next[i] = prev[i];
            return next;
        });
        inputs.current = Array(length).fill(null);
    }, [length]);


    const callOnComplete = (vals : string[])=>{
        const code = vals.join("");
        if(code.length === length && !vals.includes("")) onComplete?.(code);

    }

    const focusInput = (index : number) =>{
        const ref = inputs.current[index];
        ref?.focus();
    }


    const handleChangeText = (index : number , text : string)=>{

        if(text.length > 1){
            const chars = text.split("").slice(0 , length - index);
            setOtp((prev)=> {
                const next = [...prev];
                for(let i = 0 ; i<chars.length ; i++) next[index + 1] = chars[i];
                return next;
            });

            const nextFocusIndex = Math.min(length  - 1 , index  + text.length -1);

            setTimeout(()=> focusInput(nextFocusIndex) , 0);
            setTimeout(()=> callOnComplete(getCurrentDigits())  , 0);
            return;
        }

        const char = text === '' ? '' : text[0];
        setOtp((prev)=>{
            const next = [...prev];
            next[index] = char;
            return next;
        });

        if(char !== ''){
            if(index > length -1) focusInput(index + 1);
            else{
                callOnComplete(getCurrentDigitsWithChanges(index , char));
            }
        }
    };

    const handleKeyPress = (
        index : number , 
        e: NativeSyntheticEvent<TextInputKeyPressEventData>
    ) =>{

        if(e.nativeEvent.key !== 'Backspace') return;

        if(otp[index] !== ''){
            setOtp((prev) =>{
                const next = [...prev];
                next[index] = '';
                return next;
            });
            return;
        }

        if(index > 0){
            setOtp((prev) =>{
                const next = [...prev];
                next[index - 1] = '';
                return next;
            });

            focusInput(index -1);
        }
    };

    const getCurrentDigits = () => otp;
    const getCurrentDigitsWithChanges = (index : number , char : string) =>{
        const copy = [...otp];
        copy[index] = char;
        return copy;
    }
   


    return (
        <View className='min-h-full w-full relative'>
            <View className='m-auto gap-5'>
                <Text className='mx-auto text-2xl font-semibold'>Enter Your Pin</Text>
                <View className='flex flex-row gap-4'>
                  

                    {
                        Array.from({length}).map((_ , i) =>(
                            <TextInput 
                             className='border border-black/10 shadow-sm size-14 rounded-[4px] text-center text-lg'
                            key={i}
                            ref={(ref) =>{inputs.current[i] = ref}}
                            value={otp[i]}
                            onChangeText={(t)=> handleChangeText(i , t)}
                            onKeyPress={(e) => handleKeyPress(i  , e)}
                            keyboardType='number-pad'
                            returnKeyType={i === length - 1 ? 'done' : 'next'}
                            maxLength={1}
                            autoFocus={autoFocus && i === 0}
                            textContentType={'oneTimeCode'}
                            />
                        ))
                    }
                    {
                        otp.every((d) => d != '')  && <Pressable 
                        className='size-14 flex items-center justify-center border border-black/10 rounded-[4px] bg-black' 
                        onPress={() => {
                            setSend(true);
                            setTimeout(() => setSend(false), 3000);
                        }}
                    >
                        <Text className='text-white'>Send</Text>
                    </Pressable>
                    }
                    
                </View>
            </View>
            {send && (
                <View className='absolute inset-0 w-full h-full bg-white z-20'>
                    <View className='bg-green-200 border border-green-200 shadow-sm m-auto size-24 rounded-full flex items-center justify-center '>
                        <Entypo name='check' size={25} color='black' />
                    </View>
                </View>
            )}
        </View>
    );
};

export const AutoPin = ({ length = 4, onComplete }: Omit<OTPInputProps, 'autoFocus'>) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const inputs = useRef<Array<TextInput | null>>(Array(length).fill(null));

    useEffect(()=>{
        setOtp((prev)=>{
            const next = Array(length).fill('');
            for(let i = 0 ; i < Math.min(prev.length, length) ; i++) next[i] = prev[i];
            return next;
        });
        inputs.current = Array(length).fill(null);
    }, [length]);

    const focusInput = (index : number) =>{
        const ref = inputs.current[index];
        ref?.focus();
    }

    const callOnComplete = (vals : string[])=>{
        const code = vals.join("");
        if(code.length === length && !vals.includes("")) {
            setShowSuccess(true);
            onComplete?.(code);
        }
    }

    const handleChangeText = (index : number , text : string)=>{
        if(text.length > 1){
            const chars = text.split("").slice(0 , length - index);
            setOtp((prev)=> {
                const next = [...prev];
                for(let i = 0 ; i<chars.length ; i++) next[index + i] = chars[i];
                return next;
            });

            const nextFocusIndex = Math.min(length  - 1 , index  + text.length -1);

            setTimeout(()=> focusInput(nextFocusIndex) , 0);
            setTimeout(()=> {
                const updatedOtp = [...otp];
                for(let i = 0 ; i<chars.length ; i++) updatedOtp[index + i] = chars[i];
                callOnComplete(updatedOtp);
            } , 0);
            return;
        }

        const char = text === '' ? '' : text[0];
        setOtp((prev)=>{
            const next = [...prev];
            next[index] = char;
            return next;
        });

        if(char !== ''){
            if(index < length - 1) focusInput(index + 1);
            else {
                const copy = [...otp];
                copy[index] = char;
                callOnComplete(copy);
            }
        }
    };

    const handleKeyPress = (
        index : number , 
        e: NativeSyntheticEvent<TextInputKeyPressEventData>
    ) =>{
        if(e.nativeEvent.key !== 'Backspace') return;

        if(otp[index] !== ''){
            setOtp((prev) =>{
                const next = [...prev];
                next[index] = '';
                return next;
            });
            setShowSuccess(false);
            return;
        }

        if(index > 0){
            setOtp((prev) =>{
                const next = [...prev];
                next[index - 1] = '';
                return next;
            });
            setShowSuccess(false);
            focusInput(index -1);
        }
    };

    return (
        <View className='min-h-full w-full relative'>
            <View className='m-auto gap-5'>
                <Text className='mx-auto text-2xl font-semibold'>Enter Your Pin</Text>
                <View className='flex flex-row gap-4'>
                    {
                        Array.from({length}).map((_ , i) =>(
                            <TextInput 
                             className='border border-black/10 shadow-sm size-14 rounded-[4px] text-center text-lg'
                            key={i}
                            ref={(ref) =>{inputs.current[i] = ref}}
                            value={otp[i]}
                            onChangeText={(t)=> handleChangeText(i , t)}
                            onKeyPress={(e) => handleKeyPress(i  , e)}
                            keyboardType='number-pad'
                            returnKeyType={i === length - 1 ? 'done' : 'next'}
                            maxLength={1}
                            autoFocus={i === 0}
                            textContentType={'oneTimeCode'}
                            />
                        ))
                    }
                </View>
            </View>
            {showSuccess && (
                <View className='absolute inset-0 w-full h-full bg-white z-20'>
                    <View className=' shadow-sm m-auto size-24 rounded-full flex items-center justify-center '>
                        <Entypo name='check' size={25} color='black' />
                    </View>
                </View>
            )}
        </View>
    );
} 