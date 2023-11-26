import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Text, Divider } from "@rneui/themed";
import { View, StyleSheet, ScrollView } from "react-native";
import { fetchData } from '../utilities/fetching'
import Sprites from "../components/images";
import Swiper from 'react-native-swiper';

const colors = {
  primary: "#7ED7C1",
  accent: "#FF9F00",
  text: "#333333",
  background: "#F7F7F7",
};

const App = () => {
  const [sprites, setSprites] = useState([]);
  const [balance, setBalance] = useState(0);
  const [uid, setUID] = useState('');


  useEffect(() => {
    const retrieveDetails = async () => {
      try {
        const id = await AsyncStorage.getItem("UID");
        setUID(id);
        const bal = await fetchData(`?page=store&func=balance&id=${id}`)
        const spriteData = await fetchData(`?page=forms&func=sprites&id=${id}`);
        const sids = spriteData.map(({ SID }) => SID);
        const fetchedSprites = sids.map((index) => Sprites[index]);
        setBalance(bal["Balance"])
        setSprites(fetchedSprites);
      } catch (error) {
        console.error("Error fetching sprite data: ", error);
      }
    };

    retrieveDetails();
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.username}>{uid}</Text>
        </View>
        <View style={{ backgroundColor: 'white', height: 5, width: '200%' }}>
        </View>
        <View style={{ padding: 20, backgroundColor: '#64CCC5', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require("../assets/c1.png")} style={{ height: 32, width: 32, marginRight: 8 }} />
              <Text style={styles.balance}>{balance}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require("../assets/peg.png")} style={{ height: 32, width: 32, marginRight: 8 }} />
              <Text style={styles.sprite}>{sprites.length}</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', height: 5, width: '200%' }}>
        </View>
        <Text style={styles.sectionHeader}>Collection</Text>
        <Divider color="black" width={3} />
        <Swiper key={sprites.length} showsButtons={true}>
          {sprites.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Image source={item.src1} style={styles.spriteImage} />
              <Image source={item.src2} style={styles.spriteImage} />
            </View>
          ))}
        </Swiper>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: '#176B87',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 64,
    color: '#F3F0CA',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20
  },
  username: {
    fontSize: 50,
    color: '#85E6C5',
    marginBottom: 10,
  },
  balance: {
    fontSize: 25,
    color: '#4F4A45',
    textAlign: 'left'
  },
  sprite: {
    fontSize: 25,
    color: '#4F4A45',
    textAlign: 'left'
  },
  sectionHeader: {
    fontSize: 44,
    fontWeight: 'bold',
    backgroundColor: '#DAFFFB',
    textAlign: 'center',
    paddingVertical: 12,
    color: 'black',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spriteImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  spriteName: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: colors.text,
  },
});

export default App;
