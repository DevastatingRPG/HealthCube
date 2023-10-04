import RNFS from 'react-native-fs';
import { transformAsync } from '@babel/core';

const filePath = 'assets/AdultNewPatientIntake.txt';

const readFileAndProcess = async () => {
  try {
    const contents = await RNFS.readFile(filePath, 'utf8');
    return parseForm(contents);
  } catch (error) {
    console.log('Error reading file:', error);
  }
};

async function myFunction() {
  const options = {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel'],
  };
  const { code } = await transformAsync(readFileAndProcess.toString(), options);
  return code;
}

  function parseForm(text) {
    const lines = text.split('\n').filter(line => line.trim() !== ''); // Split by new lines and remove empty lines
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
          questions.push({question: questionPart, type: 'symptom'})
        } 
        else {
            questions.push({ question: questionPart, type: 'text' });  // Catch-all case
        }
    }

    return questions;
}

export default readFileAndProcess;
  
// function readFileAndProcess() {
//   return RNFS.readFile(filePath, 'utf8')
//     .then(contents => {
//       return parseForm(contents);
//     })
//     .catch(error => {
//       console.log('Error reading file:', error);
//     });
// }


