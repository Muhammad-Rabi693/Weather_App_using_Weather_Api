import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const screen = () => {
  const { city, latitude, longitude } = useLocalSearchParams();
  const fetchdata = async () => {
    if (!longitude && !latitude) {
      const data = await (
        await fetch(
          `http://api.weatherapi.com/v1/current.json?key=2268c7e2620145c2beb44522251501&q=${city}&aqi=no`
        )
      ).json();
      return data;
    } else {
      const data = await (
        await fetch(
          `http://api.weatherapi.com/v1/current.json?key=2268c7e2620145c2beb44522251501&q=${latitude},${longitude}&aqi=no`
        )
      ).json();
      return data;
    }
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["Data"],
    queryFn: fetchdata,
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <View className="flex-1 items-center mt-7">
      <MaterialCommunityIcons name="weather-fog" size={74} color="skyblue" />
      <View>
        <Text className="text-xl mb-2 font-semibold text-center">
          Latitude: {data.location.lat}
        </Text>
        <Text className="text-xl mb-2 font-semibold text-center">
          Longitude: {data.location.lon}
        </Text>
        <Text className="text-xl font-bold mt-4 text-center">
          {data.location.name},{data.location.region},{data.location.country}
        </Text>
        <Text className="text-8xl font-bold mt-7 text-center">
          {data.current.temp_c}^C
        </Text>
        <Text className="text-xl font-bold  text-center">
          Feel Like:{data.current.temp_c}^C
        </Text>
        <View className="mt-[15%]">
          <Text className="text-xl font-bold mt-7 text-center">
            Humidity: {data.current.humidity}
          </Text>
          <Text className="text-xl font-bold mt-7 text-center">
            wind speed: {data.current.wind_kph} km/h
          </Text>
          <Text className="text-xl font-bold mt-7 text-center">
            cloud: {data.current.cloud} %
          </Text>
        </View>
      </View>
      <TouchableOpacity className="bg-black p-4 mt-4 rounded-lg w-[50%]" onPress={()=>router.push("./screen2")}>
        <Text className="text-xl font-bold text-center text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default screen;
