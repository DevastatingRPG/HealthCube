import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Input, Text, Divider, LinearProgress, Image } from '@rneui/themed';
import ButtonG from './buttong';
import HorizontalScrollingGif from './animal';
import Sprites from './images';

/*
    question : Question to display in form
    type : Type of Question
    progress : value of progress bar changing according to No. of Questions
    onNext, onBack : Functions to navigate
    onChange : Function to update answer values
*/

const FormInt = props => {
    const { question, type, options, progress, onNext, onBack, updateAnswers, inputValue, setInputValue, sprites } = props;
    const [showHorizontalAnimation, setShowHorizontalAnimation] = useState(false);

    const toggleAnimation = () => {
        setShowHorizontalAnimation((prev) => !prev);
    };

    const colors = {
        blue: '#4AB19D',
        green: '#33b249',
        red: '#EF3D59',
        yellow: '#EFC958',
        purple: '#80669d',
        cyan: '#55c2da',
        black: 'rgba(52, 58, 64, 0.6)',

    };

    if (options) {
        keys = Object.keys(colors);
        colsel = options.map((option, index) => colors[keys[index % (keys.length - 1)]]);
        colsel.push(colors['black']);
    }

    const updateValue = (value) => {
        if (value != null)
            setInputValue(prevValues => {
                if (prevValues.includes(value)) {
                    // If the value exists, remove it
                    return prevValues.filter(item => item !== value);
                } else {
                    if (type != 'multisel')
                        return [value];
                    // If the value doesn't exist, add it
                    return [...prevValues.filter(item => item !== ""), value];
                }
            });

    };

    const navigate = (answer) => {
        updateAnswers(inputValue);
        if (answer == "Next")
            onNext();
        else if (answer == "Back")
            onBack();
    }

    const qsProps = {
        onClick: updateValue,
        selected: inputValue,
    };


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let img1, img2;

    if (sprites) {
        len = sprites.length
        sprite = Sprites[sprites[getRndInteger(0, len)]["SID"]]
        img1 = sprite["src1"]
        img2 = sprite["src2"]
    }


    let inputElement;

    switch (type) {
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
            <TouchableOpacity onPress={toggleAnimation} style={styles.animation}>
                {showHorizontalAnimation ? (
                    <HorizontalScrollingGif
                        gifSource={img2}
                        width={100}
                        height={100}
                    />
                ) : (
                    <Image
                        source={img1}
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
                    buttonColors={['#F9A26C', '#F9A26C']}
                    onClick={navigate}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    animation: {
        flex: 0.01,
    },
    question: {
        padding: 8,
        fontSize: 25,
        flex: 0.3,
        backgroundColor: '#325D79',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#9BD7D1'
    },
    input: {
        flex: 0.63,
        padding: 5,
        backgroundColor: '#EFEEEE',
        justifyContent: 'center',

    },
    navigation: {
        flexDirection: 'row',
        flex: 0.06,
        backgroundColor: '#F26627',
    }
})

export default FormInt;
