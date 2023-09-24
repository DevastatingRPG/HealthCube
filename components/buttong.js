import React from 'react';
import { Button, ButtonGroup } from '@rneui/themed';
import { View } from 'react-native';

/*
    buttons : List of names of buttons
    buttonColors : List of colors of buttons
    onClick : Function to call when clicked
    direction : In which way to extend button group, row by default
    poppi
*/

const ButtonG = props => {
    const { buttons, buttonColors, onClick, direction, selected, answer } = props;

    return (
        <View style={{ flex: 1, flexDirection: direction }}>
            {buttons.map((button, i) => (
                <Button
                    key={i}
                    title={button}
                    color={selected.includes(buttons[i]) ? buttonColors[buttonColors.length-1] : buttonColors[i]}
                    titleStyle={selected.includes(buttons[i]) ?{color: 'white'} : {color: 'black'}}
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

export default ButtonG;
