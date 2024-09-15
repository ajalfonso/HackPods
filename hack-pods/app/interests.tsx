import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width; // Get the screen width to ensure the green section stretches fully

const InterestsGoalsPage: React.FC = () => {
  const initialInterests = ['Volleyball', 'Valorant', 'Bouldering', 'Basketball', 'Hiking', 'Swim', 'Drawing', 'Dancing'];
  
  // Split the goals into two rows
  const firstRowGoals = ['Casually Compete', 'Network'];
  const secondRowGoals = ['Win!', 'Learn', 'Have Fun'];

  // State to track selected interests and goals
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [funFact, setFunFact] = useState<string>('');

  // Toggle function for interests selection
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Toggle function for goals selection
  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(item => item !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
=======
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width; // Get the screen width to ensure the green section stretches fully

const InterestsPage: React.FC = () => {
  const initialSkills = ['Back-end', 'Front-end', 'Figma', 'HTML', 'Python', 'C++', 'CSS', 'JavaScript'];
  const initialLookingFor = ['Back-end', 'Front-end', 'Figma', 'HTML', 'Python', 'C++', 'CSS', 'JavaScript'];

  // State to track selected skills and looking for items
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLookingFor, setSelectedLookingFor] = useState<string[]>([]);

  // States to hold custom input values for new skills or looking for items
  const [newSkill, setNewSkill] = useState<string>('');
  const [newLookingFor, setNewLookingFor] = useState<string>('');

  // State to hold the updated skills and looking for arrays
  const [skills, setSkills] = useState(initialSkills);
  const [lookingFor, setLookingFor] = useState(initialLookingFor);

  // Toggle function for skills selection
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(item => item !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Toggle function for looking for selection
  const toggleLookingFor = (item: string) => {
    if (selectedLookingFor.includes(item)) {
      setSelectedLookingFor(selectedLookingFor.filter(el => el !== item));
    } else {
      setSelectedLookingFor([...selectedLookingFor, item]);
    }
  };

  // Function to add a new skill
  const addSkill = () => {
    if (newSkill.trim() !== '' && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill(''); // Clear the input field
    }
  };

  // Function to add a new looking for item
  const addLookingFor = () => {
    if (newLookingFor.trim() !== '' && !lookingFor.includes(newLookingFor)) {
      setLookingFor([...lookingFor, newLookingFor]);
      setNewLookingFor(''); // Clear the input field
>>>>>>> 430345d13a019cc27fbc4d47bc47a9601f0aed2e
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
<<<<<<< HEAD
      {/* Interests Section */}
      <View style={styles.textRow}>
        <Text style={styles.title}>interests</Text>
        <Text style={styles.subtitle}>4. Meet your crowd</Text>
      </View>

      <View style={styles.mainSectionContainer}>
        <Text style={styles.sectionTitle}>Your Interests</Text>
        <View style={styles.interestsGrid}>
          {initialInterests.map((interest, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.interestItem,
                selectedInterests.includes(interest) ? styles.selectedItem : styles.unselectedItem
              ]}
              onPress={() => toggleInterest(interest)}
            >
              <Text style={styles.skillText}>{interest}</Text>
            </TouchableOpacity>
          ))}
          {/* Add Interest Button */}
          <TouchableOpacity style={[styles.addButton, styles.roundedIcon]}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Fun Fact Section */}
        <Text style={styles.funFactText}>Tell us one fun fact about yourself</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          value={funFact}
          onChangeText={setFunFact}
        />
      </View>

      {/* Goals Section */}
      <View style={styles.textRow}>
        <Text style={styles.title}>goals</Text>
        <Text style={styles.subtitle}>5. Find like minds</Text>
      </View>

      <View style={styles.mainSectionContainer}>
        <Text style={styles.sectionTitle}>Goals</Text>

        {/* First Row of Goals */}
        <View style={styles.goalsGrid}>
          {firstRowGoals.map((goal, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.goalItem,
                selectedGoals.includes(goal) ? styles.selectedItem : styles.unselectedItem
              ]}
              onPress={() => toggleGoal(goal)}
            >
              <Text style={styles.skillText}>{goal}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Second Row of Goals */}
        <View style={styles.goalsGrid}>
          {secondRowGoals.map((goal, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.goalItem,
                selectedGoals.includes(goal) ? styles.selectedItem : styles.unselectedItem
              ]}
              onPress={() => toggleGoal(goal)}
            >
              <Text style={styles.skillText}>{goal}</Text>
            </TouchableOpacity>
          ))}
        </View>
=======
      <Text style={styles.title}>Interests</Text>
      <Text style={styles.subtitle}>Show off your skills and what you're looking for</Text>

      {/* Main Connected Section */}
      <View style={styles.mainSectionContainer}>
        {/* Your Skills Section */}
          <Text style={styles.sectionTitle}>Your Interests</Text>
          <View style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.skillItem,
                  selectedSkills.includes(skill) ? styles.selectedItem : styles.unselectedItem,
                  (skill === 'CSS' || skill === 'JavaScript') && styles.roundedItem // Apply rounded corners to last row elements
                ]}
                onPress={() => toggleSkill(skill)}
              >
                <Text style={styles.skillText}>{skill}</Text>
              </TouchableOpacity>
            ))}
            {/* Add Skill Button */}
            <TouchableOpacity style={[styles.addButton, styles.roundedItem]} onPress={addSkill}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

      {/* Looking for Section */}
      <View style={styles.mainSectionContainer}>
        <Text style={styles.sectionTitle}>Looking for...</Text>
        <View style={styles.skillsGrid}>
          {lookingFor.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.skillItem,
                selectedLookingFor.includes(item) ? styles.selectedItem : styles.unselectedItem,
                (item === 'CSS' || item === 'JavaScript') && styles.roundedItem // Apply rounded corners to last row elements
              ]}
              onPress={() => toggleLookingFor(item)}
            >
              <Text style={styles.skillText}>{item}</Text>
            </TouchableOpacity>
          ))}
          {/* Add Looking For Button */}
          <TouchableOpacity style={[styles.addButton, styles.roundedItem]} onPress={addLookingFor}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
>>>>>>> 430345d13a019cc27fbc4d47bc47a9601f0aed2e
      </View>

      {/* Bottom Navigation Dots */}
      <View style={styles.navDotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
<<<<<<< HEAD
  textRow: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center',  // Vertically align the text components in the center
    justifyContent: 'space-between', // Distribute space between text elements
    marginBottom: 20, // Space under the title row
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10, // Add space between the two text elements
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
=======
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
>>>>>>> 430345d13a019cc27fbc4d47bc47a9601f0aed2e
  },
  mainSectionContainer: {
    backgroundColor: '#00b140', // Green background for main section
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
<<<<<<< HEAD
    width: windowWidth - 40, // Ensures the green background extends to the full width of the screen with padding
=======
    width: windowWidth, // Ensures the green background extends to the full width of the screen
  },
  skillsContainer: {
    padding: 15, // Transparent background for skills container
  },
  lookingForContainer: {
    backgroundColor: '#00b140', // Green background for "Looking for" container
    padding: 15,
    borderRadius: 15,
    marginTop: 10, // Space between sections
>>>>>>> 430345d13a019cc27fbc4d47bc47a9601f0aed2e
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
<<<<<<< HEAD
    color: '#FFFFFF', // White text for section titles
    marginBottom: 10,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensures wrapping of grid elements
    justifyContent: 'space-between', // Add space between each interest
  },
  goalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensure items wrap correctly
    justifyContent: 'space-between', // Space them evenly across the grid
    marginBottom: 10,
  },
  interestItem: {
    padding: 10,
    borderRadius: 8,
    margin: 5,
    minWidth: 90, // Ensure enough space for longer words
    alignItems: 'center',
    backgroundColor: '#fff', // Default background
    borderWidth: 1, // Ensure border stays consistent
    borderColor: '#00b140',
  },
  goalItem: {
    padding: 10,
    borderRadius: 8,
    margin: 5, // Add margin to create space between items
    flex: 1, // Make sure items take available space evenly
    maxWidth: '48%', // Ensure items fit within the row (48% width ensures two items fit per row)
    alignItems: 'center',
    backgroundColor: '#fff', // Default background
    borderWidth: 1, // Ensure border stays consistent
    borderColor: '#00b140',
  },
  selectedItem: {
    backgroundColor: '#A6E4A8', // Lighter shade of green when selected
    borderWidth: 1, // Ensure border width is the same
    borderColor: '#00b140', // Keep border color consistent
=======
    color: '#FFFFFF', // White text for both sections
    marginBottom: 10,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  skillItem: {
    padding: 10,
    borderRadius: 8,
    margin: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  roundedItem: {
    borderRadius: 8, // Rounded corners for the last row elements
  },
  selectedItem: {
    backgroundColor: '#A6E4A8', // Lighter shade of green when selected
>>>>>>> 430345d13a019cc27fbc4d47bc47a9601f0aed2e
  },
  unselectedItem: {
    backgroundColor: '#fff', // White background when not selected
    borderWidth: 1,
    borderColor: '#00b140',
  },
  skillText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
    borderColor: '#00b140',
    borderWidth: 1,
  },
  addButtonText: {
<<<<<<< HEAD
    fontSize: 18,
    color: '#00b140',
    fontWeight: 'bold',
  },
  roundedIcon: {
    borderRadius: 50, // Rounded corners for the plus icon
  },
  funFactText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    minHeight: 60,
    textAlignVertical: 'top',
  },
=======
    fontSize: 24,
    color: '#00b140',
    fontWeight: 'bold',
  },
>>>>>>> 430345d13a019cc27fbc4d47bc47a9601f0aed2e
  navDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#00b140',
  },
});

<<<<<<< HEAD
export default InterestsGoalsPage;
=======
export default InterestsPage;
>>>>>>> 430345d13a019cc27fbc4d47bc47a9601f0aed2e
