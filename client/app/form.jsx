import React, { useState,useEffect } from 'react';
import { Text,View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';




export default function Form() {
  const data = useLocalSearchParams();
  const [answers, setAnswers] = useState(questions.map(q => ({
    question: q.question,
    answer: ''
  })));
  console.log(data);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState([]);

  const updateAnswers = (answer) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      try {
        newAnswers[currentIndex].answer = answer.join(', ');
      }
      catch (TypeError) {
        newAnswers[currentIndex].answer = answer
      }
      return newAnswers;
    });
  }

  const tellAns = (ind) => {
    let exval;
    if (questions[ind].type == 'text')
      exval = [answers[ind].answer]
    else
      exval = answers[ind].answer.split(', ')
    setInputValue(exval)
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress((currentIndex + 1) / questions.length);
      tellAns(currentIndex+1);   
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress((currentIndex - 1) / questions.length);
      tellAns(currentIndex-1);
    }
    else{
      setCurrentIndex(currentIndex)
      tellAns(currentIndex)
    }
  };


  return (    
    <FormInt
      question={questions[currentIndex].question}
      type={questions[currentIndex].type}
      options={questions[currentIndex].options}
      progress={progress}
      onNext={handleNext}
      onBack={handleBack}
      updateAnswers={updateAnswers}
      inputValue={questions[currentIndex].type == "text" && Array.isArray(inputValue) ? inputValue[0] : inputValue}
      setInputValue={setInputValue}
    />
  );
};

