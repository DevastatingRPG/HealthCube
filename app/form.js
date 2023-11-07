import React, { useState } from 'react';
import FormInt from '../components/formint';
import parseForm from './formgenerator';
// import { array } from 'yargs';
// import { object } from 'prop-types';
console.log("I am in form");
const FormProcessor = () => {
  useEffect(() => {
    // Replace 'file-to-fetch.txt' with the name of the file you want to fetch
    const fileName = 'AdultNewPatientIntake.txt';
    const text = "Occupation: blank Employer: blank Employment Status: Full-time, Part-time, Student, Retired Insurance Plan: blank Are you: Married, Divorced, Single, Significant partnership, Widowed Live with: multi select, spouse, parents, children, partner, friends, pets, relatives, alone Emergency Contact Person: blank Relation: blank Address: blank Home Phone: blank Cell Phone: blank How did you hear about us? (please be specific; include name of website, friend, etc. if applicable): blank Would you like to talk to the doctor about any of the following therapies?: multi select, Acupuncture, Nutrition/Weight Management, IV nutrition, Homeopathy, Myotherapy/Bodywork, Herbal Medicine What are your most important health concerns/symptoms? Please begin with the MOST IMPORTANT to address today.: blank"

    // Call the function to fetch and process the file
     readFileAndProcess(fileName)
      parseForm(text)
      .then(processedData => {
        // Handle the processed data here
        console.log('Processed Data:', processedData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
}

const Form = () => {
  FormProcessor();
  const [questions, setAnswers] = useState(processedData);

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
    else {
      setCurrentIndex(currentIndex)
      tellAns(currentIndex)
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

export default Form;