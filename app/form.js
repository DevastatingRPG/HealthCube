import React, {useState} from 'react';
import FormInt from '../components/formint';

const Form = () => {
    const questions = [
      { question: 'What is your Name?', type: 'text' },
      { question: 'Do you like ice cream?', type: 'yesno' },
      { question: 'Do you like ice cream?', type: 'symptom' }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
  
    const handleNext = () => {
        
      // Only update the index and progress if there are more questions
        if (currentIndex < questions.length - 1) {
            const newIndex = currentIndex + 1;
            const newProgress = ((newIndex) / questions.length);
            setCurrentIndex(newIndex);
            setProgress(newProgress);
        }      
    };

    const handleBack = () => {
        // Only update the index and progress if there are more questions
        if (currentIndex > 0) {  
            const newIndex = currentIndex - 1;
            const newProgress = ((newIndex) / questions.length);
            
            setCurrentIndex(newIndex);
            setProgress(newProgress);      
          
        }      
    };
    
    return (
        
        <FormInt 
            question={questions[currentIndex].question} 
            type={questions[currentIndex].type} 
            progress={progress}
            onNext={handleNext}
            onBack={handleBack}
        />
    );
  };

export default Form;