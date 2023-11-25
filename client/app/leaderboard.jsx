import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import LeaderboardScreen from '../components/leader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchData } from '../utilities/fetching';
import { Text } from '@rneui/themed';

const Grow = () => {

  const [leaderboardData, setLeaderboardData] = useState(null)
  const [userRank, setUserRank] = useState(null);
  const [userScore, setUserScore] = useState(null)
  const [uid, setUID] = useState('')
  // const lb = FetchLeaderBoard();

  useEffect(() => {
    const retrieveDetails = async () => {
      try {
        const id = await AsyncStorage.getItem("UID");
        if (id) {
          setUID(id)
          const lb = await fetchData(`?page=lb`);
          const rankedData = lb.map((item, index) => ({
            ...item,
            rank: index + 1,
          }));
          const user = rankedData.find((item) => item.UID === id);
          
          if (user) {
            setUserRank(user.rank);
            setUserScore(user.Score);
          }
          setLeaderboardData(rankedData);
        }
      }
      catch (error) {
        console.error("Error fetching leaderboard data: ", error)
      }
    };

    retrieveDetails();
  }, []);

  return (
    <View>
      {leaderboardData ? (
        <LeaderboardScreen leaderboardData={leaderboardData} userRank={userRank} userScore={userScore} uid={uid} />
      ) : (
        <Text>Loading</Text>
      )}
      
    </View>
  );
}
export default Grow;