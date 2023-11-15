import React, { useState, useEffect }  from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button, Text } from '@rneui/themed';
import axios from "axios";
const fetch = global.fetch;

const CustomComponent = React.forwardRef((props, ref) => {
    return (
      <Link {...props} ref={ref}>
        {props.children}
      </Link>
    );
  });




const App = () => {
    return (
        <SafeAreaProvider>         
            <Link href="/form" asChild>
                <Button color="secondary" title="Form" />
            </Link>   
            {/* <Link to="/leaderboard" asChild>
                <Button color="primary" title="Leaderboard" />
            </Link> 
            <Link to="/formdash" asChild>
                <Button color="primary" title="Form DashBoard" />
            </Link>           */}
            {/* /* <CustomComponent ref='/form' /> */}
        </SafeAreaProvider>   
    );
}
export default App
  