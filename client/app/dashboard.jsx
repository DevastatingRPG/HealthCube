import React from "react";

import { Link, router } from "expo-router";
import { Button } from "@rneui/themed";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/AntDesign';
import { Ionicons, MaterialIcons, AntDesign } from "react-native-vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const colors = {
  pastelGreen: "hsl(109,40%,80%)",
  pastelBlue: "hsl(210, 70%, 80%)",
  pastelPink: "hsl(330, 70%, 75%)",
  color: "hsl(146,48%,76%)",
  color1: "hsl(30,97%,83%)",
  // color1: 'hsl(270,24%,75%)',
  // color1: 'hsl(135,80%,85%)',
  // pastelgray: '#cfcfc4',
  Pastel: "hsl(50,60%,80%)",
};

const App = () => {
  const onLogout = async () => {
    // Remove the token from AsyncStorage
    await AsyncStorage.removeItem("authToken");

    // Perform any additional logout actions
    // For example, navigate to the login screen
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>HealthCube</Text>
          <TouchableOpacity style={styles.logout} onPress={onLogout}>
            <SimpleLineIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.buts}>
          <Link href="/formdash" asChild>
            <TouchableOpacity style={styles.butbod}>
              <AntDesign name="form" size={90} color="white" />
              <Text style={styles.text}>Form</Text>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.butbod2}>
            <Ionicons name="person-outline" size={90} color="white" />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buts}>
          <Link href="/leaderboard" asChild>
            <TouchableOpacity style={styles.butbod1}>
              <MaterialIcons name="leaderboard" size={100} color="white" />
              <Text style={styles.text}>Leaderboard</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/store" asChild>
            <TouchableOpacity style={styles.butbod3}>
              <AntDesign name="shoppingcart" size={100} color="white" />
              <Text style={styles.text}>Store</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: colors["color"],
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
  title: {
    backgroundColor: colors["color"],
    paddingBottom: 20,
    color: "white",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginLeft:38
  },
  logout: {
    alignSelf: "center",
    marginBottom:60,
  },
  buts: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  butbod: {
    flex: 1,
    color: "rgba(255, 255, 255, 0.5)",
    backgroundColor: colors["pastelPink"],
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 20,
  },
  butbod1: {
    flex: 1,
    backgroundColor: colors["Pastel"],
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  butbod2: {
    flex: 1,
    backgroundColor: colors["pastelBlue"],
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginTop: 20,
  },
  butbod3: {
    flex: 1,
    backgroundColor: colors["color1"],
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
