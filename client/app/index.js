import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button, ThemeProvider, createTheme } from '@rneui/themed';


const App = () => {
    const [inputValue, setInputValue] = useState(null);
    return (
        <SafeAreaProvider>         
            <Link href="/form" asChild>
                <Button color="secondary" title="Form" />
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
  