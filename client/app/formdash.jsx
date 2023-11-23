

import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonG from '../components/dash';
import { router } from 'expo-router';
import { Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import { FetchForms } from '../utilities/fetching';

const FormDashboard = () => {
  const [formName, setFormName] = useState('');
  const [formData, setFormData] = useState([]);

  const data = FetchForms();
  const [names, setNames] = useState([]);

  useEffect(() => {
    if (data) {
      const namesFromFirstLine = data.map(form => {
        const firstLine = form[1][0];
        return firstLine;
      });

      setNames(namesFromFirstLine);
    }
  }, [data]);

  const handlePress = async (index) => {
    try {
      const pressedFormName = names[index];
      const pressedFormData = data[index][1];

      setFormName(pressedFormName);
      setFormData(pressedFormData);
      router.push({
        pathname: `/form`,
        params: pressedFormData
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 60, color: 'blue', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Forms</Text>

          <ButtonG
            buttons={names}
            buttonColors={['red']}
            direction='column'
            onClick={handlePress} // Use handlePress as the onClick handler
          />
        </View>
      </ScrollView>

    </SafeAreaProvider>
  );
};

export default FormDashboard;








