import React, {useEffect} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchData, postData } from '../utilities/fetching'


const StartScreen = () => {
    useEffect(() => {
        const autoLogin = async () => {
            // Check if the token exists in AsyncStorage
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                const response = await postData('/verify', {token: token})

                if (response.data == "Login")
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