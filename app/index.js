import React, {useState} from 'react';
import Form from '../components/formint';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '@rneui/themed';

const App = () => {
    return (
        <SafeAreaProvider>
          
            <Link href="/form" asChild>
                <Button color="secondary" title="Form" />
            </Link>
        </SafeAreaProvider>
      
    );
}
export default App
  