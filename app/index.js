import React, {useState} from 'react';
import Form from '../components/formint';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Button, ThemeProvider, createTheme } from '@rneui/themed';
import ButtonG from '../components/buttong';

const App = () => {
    const [inputValue, setInputValue] = useState(null);
    return (
        <SafeAreaProvider>         
            <Link href="/form" asChild>
                <Button color="secondary" title="Form"></Button>
            </Link>            
        </SafeAreaProvider>
      
    );
}

const theme = createTheme({
    components: {
      Button: {
        containerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 10,
        },
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch'
        },
        titleStyle: {
            fontSize: 20,
            color: '#000',
        },
      },
    },
});
export default App
  