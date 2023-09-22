import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, Divider, createTheme, ThemeProvider, LinearProgress, ButtonGroup } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonG from '../components/buttong';

/*
    question : Question to display in form
    type : Type of Question
    progress : value of progress bar changing according to No. of Questions
    onNext, onBack : Functions to navigate
    onChange : Function to update answer values
*/

const FormInt = props => {
    const { question, type, progress, onNext, onBack, onChange } = props;
    const [inputValue, setInputValue] = useState(null);
    let inputElement;

    const updateValue = (answer) => {
        setInputValue(answer);
    }

    const navigate = (answer) => {
        onChange(inputValue);
        if (answer == "Next")
            onNext(inputValue);      
        else if (answer == "Back")
            onBack(inputValue);
    }

    switch (type) {
        case 'text':
            inputElement = <Input multiline={true} onChangeText={text => setInputValue(text)} value={inputValue} />;
            break;
        case 'yesno':
            inputElement = <ButtonG
                buttons={["YES", "NO"]}
                buttonColors={['rgba(0,255,0,0.6)', 'rgba(255,0,0,0.6)']}
                onClick={updateValue}
            />
            break;
        case 'symptom':
            inputElement =
                <View style={{ flex: 1 }}>
                    <ButtonG
                        buttons={["Currently Present", "Previously Present"]}
                        buttonColors={['rgba(255,0,0,0.6)', 'rgba(255,255,0,0.6)']}
                        onClick={updateValue}
                    />
                    <ButtonG
                        buttons={["Not Present"]}
                        buttonColors={['rgba(0,255,0,0.6)']}
                        onClick={updateValue}
                    />
                </View>
            break;
        case 'multisel':

            break;
    }
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <LinearProgress variant='determinate' color='green' value={progress} />
                <Text style={styles.question}>{question}</Text>
                <Divider color='black' width={3} />
                <View style={styles.input}>

                    {inputElement}
                </View>

                <View style={styles.navigation}>
                    <ButtonG
                        buttons={["Back", "Next"]}
                        buttonColors={['rgba(0,255,0,0.6)', 'rgba(255,0,0,0.6)']}
                        onClick={navigate}
                    />
                </View>
            </ThemeProvider>


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

const styles = StyleSheet.create({
    question: {
        flex: 0.3,
        backgroundColor: '#B6C5F8',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    input: {
        flex: 0.62,
        padding: 5,
    },
    navigation: {
        flexDirection: 'row',
        flex: 0.08
    }
})

export default FormInt;
