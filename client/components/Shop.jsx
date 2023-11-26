import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import ButtonS from "./shopcounter";
import { BuyChest, findSpriteByCategory, getCategory } from "../utilities/fetching";
import { weightedRandom } from "../utilities/rand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchData } from "../utilities/fetching";
import { router } from "expo-router";
import Congrats from "./congrats";

const Shop = () => {
  const [popitup, setPopitup] = useState(false);
  const [nobalance, setNoBalance] = useState(false);
  const [newpopitup, setNewPopitup] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [full, setFull] = useState(false);
  const [sid, setSid] = useState(1)
  let spritecat = 0;
  let foundSprite = [];

  const [unowned, setUnowned] = useState([]);
  const [uid, setUID] = useState(0);
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const retrieveDetails = async () => {
      try {
        const id = await AsyncStorage.getItem("UID");
        setUID(id)
        const bal = await fetchData(`?page=store&func=balance&id=${id}`)
        const spriteData = await fetchData(`?page=store&func=list&id=${id}`);
        setBalance(bal["Balance"])
        setUnowned(spriteData);
      } catch (error) {
        console.error("Error fetching sprite data: ", error);
      }
    };

    retrieveDetails();
  }, [newpopitup]);

  const money = balance
  const toggleNewPopup = () => {
    setNewPopitup(!newpopitup);
  };
  const togglePopup = () => {
    setPopitup(!popitup);
  };

  const toggleBalance = () => {
    setNoBalance(!nobalance);
  };

  const handleButtonPress = (buttonInfo) => {
    if (buttonInfo["cost"] > money) {
      setNoBalance(true);
    } else {
      setSelectedButton(buttonInfo);
      setPopitup(true);
    }
  };

  const handleFull = () => {
    router.replace('/dashboard')
  }

  let cats = getCategory(unowned)

  const yesnext = () => {

    if (selectedButton?.cost == 100) {
      spritecat = weightedRandom(cats, { 1: 0.6, 2: 0.2, 3: 0.15, 4: 0.05 })
    }
    else if (selectedButton?.cost == 200) {
      spritecat = weightedRandom(cats, { 1: 0.5, 2: 0.3, 3: 0.15, 4: 0.05 })
    }
    else {
      spritecat = weightedRandom(cats, { 1: 0.35, 2: 0.2, 3: 0.22, 4: 0.23 })
    }
    foundSprite = findSpriteByCategory(spritecat, unowned);


    try {
      setSid(foundSprite.SID)
      BuyChest({ id: uid, sid: foundSprite.SID, cost: selectedButton?.cost });
      togglePopup();
      toggleNewPopup();

    }
    catch (error) {
      console.error(error)
      setFull(true)
    }
  };


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignContent: "flex-start" }}>
        <Image
          source={require("../assets/c1.png")}
          style={{ height: 30, width: 30, marginTop: 3 }}
        />
        <Text style={{ fontSize: 30, color: "white" }}>
          {money !== null ? money : 0}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "cyan",
          height: 100,
          width: "100%",
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            fontSize: 60,
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: 7,
          }}
        >
          STORE
        </Text>
      </View>
      <ButtonS
        name="Pill"
        size={300}
        image1={require("../assets/clpill2.png")}
        cost={100}
        filled={false}
        textcolor="white"
        onPress={handleButtonPress}
      />
      <View
        style={{
          backgroundColor: "cyan",
          height: 20,
          width: "100%",
          marginBottom: 50,
        }}
      />
      <ButtonS
        name="Premium Pill"
        size={300}
        image1={require("../assets/clpill1.png")}
        cost={200}
        filled={false}
        textcolor="white"
        onPress={handleButtonPress}
      />

      <View
        style={{
          backgroundColor: "cyan",
          height: 20,
          width: "100%",
          marginBottom: 50,
        }}
      />

      <ButtonS
        name="Super Deluxe Pill"
        size={300}
        image1={require("../assets/clpill3.png")}
        cost={300}
        filled={false}
        textcolor="white"
        onPress={handleButtonPress}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={full}
        animationDuration={1000}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <Text
              style={{
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              You have all the sprites!
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={handleFull}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={nobalance}
        animationDuration={1000}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <Text
              style={{
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Insufficient Balance
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={toggleBalance}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={popitup}
        animationDuration={1000}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
            >
              Confirm purchase of
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {selectedButton?.name}?
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={togglePopup}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>NO</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={yesnext}>
                <View style={styles.buttonContainer1}>
                  <Text style={styles.buttonText}>YES</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* ... (modal content) */}
      </Modal>
      <Modal animationType="slide" transparent={true} visible={newpopitup}>
        <Congrats sid={sid}></Congrats>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkblue",
  },
  buttonRow: {
    flexDirection: "row",
  },
  modalContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  popup: {
    backgroundColor: "cyan",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 350,
    height: 200,
  },
  buttonContainer: {
    backgroundColor: "red",
    width: 100,
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 50,
    marginTop: 35,
    borderRadius: 500,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    paddingTop: 10,
  },
  buttonContainer1: {
    backgroundColor: "green",
    width: 100,
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 50,
    marginTop: 35,
    borderRadius: 500,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkblue",
  },
  buttonRow: {
    flexDirection: "row",
  },
  modalContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  popup: {
    backgroundColor: "cyan",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 350,
    height: 200,
  },
  buttonContainer: {
    backgroundColor: "red",
    width: 100,
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 50,
    marginTop: 35,
    borderRadius: 500,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    paddingTop: 10,
  },
  buttonContainer1: {
    backgroundColor: "green",
    width: 100,
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 50,
    marginTop: 35,
    borderRadius: 500,
  },
});

export default Shop;