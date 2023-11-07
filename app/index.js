import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button } from '@rneui/themed';


const App = () => {
    return (
        <SafeAreaProvider>         
            <Link href="/form" asChild>
                <Button color="secondary" title="Form" />
            </Link>   
            <Link href="/leaderboard" asChild>
                <Button color="primary" title="Leaderboard" />
            </Link>   
            <Link href="/formgenerator" asChild>
                <Button color="primary" title="gene" />
            </Link>       
        </SafeAreaProvider>   
    );
}
export default App
  