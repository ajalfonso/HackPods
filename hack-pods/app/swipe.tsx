import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
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

// Hardcoded data for a team (This will later be fetched from your database)
const teamData = {
  teamId: 'team-1',
  teamName: 'Hackathon Heroes',
  teamGoal: 'Win the hackathon!',
  members: [
    { id: 'user-1', name: 'Chris', skills: ['React', 'Node.js'] },
    { id: 'user-2', name: 'Ashley', skills: ['Python', 'Machine Learning'] },
    { id: 'user-3', name: 'Kevin', skills: ['UI/UX Design', 'Figma'] },
  ],
};

// Mapping user icons (You can replace this with actual user images)
const userIcon = require('../assets/images/icon.png'); // Example user icon

const SwipeCard = ({ name, onSwipeLeft, onSwipeRight }) => {
  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const translateY = useSharedValue(-SCREEN_HEIGHT); // Start off the screen

  useEffect(() => {
    // Animate the card falling down from the top (Adjust drop speed here)
    translateY.value = withTiming(0, { duration: 500 }); // Lower duration makes it faster
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
        translateX.value = withSpring(SCREEN_WIDTH, {}, () => {
          runOnJS(onSwipeRight)();
        });
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-SCREEN_WIDTH, {}, () => {
          runOnJS(onSwipeLeft)();
        });
      } else {
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, cardStyle]}>
        <Text style={styles.teamName}>{teamData.teamName}</Text>

        {/* Circles for members */}
        <View style={styles.memberIcons}>
          {teamData.members.map((member, index) => (
            <Image
              key={member.id}
              source={userIcon}
              style={styles.circle}
            />
          ))}
          {/* Empty circles for unfilled member spots (e.g., max 4 members) */}
          {[...Array(4 - teamData.members.length)].map((_, index) => (
            <View key={`empty-${index}`} style={styles.circleEmpty} />
          ))}
        </View>

        {/* Member List */}
        <Text style={styles.subTitle}>Members</Text>
        {teamData.members.map((member) => (
          <Text key={member.id} style={styles.memberText}>
            {member.name}
          </Text>
        ))}

        {/* Team Goal */}
        <Text style={styles.subTitle}>Goal</Text>
        <Text style={styles.goalText}>{teamData.teamGoal}</Text>

        {/* Skills */}
        <Text style={styles.subTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {teamData.members.flatMap((member) => member.skills).map((skill, index) => (
            <Text key={index} style={styles.skillItem}>
              {skill}
            </Text>
          ))}
        </View>

        {/* Send a message button */}
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText}>Send a Message</Text>
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Swipe = () => {
  const [profiles, setProfiles] = useState(['Team 1', 'Team 2']);
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
        <Text style={styles.noMoreText}>No more teams</Text>
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
    height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memberIcons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
    backgroundColor: '#ddd',
  },
  circleEmpty: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
    backgroundColor: '#f0f0f0',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  memberText: {
    fontSize: 16,
    marginBottom: 5,
  },
  goalText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
    margin: 5,
    fontSize: 14,
  },
  messageButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  messageButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  noMoreText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Swipe;
