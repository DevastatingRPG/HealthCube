// import mysql from 'mysql';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text, Divider, LinearProgress } from '@rneui/themed';
import Table from '../components/table';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';

const LB = () => {
  rows = [[1, 'Shubham', '10/10'], [2, 'Vijit', '2/10']]
  aot = [3, 'me', '1/10']
  return (
    <SafeAreaProvider>
      <PagerView>
        <View style={{flex: 0.6, backgroundColor: 'blue'}} collapsable='false'>
          <Table rows={rows} aot = {aot}></Table>
        </View>
      </PagerView>
      

    </SafeAreaProvider>
  );
};

export default LB;