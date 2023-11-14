import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Text } from '@rneui/themed';
import { ScrollView } from 'react-native';
const fetch = global.fetch;

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
  const {content, id, file} = props;
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

const App = () => {
  data = FetchForms();
  const [names, setNames] = useState([]);
  useEffect(() => {
    if (data)
      setNames(data.map(form => (form[1][0])))
  }, [data])

  return (
    <SafeAreaProvider>
      <ScrollView>
      <Text></Text>
      </ScrollView>
      
    </SafeAreaProvider>
  );
}
export default App
