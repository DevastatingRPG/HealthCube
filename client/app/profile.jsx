import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Text, Divider } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import { fetchData } from '../utilities/fetching'
import Sprites from "../components/images";
import Swiper from 'react-native-swiper';


const colors = {
    pastelGreen: "hsl(109,40%,80%)",
    pastelBlue: "hsl(210, 70%, 80%)",
    pastelPink: "hsl(330, 70%, 75%)",
    color: "hsl(146,48%,76%)",
    color1: "hsl(30,97%,83%)",
    Pastel: "hsl(50,60%,80%)",
};

const App = () => {
    const [sprites, setSprites] = useState([]);
    const [balance, setBalance] = useState(0)


    useEffect(() => {
        const retrieveDetails = async () => {
            try {
                const id = await AsyncStorage.getItem("UID");
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

    // balance has user's balance
    // id has user id
    // sprites.length has number of sprites
    return (
        <SafeAreaProvider>
            <Text style={styles.question}>Collection</Text>
            <Divider color="black" width={3} />
            <Swiper key={sprites.length} showsButtons={true}>
                {sprites.map((item, index) => (
                    <View style={styles.slide} key={index}>
                        <Image source={item.src1} style={styles.spriteImage} />
                        <Image source={item.src2} style={styles.spriteImage} />
                    </View>
                ))}
            </Swiper>
        </SafeAreaProvider>
    );

};

const styles = StyleSheet.create({
    spriteContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    spriteImage: {
        width: 250,
        height: 250,
        resizeMode: "cover",
        borderRadius: 10,
    },
    flatListContainer: {
        paddingHorizontal: 16,
    },
    question: {
        fontSize: 28,
        fontWeight: 'bold',
        backgroundColor: '#B6C5F8', 
        textAlign: 'center',
        paddingVertical: 12,
    },
});

export default App;
