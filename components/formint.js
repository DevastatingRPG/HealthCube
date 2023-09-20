import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, Divider, createTheme, ThemeProvider, LinearProgress } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const FormInt = props => {
    const {question, type, progress, onNext, onBack} = props;
    let inputElement;

    switch (type) {
        case 'text':
            inputElement = <Input multiline={true}/>;
            break;
        case 'yesno':
            inputElement =
            <View style={styles.row}>
                <Button title='YES' buttonStyle={styles.green}></Button>
                <Button title='NO' buttonStyle={styles.red}></Button>
            </View>           
            break;
        case 'symptom':
            inputElement =
            <View style={{flex: 1}}>
                <View style={styles.row}>
                    <Button title='Currently Present' buttonStyle={styles.red}></Button>
                    <Button title='Previously Present' buttonStyle={styles.yellow}></Button>
                </View>
                <Button title='Not Present' buttonStyle={styles.green}></Button>
            </View>
            break;
        case 'multisel':
            break;
    }
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <LinearProgress variant='determinate' color='green' value={progress} />
                <Text style = {styles.question}>{question}</Text>
                <Divider color='black' width={3}/>
                <View style = {styles.input}>
                    {inputElement}
                </View>
                <View style={styles.navigation}>
                    <Button title="Back" onPress={onBack}/>
                    <Button title="Next" onPress={onNext}/>
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
        padding: 10,
        paddingTop: 20,
    },
    container: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 1,
    },
    green: {
        backgroundColor: 'rgba(0,255,0,0.6)'
    },
    red: {
        backgroundColor: 'rgba(255,0,0,0.6)',
    },
    yellow: {
        backgroundColor: 'rgba(255,255,0,0.6)',
    },
    navigation: {
        flexDirection: 'row',
        flex: 0.08
    }
})

export default FormInt;
