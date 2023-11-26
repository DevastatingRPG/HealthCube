// import React, { useEffect, useState } from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Image, Text, Divider } from "@rneui/themed";
// import { View, StyleSheet, ScrollView } from "react-native";
// import { fetchData } from '../utilities/fetching'
// import Sprites from "../components/images";
// import Swiper from 'react-native-swiper';


// const colors = {
//     pastelGreen: "hsl(109,40%,80%)",
//     pastelBlue: "hsl(210, 70%, 80%)",
//     pastelPink: "hsl(330, 70%, 75%)",
//     color: "hsl(146,48%,76%)",
//     color1: "hsl(30,97%,83%)",
//     Pastel: "hsl(50,60%,80%)",
// };

// const App = () => {
//     const [sprites, setSprites] = useState([]);
//     const [balance, setBalance] = useState(0)


//     useEffect(() => {
//         const retrieveDetails = async () => {
//             try {
//                 const id = await AsyncStorage.getItem("UID");
//                 const bal = await fetchData(`?page=store&func=balance&id=${id}`)
//                 const spriteData = await fetchData(`?page=forms&func=sprites&id=${id}`);
//                 const sids = spriteData.map(({ SID }) => SID);
//                 const fetchedSprites = sids.map((index) => Sprites[index]);
//                 setBalance(bal["Balance"])
//                 setSprites(fetchedSprites);
//             } catch (error) {
//                 console.error("Error fetching sprite data: ", error);
//             }
//         };

//         retrieveDetails();
//     }, []);

    // balance has user's balance
    // id has user id
    // sprites.length has number of sprites
    // return (
    //     <SafeAreaProvider>
    //         <ScrollView>
    //             <View style={styles.aboveCol}>
    //                 <Text style={{fontSize:70,textAlign:'center'}}>Welcome !!</Text>
    //                 <Text style={{fontSize:60,textAlign:'center'}}>Vijit</Text> 
    //             </View>
    //             <Text style={styles.question}>Collection</Text>
    //             <Divider color="black" width={3} />
    //             <Swiper key={sprites.length} showsButtons={true}>
    //                 {sprites.map((item, index) => (
    //                     <View style={styles.slide} key={index}>
    //                         <Image source={item.src1} style={styles.spriteImage} />
    //                         <Image source={item.src2} style={styles.spriteImage} />
    //                     </View>
    //                 ))}
    //             </Swiper>
    //         </ScrollView>
    //     </SafeAreaProvider>
    // );
//     return (
//         <SafeAreaProvider>
//             <ScrollView>
//                 <View style={styles.aboveCol}>
//                     <Text style={{ fontSize: 70, textAlign: 'center', fontWeight: 'bold' }}>Welcome!</Text>
//                     <Text style={{ fontSize: 60, textAlign: 'center' }}>Vijit</Text>
//                     <Text style={{ fontSize: 24, textAlign: 'center', color: 'gray' }}>Balance: {balance}</Text>
//                 </View>
//                 <Text style={styles.question}>Your Collection</Text>
//                 <Divider color="black" width={3} />
//                 <Swiper key={sprites.length} showsButtons={true}>
//                     {sprites.map((item, index) => (
//                         <View style={styles.slide} key={index}>
//                             <Image source={item.src1} style={styles.spriteImage} />
//                             <Image source={item.src2} style={styles.spriteImage} />
//                             <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
//                         </View>
//                     ))}
//                 </Swiper>
//             </ScrollView>
//         </SafeAreaProvider>
//     );
// };



// const styles = StyleSheet.create({
//     aboveCol:{
//         height: 400,
//         width:'100%'
//     },
//     spriteContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginVertical: 15,
//     },
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//         alignItems: 'center',
//     },
//     spriteImage: {
//         width: 250,
//         height: 250,
//         resizeMode: "cover",
//         borderRadius: 10,
//     },
//     flatListContainer: {
//         paddingHorizontal: 16,
//     },
//     question: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         backgroundColor: '#B6C5F8', 
//         textAlign: 'center',
//         paddingVertical: 12,
//     },
// });

// export default App;

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

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.username}>Vijit</Text>
          </View>
          <View style={{backgroundColor:'white',height:5,width:'200%'}}>
          </View>
          <View style={{padding: 20,
              backgroundColor:'#64CCC5',
              alignItems: 'center',}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../assets/currency1.png")} style={{ height: 32, width: 32,marginLeft:2,marginTop:2}} />
            <Text style={styles.balance}> 1000{balance}</Text>
            
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.sprite}> 500{sprites}</Text>
            </View>
          </View>
          </View>
<View style={{backgroundColor:'white',height:5,width:'200%'}}>
          </View>
        <Text style={styles.sectionHeader}>Collection</Text>
        <Divider color="black" width={3} />
        <Swiper key={sprites.length} showsButtons={true}>
          {sprites.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Image source={item.src1} style={styles.spriteImage} />
              <Image source={item.src2} style={styles.spriteImage} />
              <Text style={styles.spriteName}>{item.name}</Text>
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
    marginTop:20
  },
  username: {
    fontSize: 50,
    color: '#85E6C5',
    marginBottom: 10,
  },
  balance: {
    fontSize: 25,
    color: '#4F4A45',
    textAlign:'left'
  },
  sprite: {
    fontSize: 25,
    color: '#4F4A45',
    textAlign:'left'
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
