import React, { useState } from 'react';
import Logo from "../assets/LoginAssets/Logo.png";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image, // Added Image import
} from 'react-native';
import { Link } from "expo-router";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt with:', email, password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.topContainer}>
            {/* Replace the grid of circles with the Logo */}
            <Image source={Logo} style={styles.logo} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#A1A1A1"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#A1A1A1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            {/* Custom Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Link href="/info">
                <Text style={styles.loginButtonText}>Log In</Text>
              </Link>
            </TouchableOpacity>

            <View style={styles.socialLogin}>
              <TouchableOpacity onPress={() => console.log('Login with Google')}>
                <View style={styles.socialIcon}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Login with GitHub')}>
                <View style={styles.socialIcon}></View>
              </TouchableOpacity>
            </View>
            <Text style={styles.signupText}>
              Don’t have an account?{' '}
              <Link href="/signup" style={styles.signupLink}>
                Sign Up
              </Link>
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
  // Removed gridContainer, row, and circle styles since they're no longer needed
  bottomContainer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
    padding: 20,
    alignItems: 'center',
    paddingTop: 35,
  },
  logo: {
    width: 150, // Adjust as needed
    height: 150, // Adjust as needed
    resizeMode: 'contain',
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    color: '#A1A1A1',
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
    backgroundColor: '#D9D9D9', // Placeholder for social icons
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    color: '#00B207',
    fontWeight: 'bold',
  },
});

export default LoginPage;
