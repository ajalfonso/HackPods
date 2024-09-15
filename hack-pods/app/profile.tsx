import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the paper plane icon
import { MaterialIcons } from '@expo/vector-icons'; // For the default profile icon
import { Link } from "expo-router"; // Import Link from expo-router

const windowWidth = Dimensions.get('window').width;

const user = {
  age: 21,
  bio: "Hi! I'm John, a 3rd Year CS student. I participated in 4 hackathons and was a finalist for 2! I'm a back-end engineer with experience in Python, C++, and JavaScript.",
  dob: '2002-05-14',
  experience: 'high',
  interests: ['Volleyball', 'Bouldering', 'Valorant', 'Dancing'],
  major: 'Computer Science',
  name: 'John Doe',
  pronouns: 'He/Him',
  school: ['University of Waterloo'],
  skills: ['Back-end', 'Python', 'JavaScript', 'C++'],
};

const getExperienceLabel = (experience: string) => {
  if (experience === 'low') return 'Beginner';
  if (experience === 'medium') return 'Intermediate';
  return 'Expert'; // for 'high'
};

const ProfilePage: React.FC = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log('Message sent:', message);
    setMessage(''); // Clear the input field after sending
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Profile Section */}
          <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="chevron-back-outline" size={28} color="#00b140" />
            </TouchableOpacity>
            <View style={styles.avatarContainer}>
              <MaterialIcons name="account-circle" size={120} color="#00b140" />
            </View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.pronouns}>{user.pronouns}</Text>
            <Text style={styles.university}>{user.school[0]} ({user.major})</Text>
            
            {/* Experience */}
            <View style={styles.experienceContainer}>
              <Text style={styles.experienceText}>Experience:</Text>
              <Text style={styles.experienceLevel}>{getExperienceLabel(user.experience)}</Text>
            </View>
          </View>

          {/* Bio Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>BIO</Text>
            <Text style={styles.bioText}>{user.bio}</Text>
          </View>

          {/* Skills Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <View style={styles.skillsContainer}>
              {user.skills.map((skill, index) => (
                <TouchableOpacity key={index} style={styles.skillItem}>
                  <Text style={styles.skillText}>{skill}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Interests Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>INTERESTS</Text>
            <View style={styles.skillsContainer}>
              {user.interests.map((interest, index) => (
                <TouchableOpacity key={index} style={styles.skillItem}>
                  <Text style={styles.skillText}>{interest}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Message Section */}
          <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.nextButton}>
                    <Link href="/swipe"> <Text style={styles.nextButtonText}>Let's Start!</Text></Link>
                </TouchableOpacity>
            </View>
      
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // White background
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  pronouns: {
    fontSize: 16,
    color: '#000',
  },
  university: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  experienceText: {
    fontSize: 16,
    color: '#000',
  },
  experienceLevel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  bioText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  skillItem: {
    padding: 10,
    borderRadius: 8,
    margin: 5,
    minWidth: '40%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  skillText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  sendButton: {
    padding: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: "#00b140",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

});

export default ProfilePage;
