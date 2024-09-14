import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt with:', email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>sign up</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.inputHeader}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#A1A1A1"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.inputHeader}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#A1A1A1"
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.inputHeader}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#A1A1A1"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.inputHeader}>Password</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#A1A1A1"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.inputHeader}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#A1A1A1"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {/* Custom Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Already have an account? <Link href="/login" style={styles.signupLink} onPress={() => console.log('Navigate to Log in')}>Log in</Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00B207',
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
    logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    title: {
      fontSize: 36,
      marginBottom: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      marginTop: 2, // Reduced vertical margin for inputs
      marginBottom: 14, // Adjusted for separation between inputs
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
      marginBottom: 2, // Reduced or removed space below header for closer proximity
    },
    loginButton: {
      width: '100%',
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#00B207',
      borderRadius: 5,
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    socialLogin: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
    },
    socialIcon: {
      width: 40,
      height: 40,
      marginHorizontal: 10,
    },
    signupText: {
      fontSize: 16,
    },
    signupLink: {
      color: '#00B207',
      fontWeight: 'bold',
    },
  });

export default SignUpPage;
