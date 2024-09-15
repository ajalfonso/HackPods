import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

interface CardProps {
  name: string;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeCard: React.FC<CardProps> = ({
  name,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const translateY = useSharedValue(-SCREEN_HEIGHT); // Start off the screen

  useEffect(() => {
    // Animate the card falling down from the top
    translateY.value = withTiming(0, { duration: 500 });
  }, []);

  const cardStyle = useAnimatedStyle(() => {
    const rotateDeg = `${rotate.value}deg`;
    return {
      transform: [
        { translateX: translateX.value },
        { rotate: rotateDeg },
        { translateY: translateY.value }, // Falling animation
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
      rotate.value = (event.translationX / SCREEN_WIDTH) * 20;
    },
    onEnd: (event) => {
      if (event.translationX > SWIPE_THRESHOLD) {
        // Swipe right
        translateX.value = withSpring(SCREEN_WIDTH, {}, () => {
          runOnJS(onSwipeRight)();
        });
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        // Swipe left
        translateX.value = withSpring(-SCREEN_WIDTH, {}, () => {
          runOnJS(onSwipeLeft)();
        });
      } else {
        // Reset
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, cardStyle]}>
        <Text style={styles.cardText}>{name}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Swipe = () => {
  const [profiles, setProfiles] = useState(['Chris', 'Kevin', 'Ashley', 'Jane', 'Michael']);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  const handleSwipeRight = () => {
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {currentProfileIndex < profiles.length ? (
        <SwipeCard
          key={profiles[currentProfileIndex]}
          name={profiles[currentProfileIndex]}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      ) : (
        <Text style={styles.noMoreText}>No more profiles</Text>
      )}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'absolute',
    width: SCREEN_WIDTH * 0.9,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  noMoreText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Swipe;
