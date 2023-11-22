

export const ParseQuestions = (content) => {
    const questions = [];

    for (let line of content.slice(1)) {
        const [questionPart, answerPart] = line.split(':').map(part => part.trim());
        console.log(`questionPart: ${questionPart}, answerPart: ${answerPart}`);

        if (answerPart === 'blank') {
            questions.push({ question: questionPart, type: 'text' });
        }
        else if (answerPart && answerPart.startsWith('multi select')) {
            const options = answerPart.replace('multi select,', '').split(',').map(opt => opt.trim());
            questions.push({ question: questionPart, type: 'multisel', options: options });
        }
        else if (answerPart && answerPart.includes(',')) {
            if (answerPart === 'Yes, No') {
                questions.push({ question: questionPart, type: 'yesno' });
            }
            else {
                const options = answerPart.split(',').map(opt => opt.trim());
                questions.push({ question: questionPart, type: 'sel', options: options });
            }
        }
        else if (answerPart && answerPart.includes('Y/P')) {
            questions.push({ question: questionPart, type: 'symptom' });
        }
        else {
            questions.push({ question: questionPart, type: 'text' });  // Catch-all case
        }
    }

    return questions;
}

export const JoinAnswers = (content) => {

    let answers = '';
    for (let answer of content){
        answers += answer['question'];
        answers += ': ';
        answers += answer['answer'];
        answers += '\n';
    }
    return answers
}
