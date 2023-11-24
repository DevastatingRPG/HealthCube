import React, { useState, useEffect } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FetchSprites, SaveForms } from "../utilities/fetching";
import FormInt from "../components/formint";
import { JoinAnswers, ParseQuestions } from "../utilities/parser";
import { BackHandler, Alert } from "react-native";
import { generateWeightedRandomNumber } from "../utilities/rand";

export default function Form() {
  let data = useLocalSearchParams();
  
  nm = data[0];
  qs = JSON.parse(data[1]);
  const questions = ParseQuestions(qs); 
  const [answers, setAnswers] = useState(
    questions.map((q) => ({
      question: q.question,
      answer: "",
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState([]);
  const [sum, setSum] = useState(0);
  const [answered, setAnswered] = useState([]);

  const updateAnswers = (answer) => {
    if (!answered.includes(currentIndex) && 
    (answer != '' && answer != [] && answer !== null)){
      setSum(sum+generateWeightedRandomNumber());
      setAnswered([...answered, currentIndex]);
    }
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      try {
        newAnswers[currentIndex].answer = answer.join(", ");
      } catch (TypeError) {
        newAnswers[currentIndex].answer = answer;
      }
      return newAnswers;
    });
  };

  const tellAns = (ind) => {
    let exval;
    if (questions[ind].type == "text") exval = [answers[ind].answer];
    else exval = answers[ind].answer.split(", ");
    setInputValue(exval);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress((currentIndex + 1) / questions.length);
      tellAns(currentIndex + 1);
    } else {
      setShowSubmitPopup(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress((currentIndex - 1) / questions.length);
      tellAns(currentIndex - 1);
    } else {
      setShowExitPopup(true);
    }
  };

  const sprites = FetchSprites("devastating");

  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Always show the exit confirmation popup
        setShowExitPopup(true);
        return true; // Prevent default behavior (exit the app)
      }
    );

    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, []); // Empty dependency array means the effect runs once after the initial render

  const handleExitConfirm = () => {
    setShowExitPopup(false);
    setShowSubmitPopup(false);
    router.replace("/formdash");
  };

  const handleExitCancel = () => {
    setShowSubmitPopup(false);
    setShowExitPopup(false);
  };

  const handleSubmitConfirm = () => {
    setShowExitPopup(false);
    const answertext = JoinAnswers(answers);
    SaveForms({
      content: answertext,
      id: "devastating",
      file: nm,
    });
    router.replace("/formdash");
  };

  return (
    <SafeAreaProvider>
      {showExitPopup &&
        // Show the exit confirmation popup
        Alert.alert(
          "Exit Form",
          "Are you sure you want to leave the form? Your progress will be lost. Choose Submit if you want to save.",
          [
            {
              text: "No",
              onPress: handleExitCancel,
              style: "cancel",
            },
            { text: "Yes", onPress: handleExitConfirm },
            { text: "Submit", onPress: handleSubmitConfirm },
          ]
        )}

      {showSubmitPopup &&
        // Show the exit confirmation popup
        Alert.alert(
          "Submit Form",
          "Are you sure you want to Submit the form?.",
          [
            {
              text: "No",
              onPress: handleExitCancel,
              style: "cancel",
            },
            { text: "Yes", onPress: handleExitConfirm },
          ]
        )}
      <FormInt
        question={questions[currentIndex].question}
        type={questions[currentIndex].type}
        options={questions[currentIndex].options}
        progress={progress}
        onNext={handleNext}
        onBack={handleBack}
        updateAnswers={updateAnswers}
        inputValue={
          questions[currentIndex].type == "text" && Array.isArray(inputValue)
            ? inputValue[0]
            : inputValue
        }
        setInputValue={setInputValue}
        sprites={sprites}
      />
    </SafeAreaProvider>
  );
}
