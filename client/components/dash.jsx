import React from 'react';
import { Button } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

/*
    buttons : List of names of buttons
    buttonColors : List of colors of buttons
    onClick : Function to call when clicked
    direction : In which way to extend button group, row by default
*/

const ButtonG = props => {
    const { buttons, buttonColors, onClick, direction, title } = props;

    return (
        <View style={{ flex: 1, flexDirection: direction }}>
            {buttons.map((button, i) => (
                <Button
                    containerStyle={styles.containerStyle}
                    buttonStyle={styles.buttonStyle}
                    key={i}
                    title={button}
                    color={buttonColors[i]}
                    titleStyle={{ ...styles.titleStyle, color: title }}
                    onPress={() => onClick(i)}
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