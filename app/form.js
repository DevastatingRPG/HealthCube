import React, { useState, useEffect } from 'react';
import FormInt from '../components/formint';
import readFileAndProcess from './questions';


const Form = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    readFileAndProcess().then(data => {
        setQuestions(data);
        setAnswers(data.map(q => ({
            question: q.question,
            answer: ''
        })));
    });
}, []);
//   readFileAndProcess().then(questions => {
//     console.log(questions);
// });

// const [answers, setAnswers] = useState(questions.map(q => ({
//   question: q.question,
//   answer: ''
// })));
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