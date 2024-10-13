import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import tw from "twrnc";

const Splash=({ navigation }) => {
  return (
    <View style={tw`flex-1  items-center`}>
      <Image source={require("../../assets/images/splash.jpg")} 
      style={tw.style(tw`h-3.3/6`,{ aspectRatio: 1 })}
      />

      <Text style={tw`text-white text-3xl text-center mb-10 font-bold`}> Instructions  </Text>
     
      <View style={tw`bg-orange-600 p-2 rounded h-30 w-80 items-center justify-center`}> 
        <Text style={tw`text-white text-lg text-center`}> 
          Each Quiz has 4 options
        </Text>
        <Text style={tw`text-white text-lg text-center`}> 
          Progress will be shown at the top
        </Text>
        <Text style={tw`text-white text-lg text-center`}> 
          Score would be shown at the end 
        </Text>
      </View>

      <Pressable style={tw`bg-orange-600 mt-10 px-6 py-1 rounded` }
      onPress={()=>navigation.navigate("Question") }> 
        <Text style={tw`text-white text-lg`}> Start FLCE Quiz</Text>
      </Pressable>
   
  </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});