import React, { useState } from 'react';
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
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
    backgroundColor: '#00b140', // Green background for main section
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
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
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
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
    fontSize: 24,
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

export default InterestsPage;
