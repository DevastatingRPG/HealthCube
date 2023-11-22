

// import React, { Component } from 'react';
// import { View, Text, Modal, TouchableOpacity, StyleSheet,Animated,Image } from 'react-native';
// import AnimatedImageButton from './Anibutton'; // Import your button component
// import { Link } from 'expo-router'
// class Hello extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPopupVisible: false,
//       isReverting: false,
//       isNewPopupVisible: false,
//     };
//   }

//   togglePopup = () => {
//     this.setState((prevState) => ({
//       isPopupVisible: !prevState.isPopupVisible,
//     }));
//   };

//   toggleNewPopup = () => {
//     this.setState((prevState) => ({
//       isNewPopupVisible: !prevState.isNewPopupVisible,
//     }));
//   };

//   handleButtonPress = () => {
//     if (this.state.isPopupVisible) {
//       // Revert the animation and close the popup
//       this.setState({ isReverting: true });
//       Animated.timing(this.state.animation, {
//         toValue: 0,
//         duration: 1000, // Adjust the duration as needed
//         useNativeDriver: false,
//       }).start(() => {
//         this.togglePopup(); // Close the popup after animation is complete
//         this.setState({ isReverting: false }); // Reset the isReverting state
//       });
//     } else {
//       // Handle button press logic to open the popup
//       this.setState({ isReverting: false }); // Reset isReverting state if not closing
//       this.togglePopup();
//     }
//   };

//   yesnext = () =>{
//     console.log('Yes pressed');
//     this.togglePopup();
//     this.toggleNewPopup();    
//   }
  

//   render() {
//     return (
      
//         <View style={styles.container}>
//         {/* Display user's coins at the top */}
//         <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
//         <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
//           <Image source={require('../assets/browngem.jpeg')} style={{ width: 20, height: 20}} />
//           <Text style={{textAlign:'left',fontSize:20,color:'brown',marginRight:70}}>: 1000</Text>
//           <Image source={require('../assets/goldgem.jpg')} style={{ width: 20, height: 20}} />
//           <Text style={{textAlign:'right',fontSize:20,color:'green'}}>: 500</Text>
//         </View>
//         <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
//           <Image source={require('../assets/purplegem.jpg')} style={{ width: 20, height: 20}} />
//           <Text style={{textAlign:'left',fontSize:20,color:'purple',marginRight:40}}>: 300</Text>
//           <Image source={require('../assets/legendgem.webp')} style={{ width: 20, height: 20}} />
//           <Text style={{textAlign:'right',fontSize:20,color:'cyan'}}>: 50</Text>
//         </View>
//         </View>
//         {/* Call the first button */}
//         <AnimatedImageButton
//           inactiveImage={require('../assets/brownchest.png')}
//           activatedImage={require('../assets/brownopen.png')}
//           cost={100}
//           size={350}
//           buttonColor="brown"
//           opacity={0.8}
//           onPress={this.handleButtonPress}
//           isReverting={this.state.isReverting}
//         />
//         <AnimatedImageButton
//           inactiveImage={require('../assets/gold.webp')}
//           activatedImage={require('../assets/goldopen.png')}
//           cost={200}
//           size={350}
//           buttonColor="blue"
//           opacity={0.8}
//           onPress={this.handleButtonPress}
//           isReverting={this.state.isReverting}
//         />
//         <AnimatedImageButton
//           inactiveImage={require('../assets/LegendChest.webp')}
//           activatedImage={require('../assets/legendopen.webp')}
//           cost={300}
//           size={350}
//           buttonColor="purple"
//           opacity={0.8}
//           onPress={this.handleButtonPress}
//           isReverting={this.state.isReverting}
//         />
//         <AnimatedImageButton
//           inactiveImage={require('../assets/godclosed.webp')}
//           activatedImage={require('../assets/godopen.jpeg')}
//           cost={500}
//           size={350}
//           buttonColor="cyan"
//           opacity={0.8}
//           onPress={this.handleButtonPress}
//           isReverting={this.state.isReverting}
//         />

//         <TouchableOpacity onPress={this.togglePopup}>
          
//         </TouchableOpacity>

//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={this.state.isPopupVisible}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.popup}>
//             <Text style={{ fontSize: 30, fontWeight: 'bold',textAlign: "center",paddingTop:20 }}>Do you really want to buy this?</Text>
//             <View style={styles.buttonRow}>
//               <TouchableOpacity onPress={this.togglePopup}>
//                 <View style={styles.buttonContainer}>
//                   <Text style={styles.buttonText}>NO</Text>
//                 </View>
//               </TouchableOpacity>
//                 <Link href= '../index' aschild>
//                   <TouchableOpacity onPress={this.yesnext}>
//                     <View style={styles.buttonContainer1}>
//                       <Text style={styles.buttonText}>YES</Text>
//                     </View>
//                   </TouchableOpacity>
//                 </Link>
//             </View>
//             </View>
//           </View>
//         </Modal>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={this.state.isNewPopupVisible}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.buypopup}>
//               <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: "center", paddingTop: 20, color:'yellow' }}>CONGRATULATIONS!!</Text>
//                 {/* <View style={styles.buttonRow}> */}
//                   <Image source={require('../assets/dog.jpg')} style={{height:300,width:250,alignContent:'center',marginLeft:50,marginTop: 30,marginBottom: 50}}/>
//                   <TouchableOpacity onPress={this.toggleNewPopup}>
//                     <View style={{backgroundColor:'black',height: 50, width:200,borderRadius:500,marginLeft: 75}}>
//                       <Text style={{fontSize:30,color:'white',textAlign:'center',paddingTop:4}}>YAY!!</Text>
//                     </View>
//                 </TouchableOpacity>
//              {/* </View> */}
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonRow: {
//     flexDirection: 'row', // Arrange children horizontally
//   },
//   modalContainer: {
//     flex: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   },
//   popup: {
//     backgroundColor: 'cyan',
//     padding: 10,
//     borderRadius: 10,
//     width: 350,
//     height: 200,
//   },
//   buypopup:{
//     backgroundColor: 'blue',
//     paddingTop: 40,
//     height: 600,
//     width: 350,
//     borderRadius: 50,
//   },
//   buttonContainer:{
    
//     backgroundColor: 'red',
//     width: 100,
//     height: 40,
//     marginLeft:35,
//     marginRight: 50,
//     marginTop: 10,
//     borderRadius: 500,
//   },
//   buttonText: {
//     textAlign: 'center', // Center-align the text
//     color: 'white',
//     paddingTop: 10,
//   },
//   buttonContainer1:{
//     flex:1,
//     backgroundColor: 'green',
//     width: 100,
//     height: 40,
//     marginTop: 10,
//     borderRadius: 500,
//   },
// });

// export default Hello;

