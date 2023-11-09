import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Input, Button, Text, Divider, createTheme, ThemeProvider, LinearProgress, ButtonGroup } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonG from './buttong';
import backgroundImage from '../assets/human.png';
import HorizontalScrollingGif from './animal';


/*
    question : Question to display in form
    type : Type of Question
    progress : value of progress bar changing according to No. of Questions
    onNext, onBack : Functions to navigate
    onChange : Function to update answer values
*/

const FormInt = props => {
    const { question, type, options, ans, progress, onNext, onBack, onChange } = props;
    const [inputValue, setInputValue] = useState([]);

    const [showHorizontalAnimation, setShowHorizontalAnimation] = useState(false);

    const toggleAnimation = () => {
        setShowHorizontalAnimation((prev) => !prev);
    };

    const colors = {
        blue: 'rgba(0, 123, 255, 0.6)',
        green: 'rgba(40, 167, 69, 0.6)',
        red: 'rgba(220, 53, 69, 0.6)',
        yellow: 'rgba(255, 193, 7, 0.6)',
        orange: 'rgba(253, 126, 20, 0.6)',
        purple: 'rgba(111, 66, 193, 0.6)',
        black: 'rgba(52, 58, 64, 0.6)'
    };



    try {
        keys = Object.keys(colors);
        colsel = options.map((option, index) => colors[keys[index % keys.length]]);
        colsel.push(colors['black']);
    }
    catch {
    }
    let inputElement;

    const updateValue = (value) => {
        setInputValue(prevValues => {
            if (prevValues.includes(value)) {
                // If the value exists, remove it
                return prevValues.filter(item => item !== value);
            } else {
                if (type != 'multisel')
                    return [value]
                // If the value doesn't exist, add it
                return [...prevValues, value];
            }
        });
    };

    const navigate = (answer) => {
        if (inputValue.length > 0)
            onChange(inputValue);
        setInputValue([]);
        if (answer == "Next")
            onNext();
        else if (answer == "Back")
            onBack();
    }

    const qsProps = {
        onClick: updateValue,
        selected: inputValue,
        answer: ans
    };

    switch (type) {
        case 'text':
            inputElement = <Input multiline={true} onChangeText={text => setInputValue(text)} value={inputValue} />;
            break;
        case 'yesno':
            inputElement = <ButtonG
                buttons={["YES", "NO"]}
                buttonColors={[colors['green'], colors['red'], colors['black']]}
                {...qsProps}
            />
            break;
        case 'symptom':
            inputElement = (
                <View style={{ flex: 1 }}>
                    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                        <ButtonG
                            buttons={["Currently Present", "Previously Present"]}
                            buttonColors={[colors['red'], colors['yellow'], colors['black']]}
                            {...qsProps}
                        />
                        <ButtonG
                            buttons={["Not Present"]}
                            buttonColors={[colors['green'], colors['black']]}
                            {...qsProps}
                        />
                    </ImageBackground>
                </View>
            );
            break;
        case 'sel':
            inputElement = <ButtonG
                buttons={options}
                buttonColors={colsel}
                direction='column'
                {...qsProps}
            />
            break;
        case 'multisel':
            inputElement = <ButtonG
                buttons={options}
                buttonColors={colsel}
                direction='column'
                {...qsProps}
            />
            break;
    }
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <TouchableOpacity onPress={toggleAnimation}>
                    {showHorizontalAnimation ? (
                        <HorizontalScrollingGif
                        gifSource={require('../assets/dog_stand.gif')}
                        width={100}
                        height={100}
                        />
                    ) : (
                        <Image
                        source={require('../assets/dog_eat.gif')}
                        style={{ width: 100, height: 100 }}
                        />
                    )}
                    </TouchableOpacity>
                <LinearProgress variant='determinate' color='green' value={progress} />
                <Text style={styles.question}>{question}</Text>
                <Divider color='black' width={3} />
                <View style={styles.input}>
                    {inputElement}
                </View>
                <View style={styles.navigation}>
                    <ButtonG
                        buttons={["Back", "Next"]}
                        buttonColors={[colors['blue'], colors['blue']]}
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
    },
    backgroundImage: {
        flex: 2,
        resizeMode: 'cover', // or 'stretch' as per your preference
        justifyContent: 'center' // Center the content horizontally and vertically
    },
    container: {
        position: 'absolute',
        top: 0, // Adjust as needed to position at the top
        left: 0, // Adjust as needed to position at the left
    }
})

export default FormInt;
