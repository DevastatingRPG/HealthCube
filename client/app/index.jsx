import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button } from '@rneui/themed';
import { FetchForms, FetchSprites } from '../utilities/fetching';

const App = () => {
    x = FetchSprites('devastating')
    console.log(x)
    return (
        <SafeAreaProvider>         
            <Link href="/form" asChild>
                <Button color="secondary" title="Form" />
            </Link>   
            <Link href="/leaderboard" asChild>
                <Button color="primary" title="Leaderboard" />
            </Link> 
            <Link href="/formdash" asChild>
                <Button color="primary" title="Form DashBoard" />
            </Link>          
        </SafeAreaProvider>   
    );
}
export default App
  