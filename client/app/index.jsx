import React, {useEffect} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'


const StartScreen = () => {
    useEffect(() => {
        const autoLogin = async () => {
            // Check if the token exists in AsyncStorage
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                // Verify the token (you may want to do this on the server-side as well)
                // If the token is valid, consider the user logged in
                // For simplicity, we'll just navigate to the main app screen
                router.replace('/dashboard');
            }
        };

        autoLogin();
    }, []);


    return (
        <Background>
            <Logo />
            <Button
                mode="contained"
                onPress={() => router.push('/dashboard')}
            >
                Log in
            </Button>
            <Button
                mode="outlined"
                onPress={() => router.push('/RegisterScreen')}
            >
                Create an account
            </Button>
        </Background>
    )
}

export default StartScreen;