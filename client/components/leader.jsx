import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FetchLeaderBoard } from '../utilities/fetching';

const LeaderboardScreen = ({ userId }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const lb = FetchLeaderBoard();

  const Mainuser = 'devastating';

useEffect(() => {
    if (lb){
      const rankedData = lb.map((item, index) => ({
        ...item,
        rank: index + 1,
      }));
    AsyncStorage.setItem('leaderboardData', JSON.stringify(rankedData))
      .then(() => {
        setLeaderboardData(rankedData);
        const user = rankedData.find((item) => item.UID === Mainuser);

        if (user) {
          setUserRank(user.rank);
          setUserScore(user.Score);
        }
      })
      .catch((error) => {
        console.error('Error setting sample data:', error);
      });    
    }

  }, [Mainuser, lb]);

return (
  <View style={styles.page}> 
    <View style={styles.leaderboard}>
      <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.UID.toString()}
        renderItem={({ item }) => (
          <View style={[styles.players, item.UID === Mainuser ? styles.usermain : null]}>
            <Text style={styles.text}>Rank {item.rank}</Text>
            <Text style={styles.text}>{item.UID}</Text>
            <Text style={styles.text}>{item.Score}</Text>
          </View>
        )}
      />
      
    <View style={styles.special}>
        <View style={styles.usermain}>
          <Text style={styles.text}>Rank {userRank}</Text>
          <Text style={styles.text}>{Mainuser}</Text>
          <Text style={styles.text}>{userScore}</Text>
        </View>
      
      </View>
    </View>
    
  </View>
);
        }

const colors = {
	pastelGreen: 'hsl(109,40%,80%)',
	pastelBlue: 'hsl(210, 70%, 80%)',
	pastelPink : 'hsl(330, 70%, 75%)',
	color: 'hsl(146,48%,76%)',
	color1: 'hsl(30,97%,83%)',
  pastelWhite:'hsl(5,0%,95%)',
  high: 'hsl(110,50%,85%)',
	pastelgray: 'hsl(10,10%,93%)',
	Pastel: 'hsl(200,60%,90%)'
};

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors['Pastel'],
        height: '100%',
        width: '100%',
        alignItems:'center',
        
        //justifyContent:'center'

    },
    leaderboard: {
        backgroundColor: colors['pastelWhite'],
        height: '98%',
        width: '95%',
        // borderColor:'black',
        // borderWidth:2,
        borderRadius:20,
        marginTop: 10,
        padding:10
    }, 
    players:{
        backgroundColor:colors['pastelgray'],
        margin: 5,
        padding:1,
        borderRadius:100,
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    user:{
        backgroundColor: colors['high'],
        height:60,
        width:'80%',
        alignContent:'center',
        justifyContent:'center',
        marginTop:10,
        borderRadius:20
    },
    usermain: {
      backgroundColor: colors['high'],
      borderRadius:20,
      margin:10,
      padding:5,
      flexDirection: 'row', 
      alignContent:'center',
      justifyContent:'space-around',
    },
    special:{
      alignContent:'center',
      justifyContent:'center',
    },
    text:{
        fontSize:20,
        fontWeight:'700',
        color:'black'
    }, 
})

export default LeaderboardScreen;
