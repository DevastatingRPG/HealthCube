import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Text } from '@rneui/themed';
import { ScrollView } from 'react-native';
const fetch = global.fetch;



const App = () => {

  const FetchForms = () => {
    const baseUrl = 'http://192.168.1.10:5000'
    const [forms, setForms] = useState([]);
    useEffect(() => { // useEffect makes block run once the page is rendered.
      // Using async/await syntax
      async function fetchData() {
        try {
          formnames = await fetch(baseUrl + '?page=forms&func=list'); // Send the GET request
          formnames = await formnames.json(); // Convert the response to JSON
          var data = []
          for (index in formnames) {
            url = baseUrl + '/uforms/' + formnames[index]
            formdata = await fetch(url);  // Send GET request to read text file
            formdata = await formdata.text(); // Convert response to Text format
            const questions = formdata.split("\r");   // Split it by each line
            data.push([formnames[index], questions])
          }
          setForms(data); // Update the state variable with the data

        } catch (error) {
          console.error(error); // Handle any errors
        }
      }
      fetchData(); // Call the async function
    }, []);
    return forms
  }

  const SaveForms = (props) => {
    const { content, id, file } = props;
    let data = {
      content: content,
      id: id,
      file: file
    }
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const baseUrl = 'http://192.168.1.10:5000'

    async function postData() {
      try {
        let response = await fetch(baseUrl + '?page=forms&func=save', requestOptions);
        return response;
        // Send the POST request      
      } catch (error) {
        console.error(error); // Handle any errors
      }
    }
    return postData(); // Call the async function 
  }

  data = FetchForms();
  const [names, setNames] = useState([]);
  useEffect(() => {
    if (data)
      setNames(data.map(form => (form[1][0])))
  }, [data])

  // console.log(test)
  const questions = [];

    for (let line of test.slice(1)) {
        const [questionPart, answerPart] = line.split(':').map(part => part.trim());
        // console.log(line)

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
    for (let line of questions)
      console.log(line)

  return (
    <SafeAreaProvider>
      <ScrollView>
        <Text></Text>
      </ScrollView>

    </SafeAreaProvider>
  );
}
export default App
