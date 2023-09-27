import React from 'react';
import { Button, ButtonGroup } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

/*
    buttons : List of names of buttons
    buttonColors : List of colors of buttons
    onClick : Function to call when clicked
    direction : In which way to extend button group, row by default
*/

const ButtonG = props => {
    const { buttons, buttonColors, onClick, direction, selected, answer } = props;

    return (
        <View style={{ flex: 1, flexDirection: direction }}>
            {buttons.map((button, i) => (
                <Button
                    containerStyle={styles.containerStyle}
                    buttonStyle={styles.buttonStyle}
                    key={i}
                    title={button}
                    color={selected.includes(buttons[i]) ? buttonColors[buttonColors.length - 1] : buttonColors[i]}
                    titleStyle={selected.includes(buttons[i]) ? { ...styles.titleStyle, color: 'white' } :
                        { ...styles.titleStyle, color: 'black' }}
                    onPress={() => onClick(buttons[i])}
                />
            ))}
        </View>
    );
}

ButtonG.defaultProps = {
    direction: 'row',
    selected: [],
    answer: ''
}

const styles = StyleSheet.create({
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

})

export default ButtonG;
