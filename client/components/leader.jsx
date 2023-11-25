import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const LeaderboardScreen = (props) => {
  const { leaderboardData, userRank, userScore, uid } = props;

  return (
    <View style={{ flexDirection: 'column', height: '100%', width: '100%', alignItems: 'center' }}>
      <View style={styles.page}>
        <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}>Leaderboard</Text>
      </View>
      <View style={styles.leaderboard}>
        {leaderboardData ? (
          <FlatList
            data={leaderboardData}
            keyExtractor={(item) => item.UID.toString()}
            renderItem={({ item }) => (
              <View style={[styles.players, item.UID === uid ? styles.usermain : null]}>
                <Text style={[styles.column, {flex: 0.2}]}>{item.rank}</Text>
                <Text style={[styles.column, {flex: 0.5}]}>{item.UID}</Text>
                <Text style={[styles.column, {flex: 0.3}]}>{item.Score}</Text>
              </View>
            )}
          />
        ) : (
          <Text>Loading...</Text>
        )}

        <View style={styles.special}>
          <View style={styles.usermain}>
            <Text style={[styles.column, {flex: 0.2}]}>{userRank}</Text>
            <Text style={[styles.column, {flex: 0.5}]}>{uid}</Text>
            <Text style={[styles.column, {flex: 0.3}]}>{userScore}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const colors = {
  pastelGreen: "hsl(109,40%,80%)",
  pastelBlue: "hsl(210, 70%, 80%)",
  pastelPink: "hsl(330, 70%, 75%)",
  color: "hsl(146,48%,76%)",
  color1: "hsl(30,97%,83%)",
  pastelWhite: "hsl(5,0%,95%)",
  high: "hsl(110,50%,85%)",
  pastelgray: "hsl(10,10%,93%)",
  Pastel: "hsl(200,60%,90%)",
};

const styles = StyleSheet.create({
  page: {
    flex: 0.2,
    backgroundColor: colors['Pastel'],
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

    //justifyContent:'center'

  },
  leaderboard: {
    flex: 1,
    backgroundColor: '#FFF2D8',
    height: '100%',
    width: '100%',
    marginTop: 10,
    padding: 10
  },
  players: {
    backgroundColor: '#FFF2D8',
    margin: 5,
    padding: 1,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'black',
    borderBottomWidth: 3
  },
  user: {
    backgroundColor: colors['high'],
    height: 60,
    width: '80%',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 20
  },
  column: {
    fontSize: 20,
    //fontFamily: 'monospace', // Use a monospaced font
    //width: 120, // Set a fixed width for each column
    textAlign: 'left', // Adjust text alignment as needed
    marginLeft: 40

  },
  usermain: {
    // backgroundColor: colors['high'],
    // borderRadius:20,
    // margin:10,
    // padding:5,
    // flexDirection: 'row', 
    // alignContent:'center',
    // justifyContent:'space-around',
    backgroundColor: colors['high'],
    margin: 5,
    padding: 1,
    borderRadius: 100,
    flexDirection: 'row',
    //justifyContent: 'space-around'
  },
  special: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    textAlign: 'left'
  },
})

export default LeaderboardScreen;
