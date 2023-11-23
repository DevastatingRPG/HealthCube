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
  
  // let lll = FetchLeaderBoard()
  // console.log(lll)

useEffect(() => {
    // Sample data for 
    // const user
    
    // const sampleData = [
    //     { userId: 1, username: 'UserA', score: 1200 },
    //     { userId: 2, username: 'UserB', score: 1000 },
    //     { userId: 3, username: 'UserC', score: 800 },
    //     { userId: 4, username: 'UserD', score: 1500 },
    //     { userId: 5, username: 'UserE', score: 1100 },
    //     { userId: 6, username: 'UserF', score: 1300 },
    //     { userId: 7, username: 'UserG', score: 950 },
    //     { userId: 8, username: 'UserH', score: 1120 },
    //     { userId: 9, username: 'UserI', score: 850 },
    //     { userId: 10, username: 'UserJ', score: 1200 },
    //     { userId: 11, username: 'UserK', score: 1050 },
    //     { userId: 12, username: 'UserL', score: 1400 },
    //     { userId: 13, username: 'UserM', score: 920 },
    //     { userId: 14, username: 'UserN', score: 1100 },
    //     { userId: 16, username: 'UserP', score: 1250 },
    //     { userId: 17, username: 'UserQ', score: 870 },
    //     { userId: 18, username: 'UserR', score: 1150 },
    //     { userId: 19, username: 'UserS', score: 1020 },
    //     { userId: 20, username: 'UserT', score: 1080 },
    //     { userId: 21, username: 'UserU', score: 900 },
    //     { userId: 22, username: 'UserV', score: 950 },
    //     { userId: 23, username: 'UserW', score: 1180 },
    //     { userId: 24, username: 'UserX', score: 980 },
    //     { userId: 25, username: 'UserY', score: 1300 },
    //     { userId: 26, username: 'UserZ', score: 1050 },
    //     { userId: 27, username: 'UserAA', score: 1120 },
    //     { userId: 28, username: 'UserAB', score: 870 },
    //     { userId: 29, username: 'UserAC', score: 1150 },
    //     { userId: 30, username: 'UserAD', score: 1020 },
    //     { userId: 31, username: 'UserAE', score: 1080 },
    //     { userId: 32, username: 'UserAF', score: 900 },
    //     { userId: 33, username: 'UserAG', score: 950 },
    //     { userId: 34, username: 'UserAH', score: 1180 },
    //     { userId: 35, username: 'UserAI', score: 980 },
    //     { userId: 36, username: 'UserAJ', score: 1300 },
    //     { userId: 37, username: 'UserAK', score: 1050 },
    //     { userId: 38, username: 'UserAL', score: 1120 },
    //     { userId: 39, username: 'UserAM', score: 870 },
    //     { userId: 15, username: 'Vijit', score: 900 },
    //     { userId: 40, username: 'UserAN', score: 1150 },
    //     { userId: 41, username: 'UserAO', score: 1020 },
    //     { userId: 42, username: 'UserAP', score: 1080 },
    //     { userId: 43, username: 'UserAQ', score: 900 },
    //     { userId: 44, username: 'UserAR', score: 950 },
    //     { userId: 45, username: 'UserAS', score: 1180 },
    //     { userId: 46, username: 'UserAT', score: 980 },
    //     { userId: 47, username: 'UserAU', score: 1300 },
    //     { userId: 48, username: 'UserAV', score: 1050 },
    //     { userId: 49, username: 'UserAW', score: 1120 },
    //     { userId: 50, username: 'UserAX', score: 870 },
    //     // Add more sample data as needed
    //   ];
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
