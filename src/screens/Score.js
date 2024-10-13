import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import tw from "twrnc";
import {useRoute} from "@react-navigation/native";

const Score = ({navigation}) => {
const route = useRoute ()

const{score} = route.params;

console.log(score);

  return (
    <View style={tw.style('flex-1' , {backgroundColor:'#e2e1dc' })}>
    <View style={tw`flex-1 `}>
  <Image source={require("../../assets/images/Score.png")} 
      style={tw.style(tw`h-3.25/6 `,{ aspectRatio: 1 })}
      />

      <Text style={tw`text-center`}> Congratulations!! You scored {score} points </Text>

      <Pressable style={tw.style(` item-center bg-orange-500 p-2  mt-4`,{
        width:'30%',
        alignSelf: 'center',
        borderRadius: 8})} onPress={() => navigation.navigate("Splash")}> 
      <Text style={tw`text-center text-white font-medium`}> Play again </Text>
      </Pressable>

    </View>
    </View>
  )
}

export default Score;

const styles = StyleSheet.create({});