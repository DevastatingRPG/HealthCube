import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Button, Text, Divider, LinearProgress } from '@rneui/themed';
import ButtonG from './buttong';
import HorizontalScrollingGif from './animal';


/*
    question : Question to display in form
    type : Type of Question
    progress : value of progress bar changing according to No. of Questions
    onNext, onBack : Functions to navigate
    onChange : Function to update answer values
*/

const FormInt = props => {
    const { question, type, options, progress, onNext, onBack, updateAnswers, inputValue, setInputValue } = props;

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

    if (options) {
        // Choose colors for multisel option
        keys = Object.keys(colors);
        colsel = options.map((option, index) => colors[keys[index % keys.length]]);
        colsel.push(colors['black']);
    }

    const updateValue = (value) => {
        if (value != null)
        setInputValue(prevValues => {
            if (prevValues.includes(value)) {
                // If the value exists, remove it
                return prevValues.filter(item => item !== value);
            } else {
                // If it is not multisel, replace previous value with new value
                if (type != 'multisel')
                    return [value];
                // If the value doesn't exist, add it
                return [...prevValues.filter(item => item !== ""), value];
            }
        });

    };

    const navigate = (answer) => {
        // Update answers storage in form and handle next or back
        updateAnswers(inputValue);
        if (answer == "Next")
            onNext();
        else if (answer == "Back")
            onBack();
    }

    const qsProps = { 
        // Setting props common to all Button Group inputs
        onClick: updateValue,
        selected: inputValue,
    };

    let inputElement;

    switch (type) {
        // Define how to get user input in a variable inputElement.
        case 'text':
            inputElement = <Input multiline={true} onChangeText={text => setInputValue(text)} defaultValue={inputValue} />;
            break;
        case 'yesno':
            inputElement = <ButtonG
                buttons={["YES", "NO"]}
                buttonColors={[colors['green'], colors['red'], colors['black']]}
                {...qsProps}
            />
            break;
        case 'symptom':
            inputElement =
                <View style={{ flex: 1 }}>
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
                </View>
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
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>          
            <TouchableOpacity onPress={toggleAnimation} style={styles.animation}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    animation: {
        flex: 0.01
    },
    question: {
        flex: 0.3,
        backgroundColor: '#B6C5F8',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    input: {
        flex: 0.63,
        padding: 5,
    },
    navigation: {
        flexDirection: 'column',
        flex: 0.06
    }
})

export default FormInt;
