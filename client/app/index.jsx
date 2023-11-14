import React, { useState, useEffect }  from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button, Text } from '@rneui/themed';
import axios from "axios";
const fetch = global.fetch;





const App = () => {
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
  