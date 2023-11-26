import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Sprites from './images';

import { router } from "expo-router";

const Congrats = (sid) => {
  sid = sid['sid']

  const handleOk = () => {
    router.replace('/dashboard');
  }

  return (
    <View style={styles.modalContainer}>
      <View
        style={{
          backgroundColor: "darkblue",
          height: "100%",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 70,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 40,
            color: "yellow",
          }}
        >
          HURRAY!!
        </Text>
        <Image
          source={Sprites[sid]['src1']}
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            alignContent: "center",
            marginTop: 30,
            marginBottom: 50,
          }}
        />
        <Image
          source={Sprites[sid]['src2']}
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            alignContent: "center",
            marginTop: 30,
            marginBottom: 50,
          }}
        />
        <TouchableOpacity onPress={handleOk}>
          <View
            style={{
              backgroundColor: "black",
              height: 50,
              width: 200,
              borderRadius: 500,
              alignSelf: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "white",
                textAlign: "center",
                paddingTop: 4,
              }}
            >
              YAY!!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
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

export default Congrats