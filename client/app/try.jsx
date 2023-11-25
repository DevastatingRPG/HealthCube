// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// const SlidePopup = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const showPopup = () => {
//     setIsVisible(true);

//     // Hide the popup after 2 seconds
//     setTimeout(() => {
//       hidePopup();
//     }, 2000);
//   };

//   const hidePopup = () => {
//     setIsVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={showPopup}>
//         <Text>Show Popup</Text>
//       </TouchableOpacity>

//       <Animatable.View
//         animation={isVisible ? 'slideInUp' : 'slideOutDown'}
//         duration={500}
//         style={[styles.popup, isVisible ? styles.visible : styles.hidden]}
//       >
//         <Text>This is a popup!</Text>
//       </Animatable.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   popup: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'white',
//     padding: 20,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     elevation: 5,
//   },
//   visible: {
//     height: '100%',
//   },
//   hidden: {
//     height: 0,
//   },
// });

// export default SlidePopup;
