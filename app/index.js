import React,{ Component} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button } from '@rneui/themed';
import { View,Text, TouchableOpacity,StyleSheet } from 'react-native';



const App = () => {
    return (
          
            <View style={{backgroundColor:'green'}}>
            <Text style = {{fontSize:40,color:'blue',textAlign:'center'}}> Welcome to</Text> 
            <Text style = {{fontSize:60,color:'green',textAlign:'center',marginBottom:40}}>HealthCube</Text> 
            <Text style={{fontSize:30,marginBottom:40}}>How can we help you?</Text>     
                <Link href="/form" asChild>
                    <TouchableOpacity style = {{alignItems:'center'}}>
                        <View style= {{backgroundColor:'red',height:50,width:'90%',alignItems:'center',borderRadius:300}}>
                            <Text style={{fontSize:30,color:'white'}}>Form</Text>
                        </View>
                    </TouchableOpacity>
                </Link>   
                <Link href="/leaderboard" asChild>
                    <Button color="primary" title="Leaderboard" />
                </Link>   
                <Link href="/store" asChild>
                    <Button color="green" title="store" />
                </Link>
            </View>
                   
           
    );
}


const styles = StyleSheet.create({
    button:{
        height: 50,
        width: '90%',
    },
});

export default App
  