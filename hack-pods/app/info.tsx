import React, { useState } from 'react';
import { Link } from "expo-router";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

const UserInfoPage = () => {
  const [pronouns, setPronouns] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [school, setSchool] = useState('');
  const [bio, setBio] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
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

            {/* Centered Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Link href="/skills">
                  <Text style={styles.buttonText}>Continue to Skills</Text>
                </Link>
              </TouchableOpacity>
            </View>

            {/* Circles at the bottom */}
            <View style={styles.footer}>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    zIndex: 1,
    top: '0%',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    marginLeft: 60,
  },
  bodySection: {
    backgroundColor: '#00B207',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 20,
  },
  body: {
    paddingRight: 20,
  },
  inputHeader: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  dateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20, // Adjust margin for better spacing
  },
  button: {
    backgroundColor: '#00B207',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
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
