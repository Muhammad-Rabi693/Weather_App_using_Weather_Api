import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import logo from '../assets/weather-icon.webp'

const index = () => {
    const [longitude,setlongitude]=useState()
    const [latitude,setlatitude]=useState()
    const [city,setcity]=useState()
    
    const handlepress=()=>{
        router.push({
            pathname:"./screen",
            params: {city:city,latitude:latitude,longitude:longitude}
        })
    }
  return (
    <View className="flex-1 items-center justify-center">
        <Image source={logo} className="w-[60%] h-[30%]"/>
        <View className="mt-3 w-full items-center">
        <View className="bg-slate-200 border-2 w-[80%] py-1">
          <TextInput placeholder="Enter Latitude" onChangeText={(e)=>setlatitude(e)}></TextInput>
        </View>
      </View>
      <View className="mt-3 w-full items-center">
        <View className="bg-slate-200 border-2 w-[80%] py-1">
          <TextInput placeholder="Enter Longitude" onChangeText={(e)=>setlongitude(e)}></TextInput>
        </View>
      </View>
      <Text className="text-2xl font-bold mt-4 mb-4">OR</Text>
      <View className="mt-3 w-full items-center">
        <View className="bg-slate-200 border-2 w-[80%] py-1">
          <TextInput className="w-full" placeholder="Enter city name" onChangeText={(e)=>setcity(e)}></TextInput>
        </View>
      </View>
      <TouchableOpacity className="bg-slate-200 p-4 mt-4 rounded-lg w-[50%] border-2" onPress={handlepress}><Text className="text-xl font-bold text-center">Enter</Text></TouchableOpacity>
    </View>
  );
};

export default index;
