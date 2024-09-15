import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width; // Get the screen width to ensure the green section stretches fully

const SkillsPage: React.FC = () => {
  const initialSkills = ['Back-end', 'Front-end', 'Figma', 'HTML', 'Python', 'C++', 'CSS', 'JavaScript'];
  const initialLookingFor = ['Back-end', 'Front-end', 'Figma', 'HTML', 'Python', 'C++', 'CSS', 'JavaScript'];

  // State to track selected skills and looking for items
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLookingFor, setSelectedLookingFor] = useState<string[]>([]);

  // State to track the selected experience level
  const [selectedExperience, setSelectedExperience] = useState<'Low' | 'Medium' | 'High'>('Low');

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
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>skills</Text>
      <Text style={styles.subtitle}>3. Show off your skills</Text>

      {/* Main Connected Section */}
      <View style={styles.mainSectionContainer}>
        {/* Experience Section */}
        <View style={styles.innerSection}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.experienceToggle}>
            {['Low', 'Medium', 'High'].map((level, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.experienceButton,
                  selectedExperience === level && styles.activeExperienceButton
                ]}
                onPress={() => setSelectedExperience(level as 'Low' | 'Medium' | 'High')}
              >
                <Text style={[
                  styles.experienceText,
                  selectedExperience === level && styles.activeExperienceText
                ]}>
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Your Skills Section */}
        <View style={styles.innerSection}>
          <Text style={styles.sectionTitle}>Your Skills</Text>
          <View style={styles.skillsContainer}>
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
        <View style={styles.innerSection}>
          <Text style={styles.sectionTitle}>Looking for...</Text>
          <View style={styles.skillsContainer}>
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
        </View>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  mainSectionContainer: {
    backgroundColor: '#00b140',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    width: windowWidth, // Ensures the green background extends to the full width of the screen
  },
  innerSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  experienceToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#99e699', // Light green background for the experience bar
    borderRadius: 30, // Round the corners
    paddingVertical: 4, // Add more vertical padding for better spacing
    paddingHorizontal: 2, // Make it tighter horizontally
  },
  experienceButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1, // Less space between buttons
    borderRadius: 50, // Rounded button appearance
    paddingVertical: 10,
  },
  activeExperienceButton: {
    backgroundColor: '#ffffff',
    borderRadius: 50, // Make the active button more round
  },
  experienceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  activeExperienceText: {
    color: '#000',
  },
  skillsContainer: {
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
    borderWidth: 1, // Keep borders consistent between states
    borderColor: '#00b140',
  },
  roundedItem: {
    borderRadius: 8, // Rounded corners for the last row elements
  },
  selectedItem: {
    backgroundColor: '#99ff99', // Lighter shade of green when selected
    borderWidth: 1, // Make sure border width is consistent when selected
    borderColor: '#00b140', // Keep the green border
  },
  unselectedItem: {
    backgroundColor: '#fff', // White background when not selected
    borderWidth: 1,
    borderColor: '#00b140', // Same border color as selected state
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
    fontSize: 16,
    color: '#00b140',
    fontWeight: 'bold',
  },
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

export default SkillsPage;
