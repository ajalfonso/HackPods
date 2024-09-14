import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { Link } from "expo-router";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up attempt with:', { firstName, lastName, email, password, confirmPassword });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>sign up</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.inputHeader}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              placeholderTextColor="#A1A1A1"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
            />

            <Text style={styles.inputHeader}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              placeholderTextColor="#A1A1A1"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
            />

            <Text style={styles.inputHeader}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#A1A1A1"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Text style={styles.inputHeader}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A1A1A1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            <Text style={styles.inputHeader}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#A1A1A1"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />

            {/* Custom Sign Up Button */}
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>
              Already have an account? <Link href="/login" style={styles.loginLink}>Log in</Link>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B207',
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B207',
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
    padding: 20,
    alignItems: 'center',
    paddingTop: 70,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginTop: 2,
    marginBottom: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    color: '#A1A1A1',
  },
  inputHeader: {
    width: '100%',
    color: '#A1A1A1',
    fontSize: 12,
    fontWeight: 'normal',
    alignSelf: 'flex-start',
    marginBottom: 2,
  },
  signUpButton: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#00B207',
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    color: '#00B207',
    fontWeight: 'bold',
  },
});

export default SignUpPage;
