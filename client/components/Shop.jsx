import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import ButtonS from './shopcounter';
import { Link } from 'expo-router';
import { FetchBalance } from "../utilities/fetching";

const Shop = () => {
    const [popitup, setPopitup] = useState(false);
    const [newpopitup, setNewPopitup] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    

    const toggleNewPopup = () => {
        setNewPopitup(!newpopitup);
    };

    const togglePopup = () => {
        setPopitup(!popitup);
    };

    const handleButtonPress = (buttonInfo) => {
        setSelectedButton(buttonInfo);
        setPopitup(true);
    };

    const yesnext = () => {
        togglePopup();

        //use selectedButton?.cost
        console.log(selectedButton?.cost);
        toggleNewPopup();
    }

    //const money = FetchBalance('devastating')
    // {money !== null ? money["Balance"] : 0}

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
                <Image source={require('../assets/legendgem.webp')} style={{ height: 30, width: 30, marginTop: 3 }} />
                <Text style={{ fontSize: 30, color: 'white' }}>100</Text>
            </View>
            <View style={{ backgroundColor: 'cyan', height: 100, width: '100%', marginBottom: 50 }}>
                <Text style={{ fontSize: 60, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingTop: 7 }}>STORE</Text>
            </View>
            <ButtonS
                name='Pill'
                size={300}
                image1={require('../assets/yellowred.png')}
                image2={require('../assets/redopen.png')}
                cost={100}
                filled={false}
                textcolor='white'
                onPress={handleButtonPress}
            />
            <ButtonS
                name='Premium Pill'
                size={300}
                image1={require('../assets/purple.png')}
                image2={require('../assets/redpill.webp')}
                cost={200}
                filled={false}
                textcolor='white'
                onPress={handleButtonPress}
            />

            <View style={{ backgroundColor: 'cyan', height: 20, width: '100%', marginBottom: 50 }} />

            <ButtonS
                name='Super Deluxe Pill'
                size={300}
                image1={require('../assets/blueremoved.png')}
                image2={require('../assets/cyanpill.jpg')}
                cost={300}
                filled={false}
                textcolor='white'
                onPress={handleButtonPress}
            />
            {/* ... (other ButtonS components) */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={popitup}
                animationDuration={1000}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.popup}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Confirm purchase of</Text>
                        <Text style={{ fontSize: 40, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center' }}>{selectedButton?.name}?</Text>
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={newpopitup}
            >
                <View style={styles.modalContainer}>
                    <View style={{ backgroundColor: 'darkblue', height: '100%', width: '100%' }}>
                        <Text style={{ fontSize: 70, fontWeight: 'bold', textAlign: "center", paddingTop: 40, color: 'yellow' }}>HURRAY!!</Text>
                    
                        <Image source={selectedButton?.image2} style={{ height: 300, width: 250, alignContent: 'center', marginLeft: 50, marginTop: 30, marginBottom: 50 }} />
                        <TouchableOpacity onPress={toggleNewPopup}>
                            <View style={{ backgroundColor: 'black', height: 50, width: 200, borderRadius: 500, marginLeft: 75 }}>
                                <Text style={{ fontSize: 30, color: 'white', textAlign: 'center', paddingTop: 4 }}>YAY!!</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
    },
    buttonRow: {
        flexDirection: 'row',
    },
    modalContainer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    popup: {
        backgroundColor: 'cyan',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: 350,
        height: 200,
    },
    buttonContainer: {

        backgroundColor: 'red',
        width: 100,
        height: 40,
        alignItems: 'center',
        marginLeft: 35,
        marginRight: 50,
        marginTop: 35,
        borderRadius: 500,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 10,
    },
    buttonContainer1: {
        backgroundColor: 'green',
        width: 100,
        height: 40,
        alignItems: 'center',
        marginLeft: 35,
        marginRight: 50,
        marginTop: 35,
        borderRadius: 500,
    },
});

export default Shop;
