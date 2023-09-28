import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button } from '@rneui/themed';


const App = () => {
    return (
        <SafeAreaProvider>         
            <Link href="/form" asChild replace>
                <Button color="secondary" title="Form" />
            </Link>            
        </SafeAreaProvider>   
    );
}
export default App
  