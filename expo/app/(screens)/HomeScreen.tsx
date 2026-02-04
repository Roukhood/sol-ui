import React from "react";
import { View, Text, Animated } from "react-native";
// import Menu from "../components/ui/menu";
// import { ErrorBadge, InfoBadge, WarningBadge } from "../components/ui/badge";
// import { PopCard } from "../components/ui/pop-card";
// import { Button } from "../components/ui/button";
// import { Filter } from "../components/ui/filter";
// import { ProfileCard } from "../components/ui/profile-card";
// import { Login } from "../components/ui/login";
// import MoneyCheckout from "../components/ui/money-checkout";
// import ItemCart from "../components/ui/item-cart";
// import { Card, CardContent, CardHeader } from "../components/ui/card";
// import { CalendarDateRangePick, Calendars } from "../components/ui/calendar";
// import { BasicCalendar } from "../components/calendars/calendar1";
// import { CalendarList } from "../components/calendars/calendar2";
import { CalendarDateRangePick } from "../../components/ui/calendar";
import { BasicCalendar } from "../../components/calendars/calendar1";
// import { SimpleCard } from "../components/cards/card1";
// import { CardWithImage } from "../components/cards/card2";
// import { FeatureCard } from "../components/cards/card3";
// import { ArtistCard } from "../components/cards/card4";
// import { DefaultBadge } from "../components/badges/badge1";
// import { SpinningBadge } from "../components/badges/badge2";
// import { CountBadge } from "../components/badges/badge3";
// import { SimpleDropdown } from "../components/dropdowns/dropdown1";
// import {SimpleButton}  from '../components/buttons/button1';
// import { ButtonWithLogo } from '../components/buttons/button2';
// import { ButtonWithIcon } from '../components/buttons/button3';
// import { ComboButton } from '../components/buttons/button4';
// import { GradientButton, ShinyButton } from '../components/buttons/button5';

const ItemData = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Dummy data for ItemCart component
const dummyData = {
  price: 129.99,
  itemName: "Premium Cotton T-Shirt",
  sizeOptions: ["Small", "Medium", "Large", "X-Large"],
  colorOptions: ["Black", "White", "Navy", "Green", "Red"],
  compositionOptions: [
    "100% Cotton",
    "Cotton Blend",
    "Silk Bamboo",
    "Organic Cotton",
  ],
  imageData: ItemData,
};

const HomeScreen = () => {
  return (
    <View className="flex items-center justify-center min-h-screen">
      {/* <Filter filterButtons={[{label: 'abc'} , {label: 'abc'}]} addFilters={[{label: "abc"} , {label:"abc"} , {label: "abc"} , {label:"abc"}]}/> */}

      {/* <ProfileCard src="../../src/assests/imagr7.jpg" subTitle='@sol-auth' title='Satish' /> */}

      {/* <MoneyCheckout money={600} nameOfReceiver='Satish Solera'/> */}
      {/* <ItemCart 
                price={dummyData.price}
                itemName={dummyData.itemName}
                sizeOptions={dummyData.sizeOptions}
                colorOptions={dummyData.colorOptions}
                compositionOptions={dummyData.compositionOptions}
                imageData={dummyData.imageData}
            /> */}
      {/* <Login fields={[{label: "abx" , name: "abx" , placeholder:"placeholderjjaj"}]} mode='signup' socialProviders={[{label:"abc"}]}/> */}

      {/* <View className='flex gap-5'>
    <SimpleButton/>
    <ButtonWithLogo/>
    <ButtonWithIcon/>
    <ComboButton/>
    <ShinyButton/>
    </View> */}
{/* 
      <Card>
        <CardHeader>
          <Text>hi</Text>
        </CardHeader>
        <CardContent>
          <Text>hi</Text>
        </CardContent>
      </Card> */}
{/* <SimpleCard/> */}
{/* <CardWithImage/> */}
{/* <FeatureCard/> */}
{/* <ArtistCard/> */}
{/* 
<View className="gap-5">
  <DefaultBadge/>
<SpinningBadge/>
<CountBadge/>
</View> */}

{/* <SimpleDropdown/> */}
<View >

<BasicCalendar/>
{/* <CalendarList/> */}
{/* <CalendarDateRangePick/> */}

</View>
    </View>
  );
};

export default HomeScreen;
