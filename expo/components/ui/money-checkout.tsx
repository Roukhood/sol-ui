import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type MoneyProps = {
  money?: number;
  nameOfReceiver: string;
  imageSrc?: string;
};
export default ({
  money = 500,
  nameOfReceiver,
  imageSrc = "https://plus.unsplash.com/premium_photo-1723568425978-81ef0ab51252?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: MoneyProps) => {
  const [transactionProcess, SetTransactionProcess] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, { dy }) => {
        if (dy > 0) {
          animatedValue.setValue(dy);
        }
      },
      onPanResponderRelease: (evt, { dy, vy }) => {
        if (dy > 80 || vy > 0.5) {
          setIsVisible(false);
          Animated.timing(animatedValue, {
            toValue: 500,
            duration: 300,
            useNativeDriver: true,
          }).start();

          setTimeout(() => {
            setIsVisible(true);
          }, 1000);
        } else {
          Animated.spring(animatedValue, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  if (!isVisible && !transactionProcess) {
    return <View className="w-full h-full" />;
  }

  return (
    <View className=" w-full h-full ">
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateY: animatedValue }],
        }}
        className="rounded-t-[30px]  border border-black/10 h-fit py-5 w-[350px] bg-white absolute bottom-0 mx-1.5 "
      >
        <View className="h-0.5 w-10 bg-black mx-auto mb-1 rounded-md" />
        {/* top view */}
        <View className="flex flex-row justify-around items-center">
          <View>
            <Text className="font-semibold text-[20px]">Send Money</Text>
            <Text className="text-neutral-400">
              Add or search user to send money
            </Text>
          </View>
          <Pressable
            onPress={() => {
              setIsVisible(false);
              setTimeout(() => {
                setIsVisible(true);
              }, 1000);
            }}
            className="size-10 border border-blue-400/20 rounded-md bg-blue-500/20"
          >
            <Text className="text-2xl font-bold text-center m-auto">×</Text>
          </Pressable>
        </View>
        {/* top view end */}
        {/* profile view */}
        <View>
          <View className="flex items-center mt-10 mb-10 ">
            <View className="size-14 bg-red-200 rounded-lg my-2 overflow-hidden">
              <Image source={{ uri: imageSrc }} className="h-full w-full" />
            </View>
            <Text className="text-neutral-400 text-sm">SENDING TO</Text>
            <Text className="font-normal text-[20px]">{nameOfReceiver}</Text>
            <Text className="font-semibold text-[22px] mt-2 ">
              {`$ ${money}`}
            </Text>
          </View>
        </View>
        {/* profile view end */}
        {/* bottom view */}
        <View className="mx-10">
          <View className="flex flex-row justify-between my-0.5">
            <Text className="flex flex-row items-center">
              {" "}
              <Text>
                <FontAwesome name="money" />{" "}
              </Text>
              Avaible
            </Text>
            <Text className="text-blue-800 font-semibold">$2666</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="flex flex-row items-center">
              {" "}
              <Text>
                <MaterialIcons name="toll" />{" "}
              </Text>
              Forax tax
            </Text>
            <Text className="text-blue-800 font-semibold">$2</Text>
          </View>

          <View className="my-2">
            <Pressable
              className="py-4 border border-blue-400/20 rounded-md bg-blue-500/20 active:scale-105"
              onPress={() => {
                SetTransactionProcess(true);
                setTimeout(() => {
                  SetTransactionProcess(false);
                }, 2000);
              }}
            >
              <Text className="mx-2 text-blue-800 font-semibold text-center text-lg">
                Pay
              </Text>
            </Pressable>
            <Text className="text-center text-sm mt-2">
              payment powered by{" "}
              <Text className="text-blue-800 font-semibold">solaPay</Text>
            </Text>
          </View>
        </View>
        {/* bottom view end */}
      </Animated.View>
      {transactionProcess && <TransactionView />}
    </View>
  );
};

export const TransactionSuccess = () => {
  return (
    <View className=" m-5 h-full">
      <View className="h-40 w-full rounded-md ">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          className="h-full w-full rounded-md"
        />
      </View>
      <View className="mx-auto mt-5 ">
        <Text className="font-semibold text-[22px]">
          Transaction Successfull
        </Text>
        <View>
          <Text className="text-neutral-400 text-center">
            Money recieved in 04 seconds
          </Text>
        </View>
      </View>
      <Pressable className="py-4 border border-black/10 rounded-md bg-blue-800/20 my-auto mx-4 ">
        <Text className="mx-2 text-blue-800 font-semibold text-center text-lg">
          Back To Home
        </Text>
      </Pressable>
    </View>
  );
};
export const TransactionFailed = () => {
  return (
    <View className="   m-5 h-full">
      <View className="size-28 rounded-full mx-auto my-5 bg-red-100 border border-red-200 flex items-center justify-center">
        <AntDesign name="warning" size={25} />
      </View>
      <View className="mx-auto mt-5 ">
        <Text className="font-semibold text-[22px]">Transaction Failed</Text>
      </View>
      <Pressable className="py-4 border border-black/10 rounded-md bg-red-100 my-auto mx-4 ">
        <Text className="mx-2 text-red-500 font-semibold text-center text-lg">
          retry
        </Text>
      </Pressable>
    </View>
  );
};

export const TransactionView = () => {
  return (
    <View className="absolute bottom-0  h-[450px] rounded rounded-t-[30px]  border border-black/10 bg-white  w-[350px] mx-1.5">
      <View className="h-0.5 w-10 bg-black mx-auto mt-5 rounded-md" />
      {true ? <TransactionSuccess /> : <TransactionFailed />}
    </View>
  );
};
