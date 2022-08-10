import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <View className="pt-16 z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">
                Estimated arrival time
              </Text>
              <Text className="text-4xl font-bold">40 - 45 Mins</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />

          <Text className="mt-3 text-gray-400">
            Your order at {restaurant.title} is being prepared!
          </Text>
        </View>
      </View>

      <MapView
        initialRegion={{
          latitude: 23.022505,
          longitude: 72.571365,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 23.022505,
            longitude: 72.571365,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          className="h-12 w-12 p-4 rounded-full ml-5"
          source={{
            uri: "https://links.papareact.com/fls",
          }}
        />

        <View className="flex-1">
          <Text className="text-lg font-bold">Haarvii</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </View>
    </View>
  );
};

export default DeliveryScreen;
