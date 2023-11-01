import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text, Divider, LinearProgress } from '@rneui/themed';
import ButtonG from '../components/buttong';


/*
    question : Question to display in form
    type : Type of Question
    progress : value of progress bar changing according to No. of Questions
    onNext, onBack : Functions to navigate
    onChange : Function to update answer values
*/

const FormInt = props => {
    const { question, type, options, progress, onNext, onBack, updateAnswers, inputValue, setInputValue } = props;
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
        keys = Object.keys(colors);
        colsel = options.map((option, index) => colors[keys[index % keys.length]]);
        colsel.push(colors['black']);
    }

    const updateValue = (value) => {
        // console.log(value)
        // if (value != null)
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
        setInputValue([]);
        if (answer == "Next")
            onNext();
        else if (answer == "Back")
            onBack();
    }

    const qsProps = {
        onClick: updateValue,
        selected: inputValue,
    };

    let inputElement;

    switch (type) {
        case 'text':
            console.log(inputValue)
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
        <View style={{ flex: 1 }}>
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
        </View>
    );
}

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
        flex: 0.1
    }
})

export default FormInt;
