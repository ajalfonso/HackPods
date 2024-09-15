import React, { useState, useEffect } from "react";
import { CohereClient } from "cohere-ai";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const cohere = new CohereClient({
  token: "44UKPCDReDkXie62FXO0cBH8h9quGjWY7lStqzA6",
});

const testProfile = {
  id: "user-0",
  name: "AJ",
  skills: ["SQL", "Database Management", "NoSQL"],
  //skills: ["React", "HTML", "CSS"],
  //skills: ["volleyball"],
};

//skills: ["React", "HTML", "CSS"],
//const personalSkills = (<string>testProfile.skills).split(', '))

// getChatResponse().then((chatData) => {
//   console.log("Chat response:", chatData);
//   // Use chatData here after successful API call
// });

// Access chatData outside the async function

// Hardcoded data for multiple teams
const baseTeams = [
  {
    teamId: "team-1",
    teamName: "Hackathon Heroes",
    teamGoal: "Win the hackathon!",
    members: [
      { id: "user-1", name: "Chris", skills: ["React", "Node.js"] },
      { id: "user-2", name: "Ashley", skills: ["Python", "Machine Learning"] },
      { id: "user-3", name: "Kevin", skills: ["UI/UX Design", "Figma"] },
    ],
    totalskills: [
      "React",
      "Node.js"
    ],
  },
  {
    teamId: "team-2",
    teamName: "Code Crushers",
    teamGoal: "Build the best app!",
    members: [
      { id: "user-4", name: "Michael", skills: ["Java", "Spring Boot"] },
      { id: "user-5", name: "Jane", skills: ["JavaScript", "React Native"] },
    ],
    totalskills: ["Java", "Spring Boot", "JavaScript", "React Native"],
  },
  {
    teamId: "team-3",
    teamName: "Tech Titans",
    teamGoal: "Learn and collaborate!",
    members: [
      { id: "user-6", name: "Daniel", skills: ["Go", "Kubernetes"] },
      { id: "user-7", name: "Sophia", skills: ["Python", "Flask"] },
      { id: "user-8", name: "Emma", skills: ["React", "Redux"] },
      { id: "user-9", name: "Liam", skills: ["DevOps", "Docker"] },
    ],
    totalskills: [
      "Hardware",
      "Cybersecurity"
    ],
  },
  {
    teamId: "team-4",
    teamName: "Dev Wizards",
    teamGoal: "Network and have fun!",
    members: [
      { id: "user-10", name: "Olivia", skills: ["TypeScript", "Next.js"] },
      { id: "user-11", name: "William", skills: ["Python", "Django"] },
    ],
    totalskills: ["react.js", "html", "css", "typescript"],
  },
];

function reorderList<T>(list: T[], newIndexes: number[]): T[] {
  const reorderedList: T[] = [];

  for (let i = 0; i < newIndexes.length; i++) {
    reorderedList[i] = list[newIndexes[i]];
  }

  return reorderedList;
}

let rankedTeams: number[] = [];
let teamsData: [] = [];

//async function getRanks() {
    (async () => {
        const chatResponse = await cohere.chat({
          message: `With a max team size of 4 for a hackathon, what teammates should someone with the following skills: ${testProfile.skills.join(", ")} be looking for? Format as an ordered compact list and list one or two word skills of the role`,
        });
      
        const allSkills = [];
        console.log(chatResponse.text);
      
        // Gather all the total skills from baseTeams
        for (const team of baseTeams) {
          allSkills.push(team.totalskills.join(", "));
        }
      
        console.log(allSkills);
      
        const rankings = await cohere.rerank({
          documents: allSkills,
          query: `Match the most relevant skills to the following list: ${chatResponse.text}.`,
          model: "rerank-english-v3.0",
        });
      
        console.log(rankings.results);
      
        // Correctly iterate over ranking results
        for (const result of rankings.results) {
          console.log(result["index"]);
          rankedTeams.push(result["index"]);
        }
      
        // Reorder teams based on rankedTeams
        teamsData = reorderList(baseTeams, rankedTeams);
      
        console.log("Reordered Teams Data: ", teamsData);
      
        // Now teamsData is ordered and can be used for swiping
})();      
//const teamsData = reorderList(baseTeams, rankedTeams);

// Mapping user icons (You can replace this with actual user images)
const userIcon = require("../assets/images/icon.png"); // Example user icon

const SwipeCard = ({ team, onSwipeLeft, onSwipeRight }) => {
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
        // Swipe right (Adjust swipe speed here)
        translateX.value = withSpring(
          SCREEN_WIDTH,
          {
            damping: 20, // Adjust damping to control the bounce and friction
            stiffness: 150, // Stiffness controls how tight or loose the spring is
          },
          () => {
            runOnJS(onSwipeRight)();
          }
        );
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        // Swipe left (Adjust swipe speed here)
        translateX.value = withSpring(
          -SCREEN_WIDTH,
          {
            damping: 20,
            stiffness: 150,
          },
          () => {
            runOnJS(onSwipeLeft)();
          }
        );
      } else {
        // Reset to the center if not swiped far enough
        translateX.value = withSpring(0, { damping: 15, stiffness: 100 });
        rotate.value = withSpring(0, { damping: 15, stiffness: 100 });
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, cardStyle]}>
        <Text style={styles.teamName}>{team.teamName}</Text>

        {/* Circles for members */}
        <View style={styles.memberIcons}>
          {team.members.map((member, index) => (
            <Image key={member.id} source={userIcon} style={styles.circle} />
          ))}
          {/* Empty circles for unfilled member spots (e.g., max 4 members) */}
          {[...Array(4 - team.members.length)].map((_, index) => (
            <View key={`empty-${index}`} style={styles.circleEmpty} />
          ))}
        </View>

        {/* Member List */}
        <Text style={styles.subTitle}>Members</Text>
        {team.members.map((member) => (
          <Text key={member.id} style={styles.memberText}>
            {member.name}
          </Text>
        ))}

        {/* Team Goal */}
        <Text style={styles.subTitle}>Goal</Text>
        <Text style={styles.goalText}>{team.teamGoal}</Text>

        {/* Skills */}
        <Text style={styles.subTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {team.members
            .flatMap((member) => member.skills)
            .map((skill, index) => (
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
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  const handleSwipeRight = () => {
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {currentProfileIndex < teamsData.length ? (
        <SwipeCard
          key={teamsData[currentProfileIndex].teamId}
          team={teamsData[currentProfileIndex]}
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
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "absolute",
    width: SCREEN_WIDTH * 0.9,
    height: 500,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  memberIcons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
    backgroundColor: "#ddd",
  },
  circleEmpty: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
    backgroundColor: "#f0f0f0",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  memberText: {
    fontSize: 16,
    marginBottom: 5,
  },
  goalText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    backgroundColor: "#e0e0e0",
    padding: 5,
    borderRadius: 5,
    margin: 5,
    fontSize: 14,
  },
  messageButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  messageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  noMoreText: {
    fontSize: 18,
    color: "gray",
  },
});

export default Swipe;
