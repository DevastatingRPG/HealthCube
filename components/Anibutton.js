// // 
// import React, { Component } from 'react';
// import { View, Image, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

// class AnimatedImageButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActivated: false,
//       animation: new Animated.Value(0),
//     };
//   }

//   handlePress = () => {
//     this.setState({ isActivated: true });
//     Animated.timing(this.state.animation, {
//       toValue: 8,
//       duration: 500, // Adjust the duration as needed
//       useNativeDriver: false,
//     }).start(() => {
//       this.props.onPress();
//     });
//   };

//   render() {
//     const { isActivated, animation } = this.state;
//     const { isReverting } = this.props; // Access the isReverting prop

//     const imageRotate = animation.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', isReverting ? '0deg' : '90deg'],
//     });

//     return (
//       <TouchableOpacity onPress={this.handlePress}>
//         <Animated.View style={{ transform: [{ rotate: imageRotate }] }}>
//           <View style={[styles.button, { backgroundColor: this.props.buttonColor, opacity: this.props.opacity }]}>
//             <Image
//               source={isActivated ? this.props.activatedImage : this.props.inactiveImage}
//               style={{ width: this.props.size, height: this.props.size }}
//             />
            
//             <Text style={styles.costText}>Cost: {this.props.cost}</Text>
//           </View>
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   costText: {
//     marginTop: 5,
//     color: 'yellow',
//     fontSize: 50,
//   },
// });

// export default AnimatedImageButton;

import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Animated, StyleSheet, } from 'react-native';

class AnimatedImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0, // Initial image index
      animation: new Animated.Value(0),
    };
  }

  handlePress = () => {
    this.setState({ imageIndex: (this.state.imageIndex + 1) % this.props.images.length }, () => {
      // Animate the image change
      Animated.timing(this.state.animation, {
        toValue: this.state.imageIndex,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: false,
      }).start();
    });
  };

  render() {
    const { animation } = this.state;

    const imageOpacity = animation.interpolate({
      inputRange: this.props.images.map((_, index) => index),
      outputRange: this.props.images.map((_, index) => (index === this.state.imageIndex ? 1 : 0)),
    });

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View>
          {this.props.images.map((imageSource, index) => (
            <Animated.View
              key={index}
              style={[
                styles.imageContainer,
                {
                  opacity: imageOpacity,
                },
              ]}
            >
              <Image source={imageSource} style={{ width: this.props.size, height: this.props.size }} />
              <Text style={styles.costText}>Cost: {this.props.cost}</Text>
            </Animated.View>
          ))}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  costText: {
    marginTop: 5,
    color: 'yellow',
    fontSize: 50,
  },
});

export default AnimatedImageButton;

