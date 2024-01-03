import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonG from '../components/dash';
import { router } from 'expo-router';
import { Text } from '@rneui/themed';
import { Divider } from '@rneui/themed';
import { ScrollView, View, StyleSheet } from 'react-native';
import { FetchForms } from '../utilities/fetching';

const FormDashboard = () => {
  const data = FetchForms();
  const [names, setNames] = useState([]);

  useEffect(() => {
    if (data) {
      const namesFromFirstLine = data.map(form => {
        const firstLine = form[1][0].split('\n')[0];
        return firstLine;
      });

      setNames(namesFromFirstLine);
    }
  }, [data]);

  const handlePress = async (index) => {

    try {
      const pressedFormData = data[index][1];

      router.replace({
        pathname: `/form`,
        params: [data[index][0], JSON.stringify(pressedFormData)]
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaProvider>
      <Text style={styles.question}>Forms</Text>
      <Divider color="#E4E4E4" width={5} />
      <ScrollView>
        <View style={{ flex: 2, margin: 10 }}>
          <ButtonG
            buttons={names}
            buttonColors={Array(names.length).fill('#C5D8D1')}
            direction='column'
            onClick={handlePress}
            title={'#3C4142'} // Use handlePress as the onClick handler
          />
        </View>
      </ScrollView>

    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  spriteContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 15,
  },
  slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      alignItems: 'center',
  },
  spriteImage: {
      width: 250,
      height: 250,
      resizeMode: "cover",
      borderRadius: 10,
  },
  flatListContainer: {
      paddingHorizontal: 16,
  },
  question: {
      fontWeight: 'bold',
      backgroundColor: '#12263A', 
      textAlign: 'center',
      paddingVertical: 12,
      fontSize: 60, 
      color: '#E4E4E4', 
      marginTop: 20
  },
});

export default FormDashboard;


