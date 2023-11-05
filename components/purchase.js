import { Button } from "@rneui/base";
import React from "react";
import { View,Text} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

YesNext = () => {
    <SafeAreaProvider>
        <View>
            <Text>Ye le tera kutta</Text>
            <Image source={require('../assets/browngem.jpeg')} style={{ width: 200, height: 500}} />
            <Button>OK</Button>
        </View>
    </SafeAreaProvider>
}

export default YesNext;