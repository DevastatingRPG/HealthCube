import React, { useState } from 'react';
import FormInt from '../components/formint';

const Form = () => {
  const questions = [
    { question: 'What is your Name?', type: 'text' },
    { question: 'Do you like ice cream?', type: 'yesno' },
    { question: '1?', type: 'symptom' },
    { question: '2?', type: 'symptom' },
    { question: '3?', type: 'symptom' },
    { question: '4?', type: 'symptom' },
    { question: 'Are you ?', type: 'multisel', options: ['Married', 'Divorced', 'Single'] }
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
      try {
        newAnswers[currentIndex].answer = answer.join(', ');
      }
      catch (TypeError) {
        newAnswers[currentIndex].answer = answer
      }
      return newAnswers;
    });
  }

  const handleNext = () => {
    // console.log(answers)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress((currentIndex + 1) / questions.length);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress((currentIndex - 1) / questions.length);
    }
  };

  return (
    <FormInt
      question={questions[currentIndex].question}
      type={questions[currentIndex].type}
      options={questions[currentIndex].options}
      ans={answers[currentIndex].answer}
      progress={progress}
      onNext={handleNext}
      onBack={handleBack}
      onChange={updateValue}
    />
  );
};

export default Form;