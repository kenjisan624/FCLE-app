import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { reactQuestions } from '../config/question';
import tw from "twrnc";
import react from 'react';
import * as Progress from 'react-native-progress';



const Questions = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score,setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const[quizProgress, setQuizProgress] = useState(reactQuestions.length);
 

  const progress = (currentQuestionIndex + 1 )/ quizProgress ;

  //Handle next press 
  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1){
     // return;

     navigation.navigate("Score", {score: score});
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };


// Handle pressed option ! 
const handleOptionPress = (pressedOption) => {
  setSelectedOption(pressedOption);

const isAnswerCorrect = 
  reactQuestions[currentQuestionIndex].correctAnswer === pressedOption;

setIsCorrect(isAnswerCorrect)

  if(isAnswerCorrect){
    setScore((prevScore) => prevScore + 10);
}
};
  return (
    <View style={tw`mt-6 p-4`}> 
      <View style={tw`flex-row`}> 
        <View style={tw`flex-1`}> 
        <Progress.Bar 
        progress={progress} 
        width={null} 
        height={20} 
        color={"#E79919"} />


        </View>


      </View>



      <Text style={tw`text-2xl text-white mb-4 font-bold`}> 
        {reactQuestions[currentQuestionIndex].question}
      </Text>
      {reactQuestions[currentQuestionIndex].options.map((option) => (
        <Pressable 
        style={tw`border-2 border-orange-500 p-4 my-2 rounded-md mt-6 ${
        selectedOption === option 
        ? isCorrect 
          ? " bg-green-500 border-green-500" 
          : " bg-red-300 border-pink-500" 
        : "border-orange-500"
        }`} 
        onPress = {() => handleOptionPress(option)}
        disabled={!!selectedOption}
        > 
          <Text style={tw`text-lg text-white`}> {option}</Text>
        </Pressable> 
      ))} 
       <Pressable 
       style={tw`bg-orange-500 p-4 rounded-md mt-6`}
        onPress={handleNext}
         >
      <Text style={tw` text-white text-lg text-center font-bold `}> {currentQuestionIndex === reactQuestions.length - 1 
      ? "Finish"
      : "Next"} 
      </Text>
    </Pressable>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});