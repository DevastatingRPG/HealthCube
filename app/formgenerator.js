// import RNFS from 'react-native-fs';
// import { transformAsync } from '@babel/core';

// const serverUrl = 'http://localhost:3000'; // Replace with the actual URL of your external server

// const readFileAndProcess = async (fileName) => {
//   // Use the fileName to construct the URL for fetching the file from the server
//   const fileUrl = `${serverUrl}/get-form?file=${fileName}`;

//   try {
//     const contents = await fetch(fileUrl);
//     const text = await contents.text();
//     return parseForm(text);
//   } catch (error) {
//     console.log('Error reading file:', error);
//   }
// };

// async function myFunction() {
//   const options = {
//     presets: ['babel-preset-expo'],
//     plugins: ['expo-router/babel'],
//   };
//   const { code } = await transformAsync(readFileAndProcess.toString(), options);
//   return code;
// }


// function parseForm(text) {
//   const lines = text.split('\n').filter(line => line.trim() !== ''); // Split by new lines and remove empty lines
//   const questions = [];

//   for (let line of lines) {
//     const [questionPart, answerPart] = line.split(':').map(part => part.trim());

//     if (answerPart === 'blank') {
//       questions.push({ question: questionPart, type: 'text' });
//     } 
//     else if (answerPart.startsWith('multi select')) {
//       const options = answerPart.replace('multi select,', '').split(',').map(opt => opt.trim());
//       questions.push({ question: questionPart, type: 'multisel', options: options });
//     } 
//     else if (answerPart.includes(',')) {
//       if (answerPart === 'Yes, No') {
//         questions.push({ question: questionPart, type: 'yesno' });
//       } 
//       else {
//         const options = answerPart.split(',').map(opt => opt.trim());
//         questions.push({ question: questionPart, type: 'sel', options: options });
//       }
//     }
//     else if (answerPart.includes('Y/P')) {
//       questions.push({ question: questionPart, type: 'symptom' });
//     } 
//     else {
//       questions.push({ question: questionPart, type: 'text' });  // Catch-all case
//     }
//   }

//   return questions;
// }

// export default readFileAndProcess;

import React, { useState } from 'react';
import { Text } from '@rneui/themed';

function SplitTextToQuestions(text) {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const questions = [];

  for (let line of lines) {
    const [questionPart, answerPart] = line.split(':').map(part => part.trim());

    if (answerPart === 'blank') {
      questions.push({ question: questionPart, type: 'text' });
    } 
    else if (answerPart.startsWith('multi select')) {
      const options = answerPart.replace('multi select,', '').split(',').map(opt => opt.trim());
      questions.push({ question: questionPart, type: 'multisel', options: options });
    } 
    else if (answerPart.includes(',')) {
      if (answerPart === 'Yes, No') {
        questions.push({ question: questionPart, type: 'yesno' });
      } 
      else {
        const options = answerPart.split(',').map(opt => opt.trim());
        questions.push({ question: questionPart, type: 'sel', options: options });
      }
    }
    else if (answerPart.includes('Y/P')) {
      questions.push({ question: questionPart, type: 'symptom' });
    } 
    else {
      questions.push({ question: questionPart, type: 'text' });  // Catch-all case
    }
  }

  return questions;
}

const TextToQuestionsForm = () => {
  const [text, setText] = useState(`
  Occupation: blank
  Insurance Plan: blank
  Are you: Married, Divorced, Single
  How did you hear about us?: blank
  Dietary preferences/restrictions: blank
`);
  const [questions, setQuestions] = useState([]);
  
  const HandleTextChange = (event) => {
    setText(event.target.value);
  };

  const ProcessText = () => {
    const processedQuestions = SplitTextToQuestions(text);
    setQuestions(processedQuestions);
  };

  return (
    <div>
      <Text>Text to Questions Form</Text>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={HandleTextChange}
      />
      <br />
      <button onClick={ProcessText}>Process Text</button>
      
      {questions.length > 0 && (
        <div>
          <h3>Processed Questions</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} ({question.type})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TextToQuestionsForm;
