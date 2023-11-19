import React, { useState, useEffect } from 'react';
import FormInt from '../components/formint';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FetchSprites } from '../utilities/fetching';

const Form = () => {
  const questions = [
    { question: 'What is your Name?', type: 'text' },
    { question: 'Do you like ice cream?', type: 'yesno' },
    { question: 'Do you like ice cream?', type: 'symptom' },
    { question: 'Are you ?', type: 'multisel', options: ['Married', 'Divorced', 'Single'] }
  ];

  const [answers, setAnswers] = useState(questions.map(q => ({
    question: q.question,
    answer: ''
  })));

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
      tellAns(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress((currentIndex - 1) / questions.length);
      tellAns(currentIndex - 1);
    }
    else {
      setCurrentIndex(currentIndex)
      tellAns(currentIndex)
    }
  };

  const sprites = FetchSprites('devastating')

  return (
    <SafeAreaProvider>
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
        sprites={sprites}
      />
    </SafeAreaProvider>

  );
};

export default Form;