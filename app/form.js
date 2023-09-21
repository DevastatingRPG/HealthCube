import React, { useState } from 'react';
import FormInt from '../components/formint';

const Form = () => {
  const questions = [
    { question: 'What is your Name?', type: 'text' },
    { question: 'Do you like ice cream?', type: 'yesno' },
    { question: 'Do you like ice cream?', type: 'symptom' },
    // { question: 'Are you ?', type: 'multisel' }
  ];

  const [answers, setAnswers] = useState(questions.map(q => ({
    question: q.question,
    answer: ''
  })));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const updateValue = (answer) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentIndex].answer = answer;
      return newAnswers;
    });
  }

  const handleNext = (answer) => {
    console.log(answers)
    if (currentIndex < questions.length - 1) {     
      setCurrentIndex(currentIndex + 1);
      setProgress((currentIndex + 1) / questions.length);
    }
  };

  const handleBack = (answer) => {
    console.log(answers)
    if (currentIndex > 0) {      
      setCurrentIndex(currentIndex - 1);
      setProgress((currentIndex - 1) / questions.length);

    }
  };

  return (
    <FormInt
      question={questions[currentIndex].question}
      type={questions[currentIndex].type}
      progress={progress}
      onNext={handleNext}
      onBack={handleBack}
      onChange={updateValue}
    />
  );
};

export default Form;