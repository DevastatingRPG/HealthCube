
import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import Shop from '../components/Shop';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Hello from '../components/show';



const App = () => {
  
  return (
    <ScrollView>
        <SafeAreaProvider>
            <View>
                {/* <Hello/> */}
                <Shop/>
            </View>
        </SafeAreaProvider>
    </ScrollView>
    
  );
  
};

export default App;





