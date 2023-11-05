
import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import Hello from '../components/storebut';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const App = () => {
  const colors = {
    blue: 'rgba(0, 123, 255, 0.6)',
    green: 'rgba(40, 167, 69, 0.6)',
    red: 'rgba(220, 53, 69, 0.6)',
    yellow: 'rgba(255, 193, 7, 0.6)',
    orange: 'rgba(253, 126, 20, 0.6)',
    purple: 'rgba(111, 66, 193, 0.6)',
    black: 'rgba(52, 58, 64, 0.6)'
};
  return (
    <ScrollView>
        <SafeAreaProvider>
            <View>
                {/* <Hello/> */}
                return <AppNavigator />;
            </View>
        </SafeAreaProvider>
    </ScrollView>
    
  );
  
};

export default App;





