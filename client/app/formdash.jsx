import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Text } from '@rneui/themed';
import { ScrollView } from 'react-native';
import { FetchForms, SaveForms } from '../utilities/fetching';



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
