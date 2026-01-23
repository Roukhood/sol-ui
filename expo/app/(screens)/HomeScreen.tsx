import React from 'react';
import { View, Text, Animated } from 'react-native';
import Menu from '../components/ui/menu';
import { ErrorBadge, InfoBadge, WarningBadge } from '../components/ui/badge';
import { PopCard } from '../components/ui/pop-card';
import { Button } from '../components/ui/button';
import { Filter } from '../components/ui/filter';
import { ProfileCard } from '../components/ui/profile-card';
import { Login } from '../components/ui/login';
import MoneyCheckout from '../components/ui/money-checkout';


const HomeScreen = () => {


  return (

    <View className='flex items-center justify-center min-h-screen'>


      {/* <Filter filterButtons={[{label: 'abc'} , {label: 'abc'}]} addFilters={[{label: "abc"} , {label:"abc"} , {label: "abc"} , {label:"abc"}]}/> */}

      {/* <ProfileCard src="../../src/assests/imagr7.jpg" subTitle='@sol-auth' title='Satish' /> */}

      <MoneyCheckout money={600} nameOfReceiver='Satish Solera'/>

      {/* <Login fields={[{label: "abx" , name: "abx" , placeholder:"placeholderjjaj"}]} mode='signup' socialProviders={[{label:"abc"}]}/> */}
    </View>
  )
}

export default HomeScreen;