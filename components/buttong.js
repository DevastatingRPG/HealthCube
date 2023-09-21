import React from 'react';
import { Button } from '@rneui/themed';
import { View } from 'react-native';

/*
    buttons : List of names of buttons
    buttonColors : List of colors of buttons
    onClick : Function to call when clicked
    direction : In which way to extend button group, row by default
*/

const ButtonG = props => {
    const { buttons, buttonColors, onClick, direction } = props;

    return (
        <View style={{ flex: 1, flexDirection: direction }}>
            {buttons.map((button, i) => (
                <Button
                    key={i}
                    title={button}
                    color={buttonColors[i]}
                    onPress={() => onClick(buttons[i])}
                />
            ))}
        </View>
    );
}

ButtonG.defaultProps = {
    direction: 'row'
}

export default ButtonG;
