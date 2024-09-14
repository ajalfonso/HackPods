import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const UserInfoPage = () => {
  const [pronouns, setPronouns] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [school, setSchool] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerBG}>
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>info</Text>
            <Text style={styles.subtitle}>Introduce yourself</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodySection}>
          {/* Pronouns */}
          <Text style={styles.inputHeader}>Pronouns</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., They/Them"
            value={pronouns}
            onChangeText={setPronouns}
          />

          {/* Birthday */}
          <Text style={styles.inputHeader}>Birthday</Text>
          <View style={styles.dateInputContainer}>
            <TextInput
              style={styles.dateInput}
              placeholder="MM"
              value={month}
              onChangeText={setMonth}
              keyboardType="numeric"
              maxLength={2} // Limit to 2 digits for month
            />
            <TextInput
              style={styles.dateInput}
              placeholder="DD"
              value={day}
              onChangeText={setDay}
              keyboardType="numeric"
              maxLength={2} // Limit to 2 digits for day
            />
            <TextInput
              style={styles.dateInput}
              placeholder="YYYY"
              value={year}
              onChangeText={setYear}
              keyboardType="numeric"
              maxLength={4} // Limit to 4 digits for year
            />
          </View>

          {/* School */}
          <Text style={styles.inputHeader}>School</Text>
          <TextInput
            style={styles.input}
            placeholder="Your School Name"
            value={school}
            onChangeText={setSchool}
          />

          {/* Bio */}
          <Text style={styles.inputHeader}>Bio</Text>
          <TextInput
            style={styles.input}
            placeholder="A bit about you"
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Circles at the bottom */}
        <View style={styles.footer}>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBG: {
    flex: 0.5,
    backgroundColor: '#00B207',
    alignItems: 'center',
    justifyContent: 'center', // Center the items within headerBG vertically
  },
  header: {
    position: 'absolute',
    zIndex: 1,
    top: '0%',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 30, // Rounded bottom-left corner
    alignItems: 'center',
    justifyContent: 'flex-end', // Align the text container to the bottom
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Align text to the bottom of the container
    justifyContent: 'space-between', // Space the title and subtitle
    marginBottom: 20, // Adds space between the bottom of the header
  },
  title: {
    fontSize: 32, // Larger font size
    fontWeight: 'bold',
    color: 'black', // Black text for title
    marginRight: 10, // Space between title and subtitle
  },
  subtitle: {
    fontSize: 20, // Larger font size for subtitle
    color: 'black', // Black text for subtitle
    marginLeft: 60,
  },
  bodySection: {
    backgroundColor: '#00B207',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 20, // Added padding to body section
  },
  body: {
    paddingRight: 20,
  },
  inputHeader: {
    fontSize: 16,
    color: 'white', // Input header text color changed to white
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white', // Input field background color set to white
    borderRadius: 5,
  },
  dateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15, // Reduce vertical spacing for birthday inputs
  },
  dateInput: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center', // Center text in input
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
});

export default UserInfoPage;
