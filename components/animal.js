import React, { useRef, useEffect } from 'react';
import { Image, Animated, Easing } from 'react-native';

const HorizontalScrollingGif = ({ gifSource, width, height }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Configure the animation
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: 1, // Moves the GIF to the right
        duration: 3500, 
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        transform: [
          {
            translateX: scrollX.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 350], // Adjust the width of your screen
            }),
          },
        ],
      }}
    >
      <Image source={gifSource} style={{ width, height }} />
    </Animated.View>
  );
};

export default HorizontalScrollingGif;
