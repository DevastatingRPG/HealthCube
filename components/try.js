


//   return (
      //     <View>
      //       <AnimatedImageButton
      //         inactiveImage={require('../assets/brownchest.png')} // Provide the path to your inactive image
      //         activatedImage={require('../assets/brownopen.png')} // Provide the path to your activated image
      //         cost={100} // Customize the cost to be displayed
      //         size={200} // Customize the size of the button
      //         buttonColor="blue" // Customize the background color of the button
      //         opacity={0.8} // Customize the opacity of the button
      //         onPress={handleButtonPress}
      //       />
      //     </View>
      //   );
      // };


      // import React from 'react';
// import ButtonG from '../components/buttong';

// import { View, StyleSheet,Button } from 'react-native';
// import { TouchableOpacity,ScrollView, Text } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// //import { Button } from 'react-native-paper';

// const colors = {
//     blue: 'rgba(0, 123, 255, 0.6)',
//     green: 'rgba(40, 167, 69, 0.6)',
//     red: 'rgba(220, 53, 69, 0.6)',
//     yellow: 'rgba(255, 193, 7, 0.6)',
//     orange: 'rgba(253, 126, 20, 0.6)',
//     purple: 'rgba(111, 66, 193, 0.6)',
//     black: 'rgba(52, 58, 64, 0.6)'
// };
// const Hello = () => {
        // <SafeAreaView>
        //     <view>
        //     <Button title="clickme!" onPress={() => Alert.alert('Simple Button pressed')}/>
            
        //     <ButtonG
        //         buttons={["YES", "NO"]}
        //         buttonColors={[colors['green'], colors['red'], colors['black']]}
        //     />
        //     </view>
        // </SafeAreaView>
        
        // import React from 'react';
        // import {
        //   StyleSheet,
        //   Button,
        //   View,
        //   SafeAreaView,
        //   Text,
        //   Alert,
        // } from 'react-native';
        // import ButtonG from '../components/buttong';
        
        // const Separator = () => <View style={styles.separator} />;
        
        // const Hello = () => {

    
      //     <SafeAreaView style={styles.container}>
      //       <View>
              
      //         <ButtonG
      //           buttons = {["Hello"]}
      //           buttoncolors={["red"]}
      //           onClick={() => Alert.alert('Simple Button pressed')}
      //         />
      //       </View>
      //       <Separator />
      //       <View>
              
      //         <Button
      //           title="Press me"
      //           color="#f194ff"
      //           onPress={() => Alert.alert('Button with adjusted color pressed')}
      //         />
      //       </View>
      //       <Separator />
      //       <View>
      //         <Text style={styles.title}>
      //           All interaction for the component are disabled.
      //         </Text>
      //         <Button
      //           title="Press me"
      //           disabled
      //           onPress={() => Alert.alert('Cannot press this one')}
      //         />
      //       </View>
      //       <Separator />
      //       <View>
      //         <Text style={styles.title}>
      //           This layout strategy lets the title define the width of the button.
      //         </Text>
      //         <View style={styles.fixToText}>
      //           <Button
      //             title="Left button"
      //             onPress={() => Alert.alert('Left button pressed')}
      //           />
      //           <Button
      //             title="Right button"
      //             onPress={() => Alert.alert('Right button pressed')}
      //           />
      //         </View>
      //       </View>
      //     </SafeAreaView>

















    //     const colors = {
    //       blue: 'rgba(0, 123, 255, 0.6)',
    //       green: 'rgba(40, 167, 69, 0.6)',
    //       red: 'rgba(220, 53, 69, 0.6)',
    //       yellow: 'rgba(255, 193, 7, 0.6)',
    //       orange: 'rgba(253, 126, 20, 0.6)',
    //       purple: 'rgba(111, 66, 193, 0.6)',
    //       black: 'rgba(52, 58, 64, 0.6)'
    //   };
    //   const styles = StyleSheet.create({
    //     containerStyle: {
    //         flex: 3,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         margin: 10,
    //         borderRadius: 10,
    //         width: 200, // Increase the width
    //         height: 20, // Increase the height
    //     },
    //     buttonstyles: {
    //         flex: 3,
    //         alignSelf: 'stretch',
    //         width: '100%', // Increase the width to 100%
    //         height: '200%', // Increase the height to 100%
    //     },
    //     titleStyle: {
    //         fontSize: 20,
    //         color: '#000',
    //     },
    // });
    //     // Define the buttons, buttonColors, onClick function, and selected as needed
    //     const buttons = ["Option 1", "Option 2", "Option 3","Option 4"];
    //     const buttonColors = [colors["red"], colors["green"], colors["blue"],colors["orange"]];
        
    //     const onClick = (selectedButton) => {
    //       // Handle button click logic here
    //       console.log(`Button clicked: ${selectedButton}`);
    //     };
      
    //     const selected = []; // Define an array of selected buttons if needed
      
    //     return (
    //       <View styles>
    //         <Text>This is Another Component</Text>
    //         <ButtonG
    //           buttons={buttons}
    //           buttonColors={buttonColors}
    //           onClick={onClick}
    //           direction="column" // You can customize the direction
    //           selected={selected} // Pass the selected buttons array
    //           style={styles.buttonstyles}
    //         />
    //       </View>
    //     );
      // };
      
    
      
       // };
        
        
      //   const styles = StyleSheet.create({
      //     container: {
      //       flex: 1,
      //       justifyContent: 'center',
      //       marginHorizontal: 16,
      //     },
      //     title: {
      //       textAlign: 'center',
      //       marginVertical: 8,
      //     },
      //     fixToText: {
      //       flexDirection: 'row',
      //       justifyContent: 'space-between',
      //     },
      //     separator: {
      //       marginVertical: 8,
      //       borderBottomColor: '#737373',
      //       borderBottomWidth: StyleSheet.hairlineWidth,



      
// import React from 'react';
// import { View } from 'react-native';
// import AnimatedImageButton from './Anibutton'; 
//       const Hello = () => {
//         const handleButtonPress = () => {
//           // Handle button press logic here
//           console.log('Button pressed');
//           // You can navigate to another page or perform other actions here
//         };
        

//         return (
//           <View>
//             {/* First Button */}
//             <AnimatedImageButton
//               inactiveImage={require('../assets/brownchest.png')}
//               activatedImage={require('../assets/brownopen.png')}
//               cost={100}
//               size={100} // Customize the size of the first button
//               buttonColor="blue"
//               opacity={0.8}
//               onPress={handleButtonPress}
//             />
      
//             {/* Second Button */}
//             <AnimatedImageButton
//               inactiveImage={require('../assets/brownchest.png')}
//               activatedImage={require('../assets/brownopen.png')}
//               cost={200}
//               size={150} // Customize the size of the second button
//               buttonColor="green"
//               opacity={0.9}
//               onPress={handleButtonPress}
//             />
//           </View>
//         );
//       };
//  export default Hello;

 // const styles = StyleSheet.create({
        //   container: {
        //     flex: 1,
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   },
        // });


//code from storebut.js

// import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';
// import AnimatedImageButton from './Anibutton'; // Adjust the import path
// import PopUp from './PopUp'; // Your pop-up component

// class Hello extends Component {
//   state = {
//     isPopUpVisible: false,
//   };

//   handleButtonPress = () => {
//     // Handle button press logic here
//     // After the animation is complete, show the pop-up
//     this.setState({ isPopUpVisible: true });
//   };

//   closePopUp = () => {
//     // Handle closing the pop-up
//     this.setState({ isPopUpVisible: false });
//   };

//   render() {
//     return (
//       <View>
//         <AnimatedImageButton onPress={this.handleButtonPress} />
//             inactiveImage={require('../assets/brownchest.png')}
//             activatedImage={require('../assets/brownopen.png')}
//             cost={100}
//             size={100} // Customize the size of the first button
//             buttonColor="blue"
//             opacity={0.8}
//         {/* Conditional rendering of the pop-up based on state */}
//         {this.state.isPopUpVisible && (
//           <PopUp onClose={this.closePopUp} />
//         )}
//       </View>
//     );
//   }
// }

// export default Hello;