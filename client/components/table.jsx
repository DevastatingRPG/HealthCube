import React from 'react';
import { Button, Text } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

usercolor = 'green'
defaultcolor = 'blue'

const Table = props => {
    // aot = Always On Top as this is user row and should always show
    var { rows, aot } = props;
    if (!(rows.includes(aot)))
        rows.push(aot);

    return (
        <View style={{flex: 1}}>
            <Text style={styles.heading} h3>Leaderboaard</Text>
            <DataTable style={{backgroundColor: 'blue'}}>

                {rows.map((row, i) => (
                    <DataTable.Row style={[styles.Row, row[0]==aot[0] && styles.UserRow]} key={i}>
                        <DataTable.Cell style={{flex: 0.2}}>{row[0]}</DataTable.Cell>
                        <DataTable.Cell style={{flex: 0.5}}>{row[1]}</DataTable.Cell>
                        <DataTable.Cell style={{flex: 0.3}}>{row[2]}</DataTable.Cell>
                    </DataTable.Row>
                ))}

            </DataTable>
        </View>

    )
    
}

const styles = StyleSheet.create({
    heading:{
        backgroundColor: 'blue',
        textAlign: 'center'
    },
    Row: {
        backgroundColor: defaultcolor,
        padding: 0,
        margin: 0,
        borderBottomWidth: 0,
    },

    UserRow: {
        backgroundColor: usercolor,
    }
})

export default Table;