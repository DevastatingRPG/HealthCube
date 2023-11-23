import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { router } from 'expo-router'

const StartScreen = () => {
  return (
    <Background>
      <Logo />
      <Button
        mode="contained"
        onPress={() => router.push('/LoginScreen')}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => router.push('/form')}
      >
        Create an account
      </Button>
    </Background>
  )
}

export default StartScreen;